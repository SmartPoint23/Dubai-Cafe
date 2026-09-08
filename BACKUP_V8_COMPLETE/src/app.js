const products=[{id:1,n:'Radiance Vitamin C Serum',c:'Skincare',p:3500,old:4200,e:'🍊',d:'Brightening daily serum'},{id:2,n:'Hyaluronic Hydra Serum',c:'Skincare',p:3100,old:3800,e:'💧',d:'Multi-level hydration'},{id:3,n:'Gentle Foaming Cleanser',c:'Skincare',p:2200,old:2700,e:'🫧',d:'Daily face cleanser'},{id:4,n:'SPF 50 Daily Shield',c:'Skincare',p:2800,old:3300,e:'☀️',d:'Lightweight daily sunscreen'},{id:5,n:'Retinol Night Serum',c:'Skincare',p:3900,old:4600,e:'🌙',d:'Night-time renewal care'},{id:6,n:'Niacinamide Balance Serum',c:'Skincare',p:3000,old:3500,e:'🌿',d:'Balanced-looking skin'},{id:7,n:'Barrier Repair Cream',c:'Skincare',p:3600,old:4200,e:'🧴',d:'Comforting moisture barrier care'},{id:8,n:'Clay Detox Mask',c:'Skincare',p:2400,old:2900,e:'🪨',d:'Weekly deep-clean mask'},{id:9,n:'Peptide Eye Cream',c:'Skincare',p:4200,old:4900,e:'👁️',d:'Targeted eye-area care'},{id:10,n:'Rose Water Mist',c:'Skincare',p:1800,old:2200,e:'🌹',d:'Refreshing facial mist'},{id:11,n:'Soft Matte Foundation',c:'Makeup',p:3200,old:3800,e:'💄',d:'Long-wear complexion'},{id:12,n:'Radiant Concealer',c:'Makeup',p:2300,old:2800,e:'✨',d:'Buildable under-eye coverage'},{id:13,n:'Velvet Blush Duo',c:'Makeup',p:2600,old:3200,e:'🌸',d:'Two-tone cheek color'},{id:14,n:'Sculpt & Glow Palette',c:'Makeup',p:3900,old:4500,e:'🎨',d:'Contour, blush and highlight'},{id:15,n:'Waterproof Mascara',c:'Makeup',p:1900,old:2400,e:'👁️',d:'Defined lashes'},{id:16,n:'Precision Brow Kit',c:'Makeup',p:2100,old:2600,e:'🖌️',d:'Brows made simple'},{id:17,n:'Liquid Liner Pro',c:'Makeup',p:1600,old:2000,e:'🖤',d:'Crisp eyeliner'},{id:18,n:'Glossy Lip Oil',c:'Makeup',p:1700,old:2100,e:'💋',d:'Hydrating shine'},{id:19,n:'Nude Lipstick Collection',c:'Makeup',p:2500,old:3100,e:'💄',d:'Everyday nude shades'},{id:20,n:'Makeup Fixing Spray',c:'Makeup',p:2300,old:2800,e:'💦',d:'Longer-lasting finish'},{id:21,n:'Velvet Rose Eau de Parfum',c:'Perfume',p:6800,old:8000,e:'🌹',d:'Elegant floral signature scent'},{id:22,n:'Midnight Oud Perfume',c:'Perfume',p:7200,old:8500,e:'🌙',d:'Warm sophisticated fragrance'},{id:23,n:'Fresh Bloom Eau de Parfum',c:'Perfume',p:5900,old:7000,e:'🌷',d:'Fresh floral scent'},{id:24,n:'Vanilla Cloud Mist',c:'Perfume',p:3200,old:3800,e:'☁️',d:'Sweet soft fragrance mist'},{id:25,n:'Amber Nights EDP',c:'Perfume',p:6500,old:7600,e:'🧡',d:'Warm amber fragrance'},{id:26,n:'Citrus Muse EDP',c:'Perfume',p:5600,old:6500,e:'🍋',d:'Bright citrus signature'},{id:27,n:'Rose Musk Perfume Oil',c:'Perfume',p:3600,old:4200,e:'🌹',d:'Layering-friendly perfume oil'},{id:28,n:'Signature Scent Gift Set',c:'Perfume',p:8900,old:10500,e:'🎁',d:'Fragrance discovery set'},{id:29,n:'Crown Repair Hair Mask',c:'Hair',p:2800,old:3300,e:'👑',d:'Intensive dry-hair care'},{id:30,n:'Argan Shine Hair Oil',c:'Hair',p:2600,old:3100,e:'✨',d:'Smooth shine and softness'},{id:31,n:'Curl Define Cream',c:'Hair',p:2900,old:3400,e:'🌀',d:'Defined curls and coils'},{id:32,n:'Scalp Care Shampoo',c:'Hair',p:2500,old:3000,e:'🫧',d:'Fresh scalp cleansing'},{id:33,n:'Repair Conditioner',c:'Hair',p:2400,old:2900,e:'🌿',d:'Softening daily conditioner'},{id:34,n:'Leave-In Detangler',c:'Hair',p:2100,old:2600,e:'💧',d:'Easy detangling'},{id:35,n:'Edge Styling Gel',c:'Hair',p:1500,old:1900,e:'👑',d:'Smooth hold'},{id:36,n:'Silk Sleep Bonnet',c:'Hair',p:1800,old:2300,e:'🧢',d:'Night hair protection'},{id:37,n:'Golden Hour Body Oil',c:'Body',p:2600,old:3200,e:'✨',d:'Nourishing body oil'},{id:38,n:'Cloud Soft Body Butter',c:'Body',p:2200,old:2700,e:'☁️',d:'Rich body moisture'},{id:39,n:'Vanilla Sugar Scrub',c:'Body',p:2300,old:2800,e:'🍦',d:'Smoothing body scrub'},{id:40,n:'Shea Body Lotion',c:'Body',p:1900,old:2300,e:'🥥',d:'Everyday body hydration'},{id:41,n:'Brightening Body Wash',c:'Body',p:1800,old:2200,e:'🫧',d:'Fresh cleansing wash'},{id:42,n:'Silky Hand Cream',c:'Body',p:1200,old:1500,e:'🤍',d:'Soft hand care'},{id:43,n:'Diamond Nail Studio Kit',c:'Nails',p:2400,old:2900,e:'💅',d:'At-home manicure essentials'},{id:44,n:'Gel Polish Starter Set',c:'Nails',p:3200,old:3900,e:'💅',d:'Multi-color gel set'},{id:45,n:'Nail Care Oil',c:'Nails',p:1100,old:1400,e:'✨',d:'Cuticle care'},{id:46,n:'Pro Beauty Brush Set',c:'Tools',p:3900,old:4500,e:'🪞',d:'Complete face and eye brushes'},{id:47,n:'LED Makeup Mirror',c:'Tools',p:6500,old:7500,e:'💡',d:'Lighted beauty mirror'},{id:48,n:'Facial Ice Roller',c:'Tools',p:1800,old:2200,e:'🧊',d:'Cooling facial tool'},{id:49,n:'Makeup Sponge Trio',c:'Tools',p:1400,old:1800,e:'💗',d:'Blending sponge set'},{id:50,n:'Queen Gift Box',c:'Gifts',p:7500,old:9000,e:'🎁',d:'Curated luxury beauty gift set'},{id:51,n:'Bridal Beauty Box',c:'Gifts',p:12500,old:14500,e:'👰',d:'Wedding-ready beauty collection'},{id:52,n:'Self-Care Weekend Box',c:'Gifts',p:6800,old:8000,e:'🛁',d:'Relaxing body and skincare set'},{id:53,n:'Pink Luxury Mini Set',c:'Gifts',p:4500,old:5400,e:'🎀',d:'Travel-size beauty favorites'}];

