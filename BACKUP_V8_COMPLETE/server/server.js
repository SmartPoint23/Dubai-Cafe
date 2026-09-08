const express = require("express");
const cors = require("cors");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 8787;
const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || "*";

app.use(cors({ origin: FRONTEND_ORIGIN === "*" ? true : FRONTEND_ORIGIN.split(",") }));
app.use(express.json({ limit: "1mb" }));

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

async function supabase(pathname, options = {}) {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) throw new Error("Supabase is not configured.");
  const headers = {
    apikey: SUPABASE_SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
    ...(options.headers || {})
  };
  if (options.method === "POST") headers.Prefer = "return=representation";
  const r = await fetch(`${SUPABASE_URL}/rest/v1/${pathname}`, { ...options, headers });
  const text = await r.text();
  if (!r.ok) throw new Error(text || `Supabase HTTP ${r.status}`);
  return text ? JSON.parse(text) : null;
}

function requireAdmin(req, res, next) {
  const expected = process.env.ADMIN_API_KEY;
  if (!expected) return res.status(503).json({ error: "ADMIN_API_KEY is not configured." });
  if (req.headers["x-admin-key"] !== expected) return res.status(401).json({ error: "Unauthorized" });
  next();
}

function cleanPhone(phone) {
  const p = String(phone || "").replace(/[^\d+]/g, "");
  if (p.startsWith("+")) return p.slice(1);
  if (p.startsWith("0")) return "254" + p.slice(1);
  return p;
}

function money(n) { return Number(n || 0).toFixed(2); }

app.get("/api/health", (req,res) => res.json({
  ok: true, version: "8.0.0",
  database: !!(SUPABASE_URL && SUPABASE_SERVICE_ROLE_KEY),
  mpesa: !!(process.env.MPESA_CONSUMER_KEY && process.env.MPESA_CONSUMER_SECRET && process.env.MPESA_SHORTCODE),
  paypal: !!(process.env.PAYPAL_CLIENT_ID && process.env.PAYPAL_CLIENT_SECRET),
  card_gateway: !!process.env.CARD_GATEWAY_BASE_URL
}));

app.get("/api/products", async (req,res) => {
  try {
    const rows = await supabase("products?select=*&active=eq.true&order=created_at.desc");
    res.json(rows);
  } catch(e) { res.status(500).json({error:e.message}); }
});

app.get("/api/settings", async (req,res) => {
  try { res.json((await supabase("store_settings?id=eq.1&select=*"))[0] || {}); }
  catch(e) { res.status(500).json({error:e.message}); }
});

