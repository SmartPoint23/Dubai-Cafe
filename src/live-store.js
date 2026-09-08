/* Beauty Queen Cosmetics V7 — live store bridge.
   Existing V6 demo code remains intact. This file adds a production API layer. */
window.BQ_API = {
  base: localStorage.getItem("bq_api_base") || window.BQ_API_BASE || "http://localhost:8787",

  async request(path, options = {}) {
    const response = await fetch(this.base + path, {
      ...options,
      headers: { "Content-Type": "application/json", ...(options.headers || {}) }
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error || "Request failed");
    return data;
  },

  async health() { return this.request("/api/health"); },

  async createOrder(payload) {
    return this.request("/api/orders", { method: "POST", body: JSON.stringify(payload) });
  },

  async mpesa(phone, amount, orderNumber) {
    return this.request("/api/payments/mpesa/stkpush", {
      method: "POST",
      body: JSON.stringify({ phone, amount, order_number: orderNumber })
    });
  },

  async paypalCreate(amount, currency, orderNumber) {
    return this.request("/api/payments/paypal/create-order", {
      method: "POST",
      body: JSON.stringify({ amount, currency, order_number: orderNumber })
    });
  },

  async paypalCapture(paypalOrderId, orderNumber) {
    return this.request("/api/payments/paypal/capture-order", {
      method: "POST",
      body: JSON.stringify({ paypal_order_id: paypalOrderId, order_number: orderNumber })
    });
  }
};

async function BQ_useLiveProducts() {
  try {
    const products = await BQ_API.request("/api/products");
    if (Array.isArray(products) && products.length && typeof window.renderProducts === "function") {
      window.BQ_LIVE_PRODUCTS = products;
      window.renderProducts(products);
      return products;
    }
  } catch (e) {
    console.warn("Live products unavailable; keeping V6 demo catalog.", e.message);
  }
  return null;
}

window.addEventListener("DOMContentLoaded", () => {
  BQ_useLiveProducts();
});