const productBrands = {
  Skincare: ["The Ordinary","CeraVe","La Roche-Posay","COSRX","Neutrogena"],
  Makeup: ["MAC","NARS","Maybelline","Rare Beauty","Fenty Beauty"],
  Perfume: ["Dior Beauty","YSL Beauty","Chanel Beauty","Estée Lauder"],
  Hair: ["SheaMoisture","L’Oréal","CeraVe"],
  Body: ["Vaseline","SheaMoisture","Neutrogena"],
  Nails: ["Maybelline","L’Oréal","MAC"],
  Tools: ["Beauty Queen","MAC","NARS"],
  Gifts: ["Beauty Queen","Dior Beauty","YSL Beauty"]
};

const categoryImages = {
  Skincare: [
    "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=85"
  ],
  Makeup: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1583241800698-e8ab01830a07?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=85"
  ],
  Perfume: [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=900&q=85"
  ],
  Hair: [
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=900&q=85"
  ],
  Body: [
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=900&q=85"
  ],
  Nails: [
    "https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=85"
  ],
  Tools: [
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=85"
  ],
  Gifts: [
    "https://images.unsplash.com/photo-1511381939415-e44015466834?auto=format&fit=crop&w=900&q=85",
    "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=900&q=85"
  ]
};

products.forEach((x, idx) => {
  const brands = productBrands[x.c] || ["Beauty Queen"];
  x.brand = brands[idx % brands.length];
  const imgs = categoryImages[x.c] || categoryImages.Skincare;
  x.img = imgs[idx % imgs.length];
  x.rating = (4.6 + ((idx * 7) % 5) / 10).toFixed(1);
  x.reviews = 24 + ((idx * 37) % 280);
});