/* -------- Orders + stock reservation -------- */
app.post("/api/orders", async (req,res) => {
  try {
    const {customer, items, payment_method, currency="KES", total, coupon_code} = req.body;
    if (!customer?.name || !customer?.phone || !customer?.address)
      return res.status(400).json({error:"Name, phone and address are required."});
    if (!Array.isArray(items) || !items.length || !Number.isFinite(Number(total)))
      return res.status(400).json({error:"Order items and total are required."});

    // Never trust browser prices. Re-read product prices from DB.
    const ids = items.map(x=>x.id).filter(Boolean);
    const products = await supabase(`products?id=in.(${ids.map(encodeURIComponent).join(",")})&active=eq.true&select=id,name,price,stock`);
    const byId = Object.fromEntries(products.map(p=>[p.id,p]));
    const verifiedItems = [];
    let verifiedSubtotal = 0;

    for (const item of items) {
      const p = byId[item.id];
      const qty = Math.max(1, Math.floor(Number(item.qty || 1)));
      if (!p) return res.status(400).json({error:`Product unavailable: ${item.name || item.id}`});
      if (Number(p.stock) < qty) return res.status(409).json({error:`Not enough stock for ${p.name}.`});
      verifiedItems.push({id:p.id,name:p.name,price:Number(p.price),qty});
      verifiedSubtotal += Number(p.price) * qty;
    }

    let discount = 0;
    if (coupon_code) {
      const coupons = await supabase(`coupons?code=eq.${encodeURIComponent(String(coupon_code).toUpperCase())}&active=eq.true&select=*`);
      const c = coupons[0];
      if (c && (!c.expires_at || new Date(c.expires_at) > new Date()) &&
          (!c.max_uses || c.used_count < c.max_uses) &&
          verifiedSubtotal >= Number(c.min_order || 0)) {
        discount = c.discount_type === "percent"
          ? verifiedSubtotal * Number(c.discount_value) / 100
          : Number(c.discount_value);
        discount = Math.min(discount, verifiedSubtotal);
      }
    }

    const verifiedTotal = Math.max(0, verifiedSubtotal - discount);
    const orderNumber = `BQ-${Date.now().toString(36).toUpperCase()}-${crypto.randomBytes(3).toString("hex").toUpperCase()}`;

    // Reserve/decrement stock atomically before creating the order.
    for (const item of verifiedItems) {
      const result = await supabase("rpc/decrement_product_stock", {
        method:"POST",
        body:JSON.stringify({p_id:item.id,p_qty:item.qty})
      });
      if (result !== true) {
        // Best-effort rollback for items already decremented.
        for (const done of verifiedItems.slice(0, verifiedItems.indexOf(item))) {
          await supabase("rpc/restore_product_stock",{method:"POST",body:JSON.stringify({p_id:done.id,p_qty:done.qty})}).catch(()=>{});
        }
        return res.status(409).json({error:"One or more products went out of stock. Please refresh your cart."});
      }
    }

    try {
      const inserted = await supabase("orders", {
        method:"POST",
        body:JSON.stringify({
          order_number:orderNumber,
          customer_name:customer.name,
          customer_email:customer.email || null,
          customer_phone:cleanPhone(customer.phone),
          shipping_address:customer.address,
          items:verifiedItems,
          total:verifiedTotal,
          currency,
          payment_method,
          payment_status:"pending",
          order_status:"pending"
        })
      });
      const order = inserted?.[0];
      if (order?.id) await supabase("order_events",{method:"POST",body:JSON.stringify({order_id:order.id,status:"pending",note:"Order created"})});
      res.status(201).json({...order, discount});
    } catch(e) {
      for (const item of verifiedItems)
        await supabase("rpc/restore_product_stock",{method:"POST",body:JSON.stringify({p_id:item.id,p_qty:item.qty})}).catch(()=>{});
      throw e;
    }
  } catch(e) { res.status(500).json({error:e.message}); }
});

/* -------- M-PESA Daraja -------- */
async function mpesaToken() {
  const auth = Buffer.from(`${process.env.MPESA_CONSUMER_KEY}:${process.env.MPESA_CONSUMER_SECRET}`).toString("base64");
  const host = process.env.MPESA_ENV === "production" ? "https://api.safaricom.co.ke" : "https://sandbox.safaricom.co.ke";
  const r = await fetch(`${host}/oauth/v1/generate?grant_type=client_credentials`,{headers:{Authorization:`Basic ${auth}`}});
  const d = await r.json(); if(!r.ok) throw Error(d.errorMessage || "M-PESA token request failed");
  return {token:d.access_token,host};
}
app.post("/api/payments/mpesa/stkpush", async (req,res) => {
  try {
    const {phone,amount,order_number} = req.body;
    if(!phone||!amount||!order_number) return res.status(400).json({error:"Phone, amount and order number are required."});
    const {token,host}=await mpesaToken();
    const shortcode=process.env.MPESA_SHORTCODE, passkey=process.env.MPESA_PASSKEY;
    const timestamp=new Date().toISOString().replace(/[-:TZ.]/g,"").slice(0,14);
    const password=Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");
    const payload={
      BusinessShortCode:shortcode,Password:password,Timestamp:timestamp,
      TransactionType:process.env.MPESA_TRANSACTION_TYPE||"CustomerPayBillOnline",
      Amount:Math.max(1,Math.round(Number(amount))),
      PartyA:cleanPhone(phone),PartyB:shortcode,PhoneNumber:cleanPhone(phone),
      CallBackURL:process.env.MPESA_CALLBACK_URL,AccountReference:order_number,
      TransactionDesc:`Beauty Queen ${order_number}`
    };
    const r=await fetch(`${host}/mpesa/stkpush/v1/processrequest`,{
      method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},body:JSON.stringify(payload)
    });
    const d=await r.json(); if(!r.ok) throw Error(d.errorMessage||d.ResponseDescription||"M-PESA request failed");
    await supabase(`orders?order_number=eq.${encodeURIComponent(order_number)}`,{
      method:"PATCH",body:JSON.stringify({mpesa_checkout_request_id:d.CheckoutRequestID||null,payment_reference:d.MerchantRequestID||null})
    });
    res.json(d);
  } catch(e){res.status(500).json({error:e.message});}
});

