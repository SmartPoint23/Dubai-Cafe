const products=[{id:1,n:'Radiance Vitamin C Serum',c:'Skincare',p:3500,old:4200,e:'🍊',d:'Brightening daily serum'},{id:2,n:'Hyaluronic Hydra Serum',c:'Skincare',p:3100,old:3800,e:'💧',d:'Multi-level hydration'},{id:3,n:'Gentle Foaming Cleanser',c:'Skincare',p:2200,old:2700,e:'🫧',d:'Daily face cleanser'},{id:4,n:'SPF 50 Daily Shield',c:'Skincare',p:2800,old:3300,e:'☀️',d:'Lightweight daily sunscreen'},{id:5,n:'Retinol Night Serum',c:'Skincare',p:3900,old:4600,e:'🌙',d:'Night-time renewal care'},{id:6,n:'Niacinamide Balance Serum',c:'Skincare',p:3000,old:3500,e:'🌿',d:'Balanced-looking skin'},{id:7,n:'Barrier Repair Cream',c:'Skincare',p:3600,old:4200,e:'🧴',d:'Comforting moisture barrier care'},{id:8,n:'Clay Detox Mask',c:'Skincare',p:2400,old:2900,e:'🪨',d:'Weekly deep-clean mask'},{id:9,n:'Peptide Eye Cream',c:'Skincare',p:4200,old:4900,e:'👁️',d:'Targeted eye-area care'},{id:10,n:'Rose Water Mist',c:'Skincare',p:1800,old:2200,e:'🌹',d:'Refreshing facial mist'},{id:11,n:'Soft Matte Foundation',c:'Makeup',p:3200,old:3800,e:'💄',d:'Long-wear complexion'},{id:12,n:'Radiant Concealer',c:'Makeup',p:2300,old:2800,e:'✨',d:'Buildable under-eye coverage'},{id:13,n:'Velvet Blush Duo',c:'Makeup',p:2600,old:3200,e:'🌸',d:'Two-tone cheek color'},{id:14,n:'Sculpt & Glow Palette',c:'Makeup',p:3900,old:4500,e:'🎨',d:'Contour, blush and highlight'},{id:15,n:'Waterproof Mascara',c:'Makeup',p:1900,old:2400,e:'👁️',d:'Defined lashes'},{id:16,n:'Precision Brow Kit',c:'Makeup',p:2100,old:2600,e:'🖌️',d:'Brows made simple'},{id:17,n:'Liquid Liner Pro',c:'Makeup',p:1600,old:2000,e:'🖤',d:'Crisp eyeliner'},{id:18,n:'Glossy Lip Oil',c:'Makeup',p:1700,old:2100,e:'💋',d:'Hydrating shine'},{id:19,n:'Nude Lipstick Collection',c:'Makeup',p:2500,old:3100,e:'💄',d:'Everyday nude shades'},{id:20,n:'Makeup Fixing Spray',c:'Makeup',p:2300,old:2800,e:'💦',d:'Longer-lasting finish'},{id:21,n:'Velvet Rose Eau de Parfum',c:'Perfume',p:6800,old:8000,e:'🌹',d:'Elegant floral signature scent'},{id:22,n:'Midnight Oud Perfume',c:'Perfume',p:7200,old:8500,e:'🌙',d:'Warm sophisticated fragrance'},{id:23,n:'Fresh Bloom Eau de Parfum',c:'Perfume',p:5900,old:7000,e:'🌷',d:'Fresh floral scent'},{id:24,n:'Vanilla Cloud Mist',c:'Perfume',p:3200,old:3800,e:'☁️',d:'Sweet soft fragrance mist'},{id:25,n:'Amber Nights EDP',c:'Perfume',p:6500,old:7600,e:'🧡',d:'Warm amber fragrance'},{id:26,n:'Citrus Muse EDP',c:'Perfume',p:5600,old:6500,e:'🍋',d:'Bright citrus signature'},{id:27,n:'Rose Musk Perfume Oil',c:'Perfume',p:3600,old:4200,e:'🌹',d:'Layering-friendly perfume oil'},{id:28,n:'Signature Scent Gift Set',c:'Perfume',p:8900,old:10500,e:'🎁',d:'Fragrance discovery set'},{id:29,n:'Crown Repair Hair Mask',c:'Hair',p:2800,old:3300,e:'👑',d:'Intensive dry-hair care'},{id:30,n:'Argan Shine Hair Oil',c:'Hair',p:2600,old:3100,e:'✨',d:'Smooth shine and softness'},{id:31,n:'Curl Define Cream',c:'Hair',p:2900,old:3400,e:'🌀',d:'Defined curls and coils'},{id:32,n:'Scalp Care Shampoo',c:'Hair',p:2500,old:3000,e:'🫧',d:'Fresh scalp cleansing'},{id:33,n:'Repair Conditioner',c:'Hair',p:2400,old:2900,e:'🌿',d:'Softening daily conditioner'},{id:34,n:'Leave-In Detangler',c:'Hair',p:2100,old:2600,e:'💧',d:'Easy detangling'},{id:35,n:'Edge Styling Gel',c:'Hair',p:1500,old:1900,e:'👑',d:'Smooth hold'},{id:36,n:'Silk Sleep Bonnet',c:'Hair',p:1800,old:2300,e:'🧢',d:'Night hair protection'},{id:37,n:'Golden Hour Body Oil',c:'Body',p:2600,old:3200,e:'✨',d:'Nourishing body oil'},{id:38,n:'Cloud Soft Body Butter',c:'Body',p:2200,old:2700,e:'☁️',d:'Rich body moisture'},{id:39,n:'Vanilla Sugar Scrub',c:'Body',p:2300,old:2800,e:'🍦',d:'Smoothing body scrub'},{id:40,n:'Shea Body Lotion',c:'Body',p:1900,old:2300,e:'🥥',d:'Everyday body hydration'},{id:41,n:'Brightening Body Wash',c:'Body',p:1800,old:2200,e:'🫧',d:'Fresh cleansing wash'},{id:42,n:'Silky Hand Cream',c:'Body',p:1200,old:1500,e:'🤍',d:'Soft hand care'},{id:43,n:'Diamond Nail Studio Kit',c:'Nails',p:2400,old:2900,e:'💅',d:'At-home manicure essentials'},{id:44,n:'Gel Polish Starter Set',c:'Nails',p:3200,old:3900,e:'💅',d:'Multi-color gel set'},{id:45,n:'Nail Care Oil',c:'Nails',p:1100,old:1400,e:'✨',d:'Cuticle care'},{id:46,n:'Pro Beauty Brush Set',c:'Tools',p:3900,old:4500,e:'🪞',d:'Complete face and eye brushes'},{id:47,n:'LED Makeup Mirror',c:'Tools',p:6500,old:7500,e:'💡',d:'Lighted beauty mirror'},{id:48,n:'Facial Ice Roller',c:'Tools',p:1800,old:2200,e:'🧊',d:'Cooling facial tool'},{id:49,n:'Makeup Sponge Trio',c:'Tools',p:1400,old:1800,e:'💗',d:'Blending sponge set'},{id:50,n:'Queen Gift Box',c:'Gifts',p:7500,old:9000,e:'🎁',d:'Curated luxury beauty gift set'},{id:51,n:'Bridal Beauty Box',c:'Gifts',p:12500,old:14500,e:'👰',d:'Wedding-ready beauty collection'},{id:52,n:'Self-Care Weekend Box',c:'Gifts',p:6800,old:8000,e:'🛁',d:'Relaxing body and skincare set'},{id:53,n:'Pink Luxury Mini Set',c:'Gifts',p:4500,old:5400,e:'🎀',d:'Travel-size beauty favorites'},
{id:54,n:"Glow Vitamin C Serum",c:"Skincare",p:6400,old:7400,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:55,n:"Glow Vitamin C Face Cream",c:"Skincare",p:2600,old:3100,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:56,n:"Glow Vitamin C Gel Cream",c:"Skincare",p:4100,old:4900,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:57,n:"Glow Vitamin C Cleanser",c:"Skincare",p:5600,old:6700,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:58,n:"Glow Vitamin C Toner",c:"Skincare",p:1700,old:2300,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:59,n:"Glow Vitamin C Essence",c:"Skincare",p:3200,old:4100,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:60,n:"Glow Vitamin C Face Oil",c:"Skincare",p:4700,old:5900,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:61,n:"Glow Vitamin C Mask",c:"Skincare",p:6200,old:7200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:62,n:"Glow Vitamin C Eye Cream",c:"Skincare",p:2300,old:2700,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:63,n:"Glow Vitamin C Mist",c:"Skincare",p:3800,old:4500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:64,n:"Glow Vitamin C Exfoliant",c:"Skincare",p:5300,old:6400,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:65,n:"Glow Vitamin C Sleeping Mask",c:"Skincare",p:1500,old:2000,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:66,n:"Glow Hyaluronic Serum",c:"Skincare",p:2900,old:3700,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:67,n:"Glow Hyaluronic Face Cream",c:"Skincare",p:4400,old:5500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:68,n:"Glow Hyaluronic Gel Cream",c:"Skincare",p:5900,old:6800,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:69,n:"Glow Hyaluronic Cleanser",c:"Skincare",p:2100,old:2500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:70,n:"Glow Hyaluronic Toner",c:"Skincare",p:3500,old:4200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:71,n:"Glow Hyaluronic Essence",c:"Skincare",p:5000,old:6000,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:72,n:"Glow Hyaluronic Face Oil",c:"Skincare",p:1200,old:1700,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:73,n:"Glow Hyaluronic Mask",c:"Skincare",p:2700,old:3500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:74,n:"Glow Hyaluronic Eye Cream",c:"Skincare",p:4200,old:5300,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:75,n:"Glow Hyaluronic Mist",c:"Skincare",p:5600,old:6500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:76,n:"Glow Hyaluronic Exfoliant",c:"Skincare",p:1800,old:2200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:77,n:"Glow Hyaluronic Sleeping Mask",c:"Skincare",p:3300,old:4000,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:78,n:"Glow Niacinamide Serum",c:"Skincare",p:4800,old:5800,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:79,n:"Glow Niacinamide Face Cream",c:"Skincare",p:6200,old:7500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:80,n:"Glow Niacinamide Gel Cream",c:"Skincare",p:2400,old:3100,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:81,n:"Glow Niacinamide Cleanser",c:"Skincare",p:3900,old:4900,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:82,n:"Glow Niacinamide Toner",c:"Skincare",p:5400,old:6300,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:83,n:"Glow Niacinamide Essence",c:"Skincare",p:1500,old:1800,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:84,n:"Glow Niacinamide Face Oil",c:"Skincare",p:3000,old:3600,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:85,n:"Glow Niacinamide Mask",c:"Skincare",p:4500,old:5400,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:86,n:"Glow Niacinamide Eye Cream",c:"Skincare",p:6000,old:7200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:87,n:"Glow Niacinamide Mist",c:"Skincare",p:2100,old:2800,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:88,n:"Glow Niacinamide Exfoliant",c:"Skincare",p:3600,old:4600,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:89,n:"Glow Niacinamide Sleeping Mask",c:"Skincare",p:5100,old:5900,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:90,n:"Glow Peptide Serum",c:"Skincare",p:1300,old:1600,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:91,n:"Glow Peptide Face Cream",c:"Skincare",p:2700,old:3300,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:92,n:"Glow Peptide Gel Cream",c:"Skincare",p:4200,old:5100,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:93,n:"Glow Peptide Cleanser",c:"Skincare",p:5700,old:6900,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:94,n:"Glow Peptide Toner",c:"Skincare",p:1900,old:2600,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:95,n:"Glow Peptide Essence",c:"Skincare",p:3300,old:4200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:96,n:"Glow Peptide Face Oil",c:"Skincare",p:4800,old:5600,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:97,n:"Glow Peptide Mask",c:"Skincare",p:6300,old:7400,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:98,n:"Glow Peptide Eye Cream",c:"Skincare",p:2500,old:3000,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:99,n:"Glow Peptide Mist",c:"Skincare",p:3900,old:4700,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:100,n:"Glow Peptide Exfoliant",c:"Skincare",p:5400,old:6500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:101,n:"Glow Peptide Sleeping Mask",c:"Skincare",p:1600,old:2200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:102,n:"Glow Ceramide Serum",c:"Skincare",p:3100,old:4000,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:103,n:"Glow Ceramide Face Cream",c:"Skincare",p:4500,old:5200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:104,n:"Glow Ceramide Gel Cream",c:"Skincare",p:6000,old:7000,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:105,n:"Glow Ceramide Cleanser",c:"Skincare",p:2200,old:2700,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:106,n:"Glow Ceramide Toner",c:"Skincare",p:3700,old:4500,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:107,n:"Glow Ceramide Essence",c:"Skincare",p:5200,old:6300,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:108,n:"Glow Ceramide Face Oil",c:"Skincare",p:1300,old:1900,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:109,n:"Glow Ceramide Mask",c:"Skincare",p:2800,old:3700,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:110,n:"Glow Ceramide Eye Cream",c:"Skincare",p:4300,old:5000,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:111,n:"Glow Ceramide Mist",c:"Skincare",p:5800,old:6800,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:112,n:"Glow Ceramide Exfoliant",c:"Skincare",p:1900,old:2300,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:113,n:"Glow Ceramide Sleeping Mask",c:"Skincare",p:3400,old:4200,e:"✨",d:"Everyday beauty care for a fresh, comfortable glow"},
{id:114,n:"Velvet Matte Foundation",c:"Makeup",p:6400,old:7400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:115,n:"Velvet Matte Concealer",c:"Makeup",p:2200,old:2600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:116,n:"Velvet Matte Blush",c:"Makeup",p:3700,old:4400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:117,n:"Velvet Matte Bronzer",c:"Makeup",p:5200,old:6200,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:118,n:"Velvet Matte Highlighter",c:"Makeup",p:1100,old:1600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:119,n:"Velvet Matte Eyeshadow Palette",c:"Makeup",p:2500,old:3300,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:120,n:"Velvet Matte Mascara",c:"Makeup",p:4000,old:5100,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:121,n:"Velvet Matte Brow Pencil",c:"Makeup",p:5500,old:6400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:122,n:"Velvet Matte Brow Gel",c:"Makeup",p:1400,old:1700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:123,n:"Velvet Matte Liquid Liner",c:"Makeup",p:2800,old:3400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:124,n:"Velvet Matte Lipstick",c:"Makeup",p:4300,old:5200,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:125,n:"Velvet Matte Lip Gloss",c:"Makeup",p:5800,old:7000,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:126,n:"Velvet Matte Lip Oil",c:"Makeup",p:1700,old:2300,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:127,n:"Velvet Matte Setting Spray",c:"Makeup",p:3100,old:4000,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:128,n:"Velvet Matte Primer",c:"Makeup",p:4600,old:5300,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:129,n:"Velvet Matte Contour Stick",c:"Makeup",p:6100,old:7100,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:130,n:"Velvet Satin Foundation",c:"Makeup",p:2000,old:2500,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:131,n:"Velvet Satin Concealer",c:"Makeup",p:3400,old:4200,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:132,n:"Velvet Satin Blush",c:"Makeup",p:4900,old:6000,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:133,n:"Velvet Satin Bronzer",c:"Makeup",p:6400,old:7800,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:134,n:"Velvet Satin Highlighter",c:"Makeup",p:2300,old:3100,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:135,n:"Velvet Satin Eyeshadow Palette",c:"Makeup",p:3700,old:4300,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:136,n:"Velvet Satin Mascara",c:"Makeup",p:5200,old:6100,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:137,n:"Velvet Satin Brow Pencil",c:"Makeup",p:1100,old:1400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:138,n:"Velvet Satin Brow Gel",c:"Makeup",p:2600,old:3200,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:139,n:"Velvet Satin Liquid Liner",c:"Makeup",p:4000,old:4900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:140,n:"Velvet Satin Lipstick",c:"Makeup",p:5500,old:6700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:141,n:"Velvet Satin Lip Gloss",c:"Makeup",p:1400,old:2000,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:142,n:"Velvet Satin Lip Oil",c:"Makeup",p:2900,old:3400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:143,n:"Velvet Satin Setting Spray",c:"Makeup",p:4400,old:5200,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:144,n:"Velvet Satin Primer",c:"Makeup",p:5800,old:6900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:145,n:"Velvet Satin Contour Stick",c:"Makeup",p:1700,old:2200,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:146,n:"Velvet Hydra Foundation",c:"Makeup",p:3200,old:4000,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:147,n:"Velvet Hydra Concealer",c:"Makeup",p:4700,old:5800,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:148,n:"Velvet Hydra Blush",c:"Makeup",p:6100,old:7500,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:149,n:"Velvet Hydra Bronzer",c:"Makeup",p:2000,old:2300,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:150,n:"Velvet Hydra Highlighter",c:"Makeup",p:3500,old:4100,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:151,n:"Velvet Hydra Eyeshadow Palette",c:"Makeup",p:5000,old:5900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:152,n:"Velvet Hydra Mascara",c:"Makeup",p:6400,old:7600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:153,n:"Velvet Hydra Brow Pencil",c:"Makeup",p:2300,old:2900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:154,n:"Velvet Hydra Brow Gel",c:"Makeup",p:3800,old:4800,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:155,n:"Velvet Hydra Liquid Liner",c:"Makeup",p:5300,old:6600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:156,n:"Velvet Hydra Lipstick",c:"Makeup",p:1100,old:1300,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:157,n:"Velvet Hydra Lip Gloss",c:"Makeup",p:2600,old:3100,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:158,n:"Velvet Hydra Lip Oil",c:"Makeup",p:4100,old:4900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:159,n:"Velvet Hydra Setting Spray",c:"Makeup",p:5600,old:6700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:160,n:"Velvet Hydra Primer",c:"Makeup",p:1400,old:1900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:161,n:"Velvet Hydra Contour Stick",c:"Makeup",p:2900,old:3700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:162,n:"Velvet Longwear Foundation",c:"Makeup",p:4400,old:5500,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:163,n:"Velvet Longwear Concealer",c:"Makeup",p:5900,old:6800,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:164,n:"Velvet Longwear Blush",c:"Makeup",p:1700,old:2000,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:165,n:"Velvet Longwear Bronzer",c:"Makeup",p:3200,old:3900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:166,n:"Velvet Longwear Highlighter",c:"Makeup",p:4700,old:5700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:167,n:"Velvet Longwear Eyeshadow Palette",c:"Makeup",p:6200,old:7500,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:168,n:"Velvet Longwear Mascara",c:"Makeup",p:2000,old:2700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:169,n:"Velvet Longwear Brow Pencil",c:"Makeup",p:3500,old:4500,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:170,n:"Velvet Longwear Brow Gel",c:"Makeup",p:5000,old:5800,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:171,n:"Velvet Longwear Liquid Liner",c:"Makeup",p:6500,old:7600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:172,n:"Velvet Longwear Lipstick",c:"Makeup",p:2300,old:2800,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:173,n:"Velvet Longwear Lip Gloss",c:"Makeup",p:3800,old:4600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:174,n:"Velvet Longwear Lip Oil",c:"Makeup",p:5300,old:6400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:175,n:"Velvet Longwear Setting Spray",c:"Makeup",p:1200,old:1700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:176,n:"Velvet Longwear Primer",c:"Makeup",p:2700,old:3600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:177,n:"Velvet Longwear Contour Stick",c:"Makeup",p:4100,old:4800,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:178,n:"Velvet Cream Foundation",c:"Makeup",p:5600,old:6600,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:179,n:"Velvet Cream Concealer",c:"Makeup",p:1500,old:1900,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:180,n:"Velvet Cream Blush",c:"Makeup",p:3000,old:3700,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:181,n:"Velvet Cream Bronzer",c:"Makeup",p:4400,old:5400,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:182,n:"Velvet Cream Highlighter",c:"Makeup",p:5900,old:7200,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:183,n:"Velvet Cream Eyeshadow Palette",c:"Makeup",p:1800,old:2500,e:"💄",d:"Easy-to-wear beauty essential with a polished finish"},
{id:184,n:"Velvet Rose Eau de Parfum",c:"Perfume",p:8800,old:10200,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:185,n:"Velvet Rose Eau de Toilette",c:"Perfume",p:10300,old:12000,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:186,n:"Velvet Rose Perfume Mist",c:"Perfume",p:11800,old:13800,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:187,n:"Velvet Rose Perfume Oil",c:"Perfume",p:13300,old:15600,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:188,n:"Velvet Rose Discovery Set",c:"Perfume",p:3200,old:4000,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:189,n:"Velvet Oud Eau de Parfum",c:"Perfume",p:4700,old:5800,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:190,n:"Velvet Oud Eau de Toilette",c:"Perfume",p:6200,old:7600,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:191,n:"Velvet Oud Perfume Mist",c:"Perfume",p:7700,old:8900,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:192,n:"Velvet Oud Perfume Oil",c:"Perfume",p:9200,old:10700,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:193,n:"Velvet Oud Discovery Set",c:"Perfume",p:10600,old:12400,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:194,n:"Velvet Vanilla Eau de Parfum",c:"Perfume",p:12100,old:14200,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:195,n:"Velvet Vanilla Eau de Toilette",c:"Perfume",p:13600,old:16100,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:196,n:"Velvet Vanilla Perfume Mist",c:"Perfume",p:3600,old:4500,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:197,n:"Velvet Vanilla Perfume Oil",c:"Perfume",p:5000,old:6200,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:198,n:"Velvet Vanilla Discovery Set",c:"Perfume",p:6500,old:7500,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:199,n:"Velvet Amber Eau de Parfum",c:"Perfume",p:8000,old:9400,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:200,n:"Velvet Amber Eau de Toilette",c:"Perfume",p:9500,old:11200,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:201,n:"Velvet Amber Perfume Mist",c:"Perfume",p:10900,old:12900,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:202,n:"Velvet Amber Perfume Oil",c:"Perfume",p:12400,old:14700,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:203,n:"Velvet Amber Discovery Set",c:"Perfume",p:13900,old:16500,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:204,n:"Velvet Musk Eau de Parfum",c:"Perfume",p:3900,old:4900,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:205,n:"Velvet Musk Eau de Toilette",c:"Perfume",p:5300,old:6100,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:206,n:"Velvet Musk Perfume Mist",c:"Perfume",p:6800,old:8000,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:207,n:"Velvet Musk Perfume Oil",c:"Perfume",p:8300,old:9800,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:208,n:"Velvet Musk Discovery Set",c:"Perfume",p:9800,old:11600,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:209,n:"Velvet Jasmine Eau de Parfum",c:"Perfume",p:11200,old:13300,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:210,n:"Velvet Jasmine Eau de Toilette",c:"Perfume",p:12700,old:15100,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:211,n:"Velvet Jasmine Perfume Mist",c:"Perfume",p:2700,old:3600,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:212,n:"Velvet Jasmine Perfume Oil",c:"Perfume",p:4200,old:4900,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:213,n:"Velvet Jasmine Discovery Set",c:"Perfume",p:5600,old:6600,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:214,n:"Velvet Sandalwood Eau de Parfum",c:"Perfume",p:7100,old:8400,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:215,n:"Velvet Sandalwood Eau de Toilette",c:"Perfume",p:8600,old:10200,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:216,n:"Velvet Sandalwood Perfume Mist",c:"Perfume",p:10100,old:12000,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:217,n:"Velvet Sandalwood Perfume Oil",c:"Perfume",p:11600,old:13800,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:218,n:"Velvet Sandalwood Discovery Set",c:"Perfume",p:13000,old:15500,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:219,n:"Velvet Peony Eau de Parfum",c:"Perfume",p:3000,old:3500,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:220,n:"Velvet Peony Eau de Toilette",c:"Perfume",p:4500,old:5300,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:221,n:"Velvet Peony Perfume Mist",c:"Perfume",p:6000,old:7100,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:222,n:"Velvet Peony Perfume Oil",c:"Perfume",p:7400,old:8800,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:223,n:"Velvet Peony Discovery Set",c:"Perfume",p:8900,old:10600,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:224,n:"Velvet Citrus Eau de Parfum",c:"Perfume",p:10400,old:12400,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:225,n:"Velvet Citrus Eau de Toilette",c:"Perfume",p:11900,old:14200,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:226,n:"Velvet Citrus Perfume Mist",c:"Perfume",p:13300,old:15400,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:227,n:"Velvet Citrus Perfume Oil",c:"Perfume",p:3300,old:3900,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:228,n:"Velvet Citrus Discovery Set",c:"Perfume",p:4800,old:5700,e:"🌹",d:"Elegant signature fragrance for day or evening"},
{id:229,n:"Crown Argan Shampoo",c:"Hair",p:4700,old:5500,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:230,n:"Crown Argan Conditioner",c:"Hair",p:1600,old:1900,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:231,n:"Crown Argan Hair Mask",c:"Hair",p:3100,old:3700,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:232,n:"Crown Argan Hair Oil",c:"Hair",p:4500,old:5400,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:233,n:"Crown Argan Leave-In Cream",c:"Hair",p:1400,old:1900,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:234,n:"Crown Argan Curl Cream",c:"Hair",p:2900,old:3700,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:235,n:"Crown Argan Edge Gel",c:"Hair",p:4400,old:5500,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:236,n:"Crown Argan Scalp Serum",c:"Hair",p:1200,old:1400,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:237,n:"Crown Argan Hair Mist",c:"Hair",p:2700,old:3200,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:238,n:"Crown Argan Heat Protectant",c:"Hair",p:4200,old:5000,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:239,n:"Crown Argan Detangler",c:"Hair",p:1100,old:1500,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:240,n:"Crown Coconut Shampoo",c:"Hair",p:2500,old:3200,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:241,n:"Crown Coconut Conditioner",c:"Hair",p:4000,old:5000,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:242,n:"Crown Coconut Hair Mask",c:"Hair",p:5500,old:6800,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:243,n:"Crown Coconut Hair Oil",c:"Hair",p:2400,old:2800,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:244,n:"Crown Coconut Leave-In Cream",c:"Hair",p:3800,old:4500,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:245,n:"Crown Coconut Curl Cream",c:"Hair",p:5300,old:6300,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:246,n:"Crown Coconut Edge Gel",c:"Hair",p:2200,old:2800,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:247,n:"Crown Coconut Scalp Serum",c:"Hair",p:3700,old:4600,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:248,n:"Crown Coconut Hair Mist",c:"Hair",p:5100,old:6300,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:249,n:"Crown Coconut Heat Protectant",c:"Hair",p:2000,old:2700,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:250,n:"Crown Coconut Detangler",c:"Hair",p:3500,old:4100,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:251,n:"Crown Shea Shampoo",c:"Hair",p:5000,old:5900,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:252,n:"Crown Shea Conditioner",c:"Hair",p:1800,old:2200,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:253,n:"Crown Shea Hair Mask",c:"Hair",p:3300,old:4000,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:254,n:"Crown Shea Hair Oil",c:"Hair",p:4800,old:5800,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:255,n:"Crown Shea Leave-In Cream",c:"Hair",p:1700,old:2300,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:256,n:"Crown Shea Curl Cream",c:"Hair",p:3200,old:4100,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:257,n:"Crown Shea Edge Gel",c:"Hair",p:4600,old:5300,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:258,n:"Crown Shea Scalp Serum",c:"Hair",p:1500,old:1800,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:259,n:"Crown Shea Hair Mist",c:"Hair",p:3000,old:3600,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:260,n:"Crown Shea Heat Protectant",c:"Hair",p:4500,old:5400,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:261,n:"Crown Shea Detangler",c:"Hair",p:1300,old:1800,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:262,n:"Crown Keratin Shampoo",c:"Hair",p:2800,old:3600,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:263,n:"Crown Keratin Conditioner",c:"Hair",p:4300,old:5400,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:264,n:"Crown Keratin Hair Mask",c:"Hair",p:1200,old:1400,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:265,n:"Crown Keratin Hair Oil",c:"Hair",p:2600,old:3100,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:266,n:"Crown Keratin Leave-In Cream",c:"Hair",p:4100,old:4900,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:267,n:"Crown Keratin Curl Cream",c:"Hair",p:1000,old:1400,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:268,n:"Crown Keratin Edge Gel",c:"Hair",p:2500,old:3200,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:269,n:"Crown Keratin Scalp Serum",c:"Hair",p:3900,old:4900,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:270,n:"Crown Keratin Hair Mist",c:"Hair",p:5400,old:6700,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:271,n:"Crown Keratin Heat Protectant",c:"Hair",p:2300,old:2700,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:272,n:"Crown Keratin Detangler",c:"Hair",p:3800,old:4500,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:273,n:"Crown Castor Shampoo",c:"Hair",p:5200,old:6200,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:274,n:"Crown Castor Conditioner",c:"Hair",p:2100,old:2600,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:275,n:"Crown Castor Hair Mask",c:"Hair",p:3600,old:4500,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:276,n:"Crown Castor Hair Oil",c:"Hair",p:5100,old:6300,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:277,n:"Crown Castor Leave-In Cream",c:"Hair",p:1900,old:2600,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:278,n:"Crown Castor Curl Cream",c:"Hair",p:3400,old:3900,e:"👑",d:"Salon-inspired care for healthy-looking, beautiful hair"},
{id:279,n:"Cloud Soft Shea Body Lotion",c:"Body",p:3300,old:3800,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:280,n:"Cloud Soft Shea Body Butter",c:"Body",p:1200,old:1500,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:281,n:"Cloud Soft Shea Body Oil",c:"Body",p:2700,old:3300,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:282,n:"Cloud Soft Shea Body Wash",c:"Body",p:4200,old:5100,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:283,n:"Cloud Soft Shea Sugar Scrub",c:"Body",p:2200,old:2800,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:284,n:"Cloud Soft Shea Body Polish",c:"Body",p:3600,old:4500,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:285,n:"Cloud Soft Shea Hand Cream",c:"Body",p:1600,old:2300,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:286,n:"Cloud Soft Shea Foot Cream",c:"Body",p:3100,old:3600,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:287,n:"Cloud Soft Shea Bath Soak",c:"Body",p:1100,old:1300,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:288,n:"Cloud Soft Shea Body Mist",c:"Body",p:2500,old:3000,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:289,n:"Cloud Soft Shea Deodorant",c:"Body",p:4000,old:4800,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:290,n:"Cloud Soft Vanilla Body Lotion",c:"Body",p:2000,old:2600,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:291,n:"Cloud Soft Vanilla Body Butter",c:"Body",p:3500,old:4400,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:292,n:"Cloud Soft Vanilla Body Oil",c:"Body",p:1400,old:2000,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:293,n:"Cloud Soft Vanilla Body Wash",c:"Body",p:2900,old:3400,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:294,n:"Cloud Soft Vanilla Sugar Scrub",c:"Body",p:900,old:1100,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:295,n:"Cloud Soft Vanilla Body Polish",c:"Body",p:2400,old:2900,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:296,n:"Cloud Soft Vanilla Hand Cream",c:"Body",p:3800,old:4600,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:297,n:"Cloud Soft Vanilla Foot Cream",c:"Body",p:1800,old:2400,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:298,n:"Cloud Soft Vanilla Bath Soak",c:"Body",p:3300,old:4200,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:299,n:"Cloud Soft Vanilla Body Mist",c:"Body",p:1300,old:1900,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:300,n:"Cloud Soft Vanilla Deodorant",c:"Body",p:2700,old:3100,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:301,n:"Cloud Soft Cocoa Body Lotion",c:"Body",p:700,old:900,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:302,n:"Cloud Soft Cocoa Body Butter",c:"Body",p:2200,old:2700,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:303,n:"Cloud Soft Cocoa Body Oil",c:"Body",p:3700,old:4500,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:304,n:"Cloud Soft Cocoa Body Wash",c:"Body",p:1600,old:2100,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:305,n:"Cloud Soft Cocoa Sugar Scrub",c:"Body",p:3100,old:3900,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:306,n:"Cloud Soft Cocoa Body Polish",c:"Body",p:1100,old:1700,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:307,n:"Cloud Soft Cocoa Hand Cream",c:"Body",p:2600,old:3000,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:308,n:"Cloud Soft Cocoa Foot Cream",c:"Body",p:4000,old:4700,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:309,n:"Cloud Soft Cocoa Bath Soak",c:"Body",p:2000,old:2500,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:310,n:"Cloud Soft Cocoa Body Mist",c:"Body",p:3500,old:4300,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:311,n:"Cloud Soft Cocoa Deodorant",c:"Body",p:1500,old:2000,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:312,n:"Cloud Soft Rose Body Lotion",c:"Body",p:3000,old:3800,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:313,n:"Cloud Soft Rose Body Butter",c:"Body",p:900,old:1500,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:314,n:"Cloud Soft Rose Body Oil",c:"Body",p:2400,old:2800,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:315,n:"Cloud Soft Rose Body Wash",c:"Body",p:3900,old:4600,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:316,n:"Cloud Soft Rose Sugar Scrub",c:"Body",p:1900,old:2300,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:317,n:"Cloud Soft Rose Body Polish",c:"Body",p:3300,old:4000,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:318,n:"Cloud Soft Rose Hand Cream",c:"Body",p:1300,old:1800,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:319,n:"Cloud Soft Rose Foot Cream",c:"Body",p:2800,old:3600,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:320,n:"Cloud Soft Rose Bath Soak",c:"Body",p:800,old:1300,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:321,n:"Cloud Soft Rose Body Mist",c:"Body",p:2200,old:2600,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:322,n:"Cloud Soft Rose Deodorant",c:"Body",p:3700,old:4400,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:323,n:"Cloud Soft Coconut Body Lotion",c:"Body",p:1700,old:2100,e:"🧴",d:"Nourishing body care for soft, smooth skin"},
{id:324,n:"Diamond Nude Gel Polish",c:"Nails",p:2300,old:2700,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:325,n:"Diamond Nude Nail Polish",c:"Nails",p:3800,old:4500,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:326,n:"Diamond Nude Nail Care Oil",c:"Nails",p:1600,old:2000,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:327,n:"Diamond Nude Cuticle Remover",c:"Nails",p:3000,old:3700,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:328,n:"Diamond Nude Nail Strengthener",c:"Nails",p:800,old:1200,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:329,n:"Diamond Nude Manicure Kit",c:"Nails",p:2300,old:3000,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:330,n:"Diamond Nude Press-On Nails",c:"Nails",p:3800,old:4800,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:331,n:"Diamond Nude Nail Art Set",c:"Nails",p:1500,old:1700,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:332,n:"Diamond Nude Base Coat",c:"Nails",p:3000,old:3600,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:333,n:"Diamond Nude Top Coat",c:"Nails",p:800,old:1100,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:334,n:"Diamond Blush Gel Polish",c:"Nails",p:2300,old:2900,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:335,n:"Diamond Blush Nail Polish",c:"Nails",p:3800,old:4700,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:336,n:"Diamond Blush Nail Care Oil",c:"Nails",p:1500,old:2100,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:337,n:"Diamond Blush Cuticle Remover",c:"Nails",p:3000,old:3900,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:338,n:"Diamond Blush Nail Strengthener",c:"Nails",p:800,old:1000,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:339,n:"Diamond Blush Manicure Kit",c:"Nails",p:2300,old:2700,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:340,n:"Diamond Blush Press-On Nails",c:"Nails",p:3700,old:4400,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:341,n:"Diamond Blush Nail Art Set",c:"Nails",p:1500,old:1900,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:342,n:"Diamond Blush Base Coat",c:"Nails",p:3000,old:3800,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:343,n:"Diamond Blush Top Coat",c:"Nails",p:800,old:1300,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:344,n:"Diamond Berry Gel Polish",c:"Nails",p:2200,old:3000,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:345,n:"Diamond Berry Nail Polish",c:"Nails",p:3700,old:4300,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:346,n:"Diamond Berry Nail Care Oil",c:"Nails",p:1500,old:1800,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:347,n:"Diamond Berry Cuticle Remover",c:"Nails",p:3000,old:3600,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:348,n:"Diamond Berry Nail Strengthener",c:"Nails",p:700,old:1000,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:349,n:"Diamond Berry Manicure Kit",c:"Nails",p:2200,old:2800,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:350,n:"Diamond Berry Press-On Nails",c:"Nails",p:3700,old:4600,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:351,n:"Diamond Berry Nail Art Set",c:"Nails",p:1500,old:2200,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:352,n:"Diamond Berry Base Coat",c:"Nails",p:2900,old:3400,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:353,n:"Diamond Berry Top Coat",c:"Nails",p:700,old:900,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:354,n:"Diamond Cherry Gel Polish",c:"Nails",p:2200,old:2700,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:355,n:"Diamond Cherry Nail Polish",c:"Nails",p:3700,old:4500,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:356,n:"Diamond Cherry Nail Care Oil",c:"Nails",p:1400,old:1900,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:357,n:"Diamond Cherry Cuticle Remover",c:"Nails",p:2900,old:3700,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:358,n:"Diamond Cherry Nail Strengthener",c:"Nails",p:700,old:1200,e:"💅",d:"Manicure essential for a neat, glossy finish"},
{id:359,n:"Pro Pro Brush Set",c:"Tools",p:1500,old:1700,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:360,n:"Pro Pro Makeup Mirror",c:"Tools",p:3000,old:3600,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:361,n:"Pro Pro Sponge Set",c:"Tools",p:4500,old:5400,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:362,n:"Pro Pro Facial Roller",c:"Tools",p:5900,old:7100,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:363,n:"Pro Pro Gua Sha",c:"Tools",p:7400,old:8900,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:364,n:"Pro Pro Tweezers",c:"Tools",p:2100,old:2800,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:365,n:"Pro Pro Eyelash Curler",c:"Tools",p:3600,old:4600,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:366,n:"Pro Pro Brush Cleaner",c:"Tools",p:5000,old:5800,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:367,n:"Pro Pro Organizer",c:"Tools",p:6500,old:7600,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:368,n:"Pro Pro Hair Brush",c:"Tools",p:1200,old:1500,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:369,n:"Pro Pro Makeup Case",c:"Tools",p:2700,old:3300,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:370,n:"Pro Pro Beauty Bag",c:"Tools",p:4200,old:5200,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:371,n:"Pro Soft Brush Set",c:"Tools",p:5600,old:6800,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:372,n:"Pro Soft Makeup Mirror",c:"Tools",p:7100,old:8700,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:373,n:"Pro Soft Sponge Set",c:"Tools",p:1800,old:2100,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:374,n:"Pro Soft Facial Roller",c:"Tools",p:3300,old:3900,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:375,n:"Pro Soft Gua Sha",c:"Tools",p:4700,old:5600,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:376,n:"Pro Soft Tweezers",c:"Tools",p:6200,old:7400,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:377,n:"Pro Soft Eyelash Curler",c:"Tools",p:900,old:1300,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:378,n:"Pro Soft Brush Cleaner",c:"Tools",p:2400,old:3100,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:379,n:"Pro Soft Organizer",c:"Tools",p:3800,old:4800,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:380,n:"Pro Soft Hair Brush",c:"Tools",p:5300,old:6100,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:381,n:"Pro Soft Makeup Case",c:"Tools",p:6800,old:8000,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:382,n:"Pro Soft Beauty Bag",c:"Tools",p:1500,old:1900,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:383,n:"Pro Precision Brush Set",c:"Tools",p:2900,old:3600,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:384,n:"Pro Precision Makeup Mirror",c:"Tools",p:4400,old:5400,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:385,n:"Pro Precision Sponge Set",c:"Tools",p:5900,old:7200,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:386,n:"Pro Precision Facial Roller",c:"Tools",p:7400,old:9000,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:387,n:"Pro Precision Gua Sha",c:"Tools",p:2000,old:2300,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:388,n:"Pro Precision Tweezers",c:"Tools",p:3500,old:4100,e:"🪞",d:"Practical beauty tool designed for easy routines"},
{id:389,n:"Queen Beauty Gift Box",c:"Gifts",p:13200,old:15300,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:390,n:"Queen Beauty Beauty Set",c:"Gifts",p:14700,old:17100,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:391,n:"Queen Beauty Discovery Set",c:"Gifts",p:2700,old:3300,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:392,n:"Queen Beauty Pamper Box",c:"Gifts",p:4200,old:5100,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:393,n:"Queen Beauty Travel Kit",c:"Gifts",p:5600,old:6800,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:394,n:"Queen Beauty Collection",c:"Gifts",p:7100,old:8600,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:395,n:"Queen Fragrance Gift Box",c:"Gifts",p:8600,old:10400,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:396,n:"Queen Fragrance Beauty Set",c:"Gifts",p:10100,old:11700,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:397,n:"Queen Fragrance Discovery Set",c:"Gifts",p:11500,old:13400,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:398,n:"Queen Fragrance Pamper Box",c:"Gifts",p:13000,old:15200,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:399,n:"Queen Fragrance Travel Kit",c:"Gifts",p:14500,old:17000,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"},
{id:400,n:"Queen Fragrance Collection",c:"Gifts",p:16000,old:18800,e:"🎁",d:"Curated Beauty Queen collection ready for gifting"}];

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
  x.img2 = imgs[(idx + 1) % imgs.length];
  x.img3 = imgs[(idx + 2) % imgs.length];
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
      <div class="detail-gallery"><div class="detail-image"><img src="${x.img}" alt="${x.n}"><span class="detail-photo-price">${money(x.p)}</span></div><div class="detail-thumbs"><img src="${x.img2}" alt="${x.n} alternate view"><img src="${x.img3}" alt="${x.n} alternate view"></div></div>
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
      <div class="pic photo-pic" onclick="openProduct(${x.id})"><img src="${x.img}" alt="${x.n}" loading="lazy"><span class="photo-price">${money(x.p)}</span><span class="quick-view">Quick view</span></div>
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