let activeBrand='All Brands';
let cart=JSON.parse(localStorage.getItem('bqcart')||'[]'), wish=new Set(JSON.parse(localStorage.getItem('bqwish')||'[]')), active='All';
const money=n=>'KES '+n.toLocaleString();
function renderProducts(){
  let q=(document.getElementById('search')?.value||'').toLowerCase(),
      s=document.getElementById('sort')?.value||'featured';
  let a=products.filter(x=>
    (active==='All'||x.c===active) &&
    (activeBrand==='All Brands'||x.brand===activeBrand) &&
    (x.n+' '+x.c+' '+x.d+' '+(x.brand||'')).toLowerCase().includes(q)
  );
  if(s==='priceLow')a.sort((x,y)=>x.p-y.p);
  if(s==='priceHigh')a.sort((x,y)=>y.p-x.p); if(s==='rating')a.sort((x,y)=>y.rating-x.rating);
  document.getElementById('products').innerHTML=a.map(x=>`
    <article class="product product-rich">
      <button class="heart ${wish.has(x.id)?'on':''}" onclick="toggleWish(${x.id})" aria-label="Wishlist">♡</button>
      <div class="pic photo-pic" onclick="openProduct(${x.id})">
        <img src="${x.img}" alt="${x.n}" loading="lazy">
        <span class="quick-view">Quick view</span>
      </div>
      <div class="product-meta"><small>${x.c} • ${x.brand}</small><span class="rating">★ ${x.rating} (${x.reviews})</span></div>
      <h3>${x.n}</h3>
      <p>${x.d}</p>
      <strong>${money(x.p)}</strong> <del>${money(x.old)}</del>
      <div class="product-actions"><button class="add" onclick="add(${x.id})">Add to bag</button><button class="quick-btn" onclick="openProduct(${x.id})">View</button></div>
    </article>`).join('')||'<p>No products found.</p>';
}