app.post("/api/payments/mpesa/callback",async(req,res)=>{
  try{
    const result=req.body?.Body?.stkCallback, items=result?.CallbackMetadata?.Item||[];
    const val=n=>items.find(x=>x.Name===n)?.Value??null;
    const checkoutId=result?.CheckoutRequestID;
    if(checkoutId){
      const orderRows=await supabase(`orders?mpesa_checkout_request_id=eq.${encodeURIComponent(checkoutId)}&select=id,order_number`);
      const order=orderRows[0];
      if(order){
        const paid=result.ResultCode===0;
        await supabase(`orders?id=eq.${order.id}`,{method:"PATCH",body:JSON.stringify({
          payment_status:paid?"paid":"failed",
          payment_reference:val("MpesaReceiptNumber"),
          paid_at:paid?new Date().toISOString():null,
          updated_at:new Date().toISOString()
        })});
        await supabase("order_events",{method:"POST",body:JSON.stringify({
          order_id:order.id,status:paid?"paid":"payment_failed",note:result.ResultDesc||"M-PESA callback"
        })});
      }
    }
  }catch(e){console.error("M-PESA callback",e.message)}
  res.json({ResultCode:0,ResultDesc:"Accepted"});
});

/* -------- PayPal -------- */
async function paypalAccessToken(){
  const base=process.env.PAYPAL_ENV==="production"?"https://api-m.paypal.com":"https://api-m.sandbox.paypal.com";
  const auth=Buffer.from(`${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`).toString("base64");
  const r=await fetch(`${base}/v1/oauth2/token`,{method:"POST",headers:{Authorization:`Basic ${auth}`,"Content-Type":"application/x-www-form-urlencoded"},body:"grant_type=client_credentials"});
  const d=await r.json();if(!r.ok)throw Error(d.error_description||"PayPal authentication failed");
  return {token:d.access_token,base};
}
app.post("/api/payments/paypal/create-order",async(req,res)=>{
  try{
    const {amount,currency="USD",order_number}=req.body;
    const {token,base}=await paypalAccessToken();
    const r=await fetch(`${base}/v2/checkout/orders`,{method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"},
      body:JSON.stringify({intent:"CAPTURE",purchase_units:[{reference_id:order_number,amount:{currency_code:currency,value:money(amount)}}]})});
    const d=await r.json();if(!r.ok)throw Error(d.message||"PayPal order creation failed");res.json(d);
  }catch(e){res.status(500).json({error:e.message});}
});
app.post("/api/payments/paypal/capture-order",async(req,res)=>{
  try{
    const {paypal_order_id,order_number}=req.body;if(!paypal_order_id)throw Error("PayPal order ID is required.");
    const {token,base}=await paypalAccessToken();
    const r=await fetch(`${base}/v2/checkout/orders/${encodeURIComponent(paypal_order_id)}/capture`,{method:"POST",headers:{Authorization:`Bearer ${token}`,"Content-Type":"application/json"}});
    const d=await r.json();if(!r.ok)throw Error(d.message||"PayPal capture failed");
    if(order_number){
      const rows=await supabase(`orders?order_number=eq.${encodeURIComponent(order_number)}&select=id`);
      if(rows[0])await supabase(`orders?id=eq.${rows[0].id}`,{method:"PATCH",body:JSON.stringify({
        payment_status:d.status==="COMPLETED"?"paid":"failed",payment_reference:d.id||null,
        paid_at:d.status==="COMPLETED"?new Date().toISOString():null,updated_at:new Date().toISOString()
      })});
    }
    res.json(d);
  }catch(e){res.status(500).json({error:e.message});}
});

