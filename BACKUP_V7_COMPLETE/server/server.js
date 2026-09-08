const express = require("express");
const cors = require("cors");
const path = require("path");
const crypto = require("crypto");

const app = express();
app.use(cors({ origin: process.env.FRONTEND_ORIGIN ? process.env.FRONTEND_ORIGIN.split(",") : true }));
app.use(express.json({ limit: "1mb" }));

const PORT = process.env.PORT || 8787;
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function supabase(pathname, options = {}) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    throw new Error("Supabase is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.");
  }
  const response = await fetch(`${SUPABASE_URL}/rest/v1/${pathname}`, {
    ...options,
    headers: {
      apikey: SUPABASE_SERVICE_ROLE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
      "Content-Type": "application/json",
      Prefer: options.method === "POST" ? "return=representation" : undefined,
      ...(options.headers || {})
    }
  });
  const text = await response.text();
  if (!response.ok) throw new Error(text || `Supabase HTTP ${response.status}`);
  return text ? JSON.parse(text) : null;
}

function requireAdmin(req, res, next) {
  // The dashboard can be protected by a server-side shared secret for the static build.
  // For a full Supabase Auth deployment, replace this with JWT verification.
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) return res.status(503).json({ error: "ADMIN_API_KEY is not configured." });
  const supplied = req.headers["x-admin-key"];
  if (!supplied || supplied !== expected) return res.status(401).json({ error: "Unauthorized" });
  next();
}

app.get("/api/health", (req, res) => {
  res.json({
    ok: true,
    store: "Beauty Queen Cosmetics",
    database: Boolean(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY),
    mpesa: Boolean(process.env.MPESA_CONSUMER_KEY && process.env.MPESA_CONSUMER_SECRET && process.env.MPESA_SHORTCODE),
    paypal: Boolean(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET)
  });
});