function filterCat(c){active=c;activeBrand='All Brands';location.hash='shop';renderProducts();document.getElementById('shop').scrollIntoView({behavior:'smooth'})}
function add(id){let x=cart.find(i=>i.id===id);x?x.q++:cart.push({id,q:1});save();openCart()}
function toggleWish(id){wish.has(id)?wish.delete(id):wish.add(id);localStorage.setItem('bqwish',JSON.stringify([...wish]));document.getElementById('wishCount').textContent=wish.size;renderProducts()}
function save(){localStorage.setItem('bqcart',JSON.stringify(cart));document.getElementById('cartCount').textContent=cart.reduce((a,x)=>a+x.q,0);renderCart()}
function renderCart(){let el=document.getElementById('cartItems');if(!cart.length){el.innerHTML='<div class="empty">Your bag is empty ✨</div>';document.getElementById('total').textContent='KES 0';return}let total=0;el.innerHTML=cart.map(i=>{let x=products.find(p=>p.id===i.id);total+=x.p*i.q;return `<div class="cart-row"><span>${x.e}</span><div><b>${x.n}</b><small>${money(x.p)}</small><div><button onclick="qty(${x.id},-1)">−</button> ${i.q} <button onclick="qty(${x.id},1)">+</button></div></div></div>`}).join('');document.getElementById('total').textContent=money(total)}
function qty(id,n){let x=cart.find(i=>i.id===id);x.q+=n;if(x.q<1)cart=cart.filter(i=>i.id!==id);save()}
function toggleCart(){document.getElementById('cart').classList.toggle('open');document.getElementById('overlay').classList.toggle('show');renderCart()}
function openCart(){document.getElementById('cart').classList.add('open');document.getElementById('overlay').classList.add('show');renderCart()}
function checkout(){if(!cart.length)return alert('Your bag is empty.');alert('Checkout is ready for integration with M-Pesa, Visa/Mastercard and other payment providers.')}
function focusSearch(){document.getElementById('search').focus();document.getElementById('search').scrollIntoView({behavior:'smooth'})}
function toggleWishlist(){alert(wish.size?`You have ${wish.size} item(s) in your wishlist.`:'Your wishlist is empty.')}
function openAssistant(){alert('Beauty AI assistant: tell me your skincare, makeup, perfume, hair or gifting goal.')}
function filterBrand(b){activeBrand=b;active='All';renderProducts();document.getElementById('shop').scrollIntoView({behavior:'smooth'});}
function routine(name){const map={'Morning Glow':'Skincare','Night Repair':'Skincare','Glass Skin':'Skincare','Acne Care':'Skincare','Fragrance Layering':'Perfume','Hair Repair':'Hair','Body Glow':'Body','Bridal Beauty':'Gifts'};active=map[name]||'All';activeBrand='All Brands';renderProducts();document.getElementById('shop').scrollIntoView({behavior:'smooth'});}
function trackOrder(){const n=document.getElementById('orderNo').value.trim();document.getElementById('trackResult').textContent=n?`Order ${n}: demo tracking UI ready — connect to your live order database/API.`:'Please enter an order number.';}

renderProducts();save();document.getElementById('wishCount').textContent=wish.size;

function sendContact(e){e.preventDefault();alert('Thank you! Your message has been received. Connect this form to your production email/CRM backend for live support.');e.target.reset()}

function showToast(msg){
  const t=document.getElementById('toast');
  if(!t)return;
  t.textContent=msg;t.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer=setTimeout(()=>t.classList.remove('show'),2600);
}
function openProduct(id){
  const x=products.find(p=>p.id===id); if(!x)return;
  document.getElementById('productDetail').innerHTML=`
    <div class="detail-grid">
      <div class="detail-image"><img src="${x.img}" alt="${x.n}"></div>
      <div class="detail-copy">
        <small>${x.c} • ${x.brand}</small>
        <h2>${x.n}</h2>
        <div class="detail-rating">★ ${x.rating} · ${x.reviews} reviews</div>
        <p>${x.d}. A curated Beauty Queen essential selected for an elevated daily routine.</p>
        <div class="detail-price">${money(x.p)} <del>${money(x.old)}</del></div>
        <ul><li>Authenticity-focused beauty selection</li><li>Kenya-wide delivery options</li><li>Secure checkout ready for payment integration</li></ul>
        <button class="btn full" onclick="add(${x.id});closeProduct()">Add to bag</button>
      </div>
    </div>`;
  const m=document.getElementById('productModal');
  m.classList.add('show');m.setAttribute('aria-hidden','false');
}
function closeProduct(){
  const m=document.getElementById('productModal');
  m.classList.remove('show');m.setAttribute('aria-hidden','true');
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProduct()});


let selectedPayment = 'mpesa';