/* -------- Admin -------- */
app.get("/api/admin/stats",requireAdmin,async(req,res)=>{
  try{
    const [p,o,u]=await Promise.all([
      supabase("products?select=id,active,stock"),
      supabase("orders?select=id,total,payment_status,order_status,created_at"),
      supabase("profiles?select=id")
    ]);
    const paid=o.filter(x=>x.payment_status==="paid");
    res.json({
      products:p.length,active_products:p.filter(x=>x.active).length,
      low_stock:p.filter(x=>Number(x.stock)<=5).length,
      orders:o.length,users:u.length,
      revenue:paid.reduce((a,x)=>a+Number(x.total||0),0),
      paid_orders:paid.length,pending_orders:o.filter(x=>x.order_status==="pending").length
    });
  }catch(e){res.status(500).json({error:e.message});}
});
app.get("/api/admin/products",requireAdmin,async(req,res)=>{try{res.json(await supabase("products?select=*&order=created_at.desc"));}catch(e){res.status(500).json({error:e.message});}});
app.post("/api/admin/products",requireAdmin,async(req,res)=>{try{res.status(201).json(await supabase("products",{method:"POST",body:JSON.stringify(req.body)}));}catch(e){res.status(500).json({error:e.message});}});
app.patch("/api/admin/products/:id",requireAdmin,async(req,res)=>{try{res.json(await supabase(`products?id=eq.${encodeURIComponent(req.params.id)}`,{method:"PATCH",body:JSON.stringify({...req.body,updated_at:new Date().toISOString()})}));}catch(e){res.status(500).json({error:e.message});}});
app.delete("/api/admin/products/:id",requireAdmin,async(req,res)=>{try{await supabase(`products?id=eq.${encodeURIComponent(req.params.id)}`,{method:"DELETE"});res.json({ok:true});}catch(e){res.status(500).json({error:e.message});}});
app.get("/api/admin/orders",requireAdmin,async(req,res)=>{try{res.json(await supabase("orders?select=*&order=created_at.desc"));}catch(e){res.status(500).json({error:e.message});}});
app.patch("/api/admin/orders/:id",requireAdmin,async(req,res)=>{
  try{
    const rows=await supabase(`orders?id=eq.${encodeURIComponent(req.params.id)}&select=*`);
    const old=rows[0]; if(!old)return res.status(404).json({error:"Order not found"});
    const patch={...req.body,updated_at:new Date().toISOString()};
    await supabase(`orders?id=eq.${encodeURIComponent(req.params.id)}`,{method:"PATCH",body:JSON.stringify(patch)});
    if(patch.order_status) await supabase("order_events",{method:"POST",body:JSON.stringify({order_id:old.id,status:patch.order_status,note:"Admin status update"})});
    res.json({ok:true});
  }catch(e){res.status(500).json({error:e.message});}
});
app.get("/api/admin/users",requireAdmin,async(req,res)=>{try{res.json(await supabase("profiles?select=*&order=created_at.desc"));}catch(e){res.status(500).json({error:e.message});}});
app.get("/api/admin/events/:orderId",requireAdmin,async(req,res)=>{try{res.json(await supabase(`order_events?order_id=eq.${encodeURIComponent(req.params.orderId)}&select=*&order=created_at.asc`));}catch(e){res.status(500).json({error:e.message});}});
app.get("/api/admin/coupons",requireAdmin,async(req,res)=>{try{res.json(await supabase("coupons?select=*&order=created_at.desc"));}catch(e){res.status(500).json({error:e.message});}});
app.post("/api/admin/coupons",requireAdmin,async(req,res)=>{try{res.status(201).json(await supabase("coupons",{method:"POST",body:JSON.stringify({...req.body,code:String(req.body.code||"").toUpperCase()})}));}catch(e){res.status(500).json({error:e.message});}});

app.listen(PORT,()=>console.log(`Beauty Queen Cosmetics API V8 running on :${PORT}`));