app.get("/api/products", async (req, res) => {
  try {
    const rows = await supabase("products?select=*&active=eq.true&order=created_at.desc");
    res.json(rows);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/orders", async (req, res) => {
  try {
    const { customer, items, payment_method, currency = "KES", total } = req.body;
    if (!customer?.name || !customer?.phone || !customer?.address) {
      return res.status(400).json({ error: "Name, phone and address are required." });
    }
    if (!Array.isArray(items) || !items.length || !Number.isFinite(Number(total))) {
      return res.status(400).json({ error: "Order items and total are required." });
    }

    const orderNumber = `BQ-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(2).toString("hex").toUpperCase()}`;
    const inserted = await supabase("orders", {
      method: "POST",
      body: JSON.stringify({
        order_number: orderNumber,
        customer_name: customer.name,
        customer_email: customer.email || null,
        customer_phone: customer.phone,
        shipping_address: customer.address,
        items,
        total: Number(total),
        currency,
        payment_method,
        payment_status: "pending",
        order_status: "pending"
      })
    });

    res.status(201).json(inserted?.[0] || { order_number: orderNumber });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ---------------- M-PESA STK PUSH ----------------
async function mpesaToken() {
  const key = process.env.MPESA_CONSUMER_KEY;
  const secret = process.env.MPESA_CONSUMER_SECRET;
  const auth = Buffer.from(`${key}:${secret}`).toString("base64");
  const host = process.env.MPESA_ENV === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";
  const r = await fetch(`${host}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: { Authorization: `Basic ${auth}` }
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data.errorMessage || "M-Pesa token request failed");
  return { token: data.access_token, host };
}

app.post("/api/payments/mpesa/stkpush", async (req, res) => {
  try {
    const { phone, amount, order_number, account_reference } = req.body;
    if (!phone || !amount || !order_number) return res.status(400).json({ error: "Phone, amount and order number are required." });

    const { token, host } = await mpesaToken();
    const shortcode = process.env.MPESA_SHORTCODE;
    const passkey = process.env.MPESA_PASSKEY;
    const timestamp = new Date().toISOString().replace(/[-:TZ.]/g, "").slice(0, 14);
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

    const payload = {
      BusinessShortCode: shortcode,
      Password: password,
      Timestamp: timestamp,
      TransactionType: process.env.MPESA_TRANSACTION_TYPE || "CustomerPayBillOnline",
      Amount: Math.max(1, Math.round(Number(amount))),
      PartyA: phone,
      PartyB: shortcode,
      PhoneNumber: phone,
      CallBackURL: process.env.MPESA_CALLBACK_URL,
      AccountReference: account_reference || order_number,
      TransactionDesc: `Beauty Queen ${order_number}`
    };

    const r = await fetch(`${host}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await r.json();
    if (!r.ok || data.ResponseCode === "1") throw new Error(data.errorMessage || data.ResponseDescription || "M-Pesa STK request failed");

    if (SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      await supabase(`orders?order_number=eq.${encodeURIComponent(order_number)}`, {
        method: "PATCH",
        body: JSON.stringify({ mpesa_checkout_request_id: data.CheckoutRequestID || null, payment_reference: data.MerchantRequestID || null })
      });
    }
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/payments/mpesa/callback", async (req, res) => {
  try {
    const body = req.body;
    const result = body?.Body?.stkCallback;
    const metadata = result?.CallbackMetadata?.Item || [];
    const get = (name) => metadata.find(x => x.Name === name)?.Value ?? null;
    const checkoutId = result?.CheckoutRequestID;
    if (checkoutId && SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const paid = result.ResultCode === 0;
      await supabase(`orders?mpesa_checkout_request_id=eq.${encodeURIComponent(checkoutId)}`, {
        method: "PATCH",
        body: JSON.stringify({
          payment_status: paid ? "paid" : "failed",
          payment_reference: get("MpesaReceiptNumber") || null,
          paid_at: paid ? new Date().toISOString() : null
        })
      });
    }
  } finally {
    res.json({ ResultCode: 0, ResultDesc: "Accepted" });
  }
});

// ---------------- PAYPAL ----------------
async function paypalAccessToken() {
  const base = process.env.PAYPAL_ENV === "production"
    ? "https://api-m.paypal.com"
    : "https://api-m.sandbox.paypal.com";
  const auth = Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64");
  const r = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=client_credentials"
  });
  const data = await r.json();
  if (!r.ok) throw new Error(data.error_description || "PayPal authentication failed");
  return { token: data.access_token, base };
}

app.post("/api/payments/paypal/create-order", async (req, res) => {
  try {
    const { amount, currency = "USD", order_number } = req.body;
    const { token, base } = await paypalAccessToken();
    const r = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{ reference_id: order_number, amount: { currency_code: currency, value: Number(amount).toFixed(2) } }]
      })
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.message || "PayPal order creation failed");
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

app.post("/api/payments/paypal/capture-order", async (req, res) => {
  try {
    const { paypal_order_id, order_number } = req.body;
    if (!paypal_order_id) return res.status(400).json({ error: "PayPal order ID is required." });
    const { token, base } = await paypalAccessToken();
    const r = await fetch(`${base}/v2/checkout/orders/${encodeURIComponent(paypal_order_id)}/capture`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }
    });
    const data = await r.json();
    if (!r.ok) throw new Error(data.message || "PayPal capture failed");

    if (order_number && SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY) {
      const paid = data.status === "COMPLETED";
      await supabase(`orders?order_number=eq.${encodeURIComponent(order_number)}`, {
        method: "PATCH",
        body: JSON.stringify({
          payment_status: paid ? "paid" : "failed",
          payment_reference: data.id || null,
          paid_at: paid ? new Date().toISOString() : null
        })
      });
    }
    res.json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

// ---------------- ADMIN CRUD ----------------
app.get("/api/admin/products", requireAdmin, async (req, res) => {
  try { res.json(await supabase("products?select=*&order=created_at.desc")); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.post("/api/admin/products", requireAdmin, async (req, res) => {
  try { res.status(201).json(await supabase("products", { method:"POST", body:JSON.stringify(req.body) })); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch("/api/admin/products/:id", requireAdmin, async (req, res) => {
  try { res.json(await supabase(`products?id=eq.${encodeURIComponent(req.params.id)}`, { method:"PATCH", body:JSON.stringify(req.body) })); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.delete("/api/admin/products/:id", requireAdmin, async (req, res) => {
  try { await supabase(`products?id=eq.${encodeURIComponent(req.params.id)}`, { method:"DELETE" }); res.json({ ok:true }); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.get("/api/admin/orders", requireAdmin, async (req, res) => {
  try { res.json(await supabase("orders?select=*&order=created_at.desc")); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.patch("/api/admin/orders/:id", requireAdmin, async (req, res) => {
  try { res.json(await supabase(`orders?id=eq.${encodeURIComponent(req.params.id)}`, { method:"PATCH", body:JSON.stringify(req.body) })); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.get("/api/admin/users", requireAdmin, async (req, res) => {
  try { res.json(await supabase("profiles?select=*&order=created_at.desc")); }
  catch (e) { res.status(500).json({ error: e.message }); }
});

app.get("/api/admin/stats", requireAdmin, async (req, res) => {
  try {
    const [products, orders, users] = await Promise.all([
      supabase("products?select=id,price,active"),
      supabase("orders?select=id,total,payment_status,order_status"),
      supabase("profiles?select=id")
    ]);
    const revenue = orders.filter(o => o.payment_status === "paid").reduce((s,o) => s + Number(o.total || 0), 0);
    res.json({ products: products.length, orders: orders.length, users: users.length, revenue });
  } catch (e) { res.status(500).json({ error: e.message }); }
});

app.listen(PORT, () => console.log(`Beauty Queen API running on http://localhost:${PORT}`));