function selectPayment(method){
  selectedPayment = method;
  document.querySelectorAll('.payment-option').forEach(b=>b.classList.toggle('active', b.dataset.pay===method));
  const form = document.getElementById('paymentForm');
  if(!form) return;
  const forms = {
    mpesa: `<label>M-PESA phone number</label><input id="payPhone" placeholder="07XX XXX XXX" inputmode="tel"><p>After checkout, your M-PESA prompt will be sent to this number when a live M-PESA provider is connected.</p>`,
    bank: `<label>Bank payment</label><div class="bank-box"><b>Beauty Queen Cosmetics</b><span>Bank transfer details can be configured in Admin.</span><span>Use your order number as the payment reference.</span></div>`,
    paypal: `<label>PayPal</label><div class="provider-box"><span class="provider-logo paypal-logo">P</span><span>You'll continue to PayPal securely after placing the order.</span></div>`,
    card: `<label>Card payment</label><div class="card-fields"><input placeholder="Card number" inputmode="numeric"><div><input placeholder="MM/YY"><input placeholder="CVV"></div></div><p>Demo fields only. Connect a PCI-compliant payment provider before accepting live card payments.</p>`,
    mobile: `<label>Mobile Money</label><select id="wallet"><option>Mobile Money Wallet</option><option>Airtel Money</option><option>Other supported wallet</option></select><input placeholder="Phone number" inputmode="tel">`,
    cash: `<label>Cash on Delivery</label><div class="bank-box"><b>Pay when your order arrives</b><span>Availability can be limited by delivery area.</span></div>`
  };
  form.innerHTML = forms[method] || forms.mpesa;
}

function beginCheckout(){
  const labels={mpesa:'M-PESA',bank:'Bank Transfer',paypal:'PayPal',card:'Card',mobile:'Mobile Money',cash:'Cash on Delivery'};
  const msg = `${labels[selectedPayment]} selected. Connect your payment provider credentials/API to activate live transactions.`;
  showToast(msg);
}


let quickFilter='all';

function applyAdvancedFilters(){
  const price = document.getElementById('priceFilter')?.value || 'all';
  const rating = parseFloat(document.getElementById('ratingFilter')?.value || '0');
  let q=(document.getElementById('search')?.value||'').toLowerCase();
  let a=products.filter(x=>
    (active==='All'||x.c===active) &&
    (activeBrand==='All Brands'||x.brand===activeBrand) &&
    (x.n+' '+x.c+' '+x.d+' '+(x.brand||'')).toLowerCase().includes(q)
  );
  if(price!=='all') a=a.filter(x=>{
    if(price==='0-1000') return x.p<1000;
    if(price==='1000-2500') return x.p>=1000&&x.p<=2500;
    if(price==='2500-5000') return x.p>2500&&x.p<=5000;
    return x.p>5000;
  });
  if(rating) a=a.filter(x=>parseFloat(x.rating)>=rating);
  if(quickFilter==='sale') a=a.filter(x=>x.old>x.p);
  if(quickFilter==='new') a=a.filter((x,i)=>i%3===0);
  if(quickFilter==='best') a.sort((x,y)=>y.reviews-x.reviews);
  renderProductList(a);
}

function setQuickFilter(type, el){
  quickFilter=type;
  document.querySelectorAll('.filter-chip').forEach(b=>b.classList.remove('active'));
  if(el)el.classList.add('active');
  applyAdvancedFilters();
}

function renderProductList(a){
  const count=document.getElementById('resultCount');
  if(count) count.textContent=`${a.length} products`;
  const target=document.getElementById('products');
  if(!target)return;
  target.innerHTML=a.map(x=>`
    <article class="product product-rich">
      <button class="heart ${wish.has(x.id)?'on':''}" onclick="toggleWish(${x.id})" aria-label="Wishlist">♡</button>
      <div class="pic photo-pic" onclick="openProduct(${x.id})"><img src="${x.img}" alt="${x.n}" loading="lazy"><span class="quick-view">Quick view</span></div>
      <div class="product-meta"><small>${x.c} • ${x.brand}</small><span class="rating">★ ${x.rating} (${x.reviews})</span></div>
      <h3>${x.n}</h3><p>${x.d}</p><strong>${money(x.p)}</strong> <del>${money(x.old)}</del>
      <div class="product-actions"><button class="add" onclick="add(${x.id})">Add to bag</button><button class="quick-btn" onclick="openProduct(${x.id})">View</button></div>
    </article>`).join('')||'<div class="empty-state"><h3>No beauty products match those filters.</h3><p>Try another category or clear the filters.</p></div>';
}

