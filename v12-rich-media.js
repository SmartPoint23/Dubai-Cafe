/* V12 Rich Product Media Layer — additive, V11 preserved */
(function(){
  const V12_MEDIA = {};
  const sets = {
    Skincare: "luxury skincare serum moisturizer cleanser face cream",
    Makeup: "luxury makeup lipstick foundation blush mascara",
    Perfume: "luxury perfume fragrance bottle",
    Hair: "luxury haircare shampoo conditioner hair oil",
    Body: "luxury body lotion body butter shower gel",
    Nails: "luxury nail polish manicure",
    Tools: "professional beauty tools makeup brush",
    Gifts: "luxury beauty gift set cosmetics"
  };
  const esc = s => encodeURIComponent(s);
  window.BQ_V12_PRODUCT_MEDIA = function(product){
    const id = Number(product.id||0);
    const cat = product.category || product.cat || "Makeup";
    const q = sets[cat] || sets.Makeup;
    const name = product.name || "beauty product";
    const variants = ["product hero studio","product packaging closeup","product texture beauty","product lifestyle vanity","product detail premium"];
    return variants.map((v,i) => "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=900&q=88&ixlib=rb-4.1.0&sig="+id+"-"+i+"&query="+esc(q+" "+name+" "+v));
  };
})();
