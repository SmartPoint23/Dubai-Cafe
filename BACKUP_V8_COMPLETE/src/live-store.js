/* BEAUTY QUEEN V8 LIVE STORE BRIDGE
   V6/V7 storefront remains intact; this layer connects it to the V8 API. */
window.BQ_API = {
  base: localStorage.getItem("bq_api_base") || window.BQ_API_BASE || "http://localhost:8787",
  async request(path, options={}) {
    const r=await fetch(this.base+path,{...options,headers:{"Content-Type":"application/json",...(options.headers||{})}});
    const d=await r.json().catch(()=>({}));
    if(!r.ok) throw Error(d.error||"Request failed");
    return d;
  },
  products(){return this.request("/api/products")},
  settings(){return this.request("/api/settings")},
  createOrder(p){return this.request("/api/orders",{method:"POST",body:JSON.stringify(p)})},
  mpesa(phone,amount,order_number){return this.request("/api/payments/mpesa/stkpush",{method:"POST",body:JSON.stringify({phone,amount,order_number})})},
  paypalCreate(amount,currency,order_number){return this.request("/api/payments/paypal/create-order",{method:"POST",body:JSON.stringify({amount,currency,order_number})})},
  paypalCapture(paypal_order_id,order_number){return this.request("/api/payments/paypal/capture-order",{method:"POST",body:JSON.stringify({paypal_order_id,order_number})})}
};

async function BQ_refreshLiveCatalog(){
  try{
    const products=await BQ_API.products();
    window.BQ_LIVE_PRODUCTS=products;
    if(typeof window.renderProducts==="function") window.renderProducts(products);
    return products;
  }catch(e){console.warn("V8 API unavailable; existing catalog remains active.",e.message);return null}
}
window.addEventListener("DOMContentLoaded",BQ_refreshLiveCatalog);