function subscribeBeauty(e){
  e.preventDefault();
  const email=document.getElementById('newsletterEmail')?.value;
  if(email) showToast('Welcome to the Beauty Queen Club ✨');
}

document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>{
    if(typeof applyAdvancedFilters==='function') applyAdvancedFilters();
    if(typeof selectPayment==='function') selectPayment('mpesa');
  },0);
});


/* ================= BEAUTY QUEEN V7 LIVE CHECKOUT ================= */
(function(){
  function getCartItems(){
    try {
      const raw = localStorage.getItem("bq_cart");
      if(raw) return JSON.parse(raw);
    } catch(e){}
    if(Array.isArray(window.cart)) return window.cart;
    return [];
  }
  function cartTotal(items){
    return items.reduce((sum,i)=>sum + Number(i.price||0)*Number(i.qty||1),0);
  }
  window.BQ_openCheckout = function(){
    const el = document.getElementById("realCheckout");
    if(!el) return;
    const items = getCartItems();
    const box = document.getElementById("bqSummaryItems");
    if(box) box.innerHTML = items.length
      ? items.map(i=>`<div class="real-line"><span>${i.name||"Product"} × ${i.qty||1}</span><b>KES ${(Number(i.price||0)*Number(i.qty||1)).toLocaleString()}</b></div>`).join("")
      : "<p>Your cart is empty.</p>";
    const total = cartTotal(items);
    const totalEl = document.getElementById("bqTotal");
    if(totalEl) totalEl.textContent = "KES " + total.toLocaleString();
    el.classList.add("open");
    el.setAttribute("aria-hidden","false");
  };
  window.BQ_closeCheckout = function(){
    const el = document.getElementById("realCheckout");
    if(el){ el.classList.remove("open"); el.setAttribute("aria-hidden","true"); }
  };
  window.BQ_paymentFields = function(){
    const method = document.getElementById("bqPayment")?.value;
    const hint = document.getElementById("bqPaymentHint");
    if(!hint) return;
    const text = {
      mpesa:"You will receive an M-PESA STK prompt after placing the order.",
      paypal:"A PayPal approval step will be created by the secure server.",
      card:"Connect a PCI-compliant card gateway before taking live card details.",
      bank:"Order is created as pending; show your bank details and verify the transfer.",
      mobile_money:"Order is created as pending for mobile-money verification.",
      cod:"Order is created as pending and paid on delivery."
    };
    hint.textContent = text[method] || "";
  };
  window.BQ_submitCheckout = async function(ev){
    ev.preventDefault();
    const items = getCartItems();
    if(!items.length){ alert("Your cart is empty."); return false; }
    const status = document.getElementById("bqCheckoutStatus");
    const method = document.getElementById("bqPayment").value;
    const payload = {
      customer:{
        name:document.getElementById("bqName").value.trim(),
        email:document.getElementById("bqEmail").value.trim(),
        phone:document.getElementById("bqPhone").value.trim(),
        address:document.getElementById("bqAddress").value.trim()
      },
      items,
      payment_method:method,
      currency:"KES",
      total:cartTotal(items)
    };
    try{
      status.textContent = "Creating your order…";
      const order = await window.BQ_API.createOrder(payload);
      const orderNumber = order.order_number || order.orderNumber;
      if(method === "mpesa"){
        status.textContent = "Sending M-PESA STK prompt…";
        await window.BQ_API.mpesa(payload.customer.phone, payload.total, orderNumber);
        status.textContent = `STK prompt sent. Order ${orderNumber} is pending payment.`;
      } else if(method === "paypal"){
        // The secure server creates the PayPal order. The returned approval URL can be opened.
        const amountUSD = Math.max(0.01, payload.total / Number(window.BQ_USD_RATE || 130));
        const pp = await window.BQ_API.paypalCreate(amountUSD, "USD", orderNumber);
        const approve = (pp.links||[]).find(x=>x.rel==="approve");
        status.innerHTML = approve ? `Order ${orderNumber} created. <a href="${approve.href}" target="_blank" rel="noopener">Open PayPal</a>.` : `PayPal order ${pp.id} created.`;
      } else {
        status.textContent = `Order ${orderNumber} created successfully. Payment status is pending.`;
      }
      localStorage.removeItem("bq_cart");
    }catch(err){
      status.textContent = "Checkout error: " + err.message;
    }
    return false;
  };
  // If the old checkout button exists, route it into the real checkout first.
  const oldCheckout = window.checkout;
  window.checkout = function(){
    if(window.BQ_openCheckout) return window.BQ_openCheckout();
    if(typeof oldCheckout==="function") return oldCheckout();
  };
})();

/* ================= BQ V8 CHECKOUT OVERRIDE ================= */
(function(){
  function items(){
    try{const x=JSON.parse(localStorage.getItem("bq_cart")||"[]");if(Array.isArray(x))return x}catch(e){}
    return Array.isArray(window.cart)?window.cart:[];
  }
  function total(xs){return xs.reduce((s,x)=>s+Number(x.price||0)*Number(x.qty||1),0)}
  window.BQ_openCheckout=function(){
    const el=document.getElementById("realCheckout"); if(!el)return;
    const xs=items(); const box=document.getElementById("bqSummaryItems");
    if(box)box.innerHTML=xs.length?xs.map(x=>`<div class="real-line"><span>${x.name||"Product"} × ${x.qty||1}</span><b>KES ${(Number(x.price||0)*Number(x.qty||1)).toLocaleString()}</b></div>`).join(""):"<p>Your cart is empty.</p>";
    const t=document.getElementById("bqTotal");if(t)t.textContent="KES "+total(xs).toLocaleString();
    el.classList.add("open");el.setAttribute("aria-hidden","false");
  };
  window.BQ_closeCheckout=function(){const el=document.getElementById("realCheckout");if(el){el.classList.remove("open");el.setAttribute("aria-hidden","true")}};
  window.BQ_paymentFields=function(){
    const m=document.getElementById("bqPayment")?.value,h=document.getElementById("bqPaymentHint");if(!h)return;
    h.textContent={mpesa:"M-PESA STK Push will be sent to your phone.",paypal:"PayPal approval opens securely after the order is created.",card:"Use a hosted/tokenized card gateway. Never type raw card data into this static page.",bank:"Your order will be pending until the bank transfer is verified.",mobile_money:"Your order will be pending until mobile-money payment is verified.",cod:"Pay when your order is delivered."}[m]||"";
  };
  window.BQ_submitCheckout=async function(ev){
    ev.preventDefault(); const xs=items(); if(!xs.length){alert("Your cart is empty.");return false}
    const status=document.getElementById("bqCheckoutStatus"),method=document.getElementById("bqPayment").value;
    const payload={customer:{name:document.getElementById("bqName").value.trim(),email:document.getElementById("bqEmail").value.trim(),phone:document.getElementById("bqPhone").value.trim(),address:document.getElementById("bqAddress").value.trim()},items:xs,payment_method:method,currency:"KES",total:total(xs),coupon_code:document.getElementById("bqCoupon")?.value.trim()||null};
    try{
      status.textContent="Securely creating your order…";
      const order=await BQ_API.createOrder(payload),num=order.order_number;
      if(method==="mpesa"){status.textContent="Sending M-PESA STK prompt…";await BQ_API.mpesa(payload.customer.phone,order.total,num);status.textContent=`STK sent. Order ${num} is waiting for payment.`}
      else if(method==="paypal"){
        const rate=Number(window.BQ_USD_RATE||130),pp=await BQ_API.paypalCreate(Math.max(.01,Number(order.total)/rate),"USD",num);
        const link=(pp.links||[]).find(x=>x.rel==="approve");status.innerHTML=link?`Order ${num} created. <a href="${link.href}" target="_blank" rel="noopener">Open PayPal securely</a>.`:`PayPal order ${pp.id} created.`;
      } else status.textContent=`Order ${num} created. Payment status: ${order.payment_status||"pending"}.`;
      localStorage.removeItem("bq_cart");
    }catch(e){status.textContent="Checkout error: "+e.message}
    return false;
  };
  const old=window.checkout;window.checkout=function(){return window.BQ_openCheckout?window.BQ_openCheckout():(old?old():null)};
})();
