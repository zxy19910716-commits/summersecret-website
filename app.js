const products = [
  {id:'SS-M415',name:'Petal-Shaped Ceramic Coffee Cup & Saucer Set',cat:'tableware',spec:'Ceramic Mug Set · 230 ml · US$4.30/set',image:'assets/petal-shaped-ceramic-coffee-cup-saucer-set-1.webp',href:'petal-shaped-ceramic-coffee-cup-saucer-set.html',moq:'20 sets'},
  {id:'SS-M414',name:'French Vintage Hera Rabbit Pedestal Coffee Mug',cat:'tableware',spec:'Ceramic · 300 ml · US$4.30/pc',image:'assets/french-vintage-hera-rabbit-pedestal-coffee-mug-1.webp',href:'french-vintage-hera-rabbit-pedestal-coffee-mug.html',moq:'36 pcs'},
  {id:'SS-V742',name:'Twist Ceramic Vase for Home Décor',cat:'vases',spec:'Ceramic · W18 × H13.5 cm · US$6.50/pc',image:'assets/twist-ceramic-vase-home-decor-1.webp',href:'twist-ceramic-vase-home-decor.html',moq:'20 pcs'},
  {id:'SS-V741',name:'Minimalist White Ceramic Vase Décor',cat:'vases',spec:'Ceramic · W14.2 × H17.3 cm · US$6.50/pc',image:'assets/minimalist-white-ceramic-vase-decor-1.webp',href:'minimalist-white-ceramic-vase-decor.html',moq:'20 pcs'},
  {id:'SS-V740',name:'White Ring Ceramic Vase Décor',cat:'vases',spec:'Ceramic · W18.6 × H16 cm · US$5.20/pc',image:'assets/white-ring-ceramic-vase-decor-1.webp',href:'white-ring-ceramic-vase-decor.html',moq:'20 pcs'},
  {id:'SS-V739',name:'Hand-Painted Boot Ceramic Vase',cat:'vases',spec:'Ceramic · W13.5 × H15.5 cm · US$5.50/pc',image:'assets/hand-painted-boot-ceramic-vase-1.webp',href:'hand-painted-boot-ceramic-vase.html',moq:'20 pcs'},
  {id:'SS-V738',name:'Creative Ceramic Body Vase',cat:'vases',spec:'Ceramic · 3 matte finishes · US$5.50/pc',image:'assets/creative-ceramic-body-vase-1.webp',href:'creative-ceramic-body-vase.html',moq:'20 pcs'},
  {id:'SS-V737',name:'Creative White Ceramic Flower Vase',cat:'vases',spec:'Ceramic · W12 × H19.5 cm · US$6.50/pc',image:'assets/creative-white-ceramic-flower-vase-1.webp',href:'creative-white-ceramic-flower-vase.html',moq:'20 pcs'},
  {id:'SS-M413',name:'Hand-Pinched Ceramic Mug',cat:'tableware',spec:'Ceramic · 300 ml · Ø8 × H9 cm · US$4.50/pc',image:'assets/hand-pinched-ceramic-mug-1.webp',href:'hand-pinched-ceramic-mug.html',moq:'20 pcs'},
  {id:'SS-V736',name:'Irregular Sculptural Glass Vase & Candle Holder',cat:'vases',spec:'Glass · 12 × 12 cm · Multiple colors · US$3.50/pc',image:'assets/irregular-sculptural-glass-vase-1.webp',href:'irregular-sculptural-glass-vase-candle-holder.html',moq:'20 pcs'},
  {id:'SS-V735',name:'Vintage Wabi-Sabi Ceramic Vase Set',cat:'vases',spec:'Ceramic · White & brown · From US$9.00',image:'assets/vintage-wabi-sabi-ceramic-vase-1.webp',href:'vintage-wabi-sabi-ceramic-vase-set.html',moq:'20 pcs'},
  {id:'SS-V734',name:'Sculptural Hands Ceramic Vase Set',cat:'vases',spec:'Ceramic · Small & large sizes · From US$4.00',image:'assets/sculptural-hands-ceramic-vase-1.webp',href:'sculptural-hands-ceramic-vase-set.html',moq:'20 pcs'},
  {id:'SS-C901',name:'Russian Vintage Doll Candle',cat:'candles',spec:'Soy wax & beeswax · 7 × 7 × 10.3 cm · 210 g',image:'assets/russian-vintage-doll-candle-1.webp',href:'russian-vintage-doll-candle.html',moq:'300 pcs'},
  {id:'SS-C902',name:'Realistic Grape Cluster Candle',cat:'candles',spec:'Beeswax & honey wax · 33/36/39 grapes · Gift box',image:'assets/realistic-grape-cluster-candle-1.webp',href:'realistic-grape-cluster-candle.html',moq:'10 boxes'},
  {id:'SS-CH205',name:'Ring Handle Ceramic Candle Holder',cat:'holders',spec:'Ceramic · Ø15 × H12.7 cm · US$4.30/pc',image:'assets/ring-handle-ceramic-candle-holder-1.webp',href:'ring-handle-ceramic-candle-holder.html',moq:'50 pcs'},
  {id:'SS-V101',name:'Ribbed Ceramic Vase',cat:'vases',spec:'Stoneware · H28 cm · Matte glaze',pos:'5% 8%'},
  {id:'SS-CH204',name:'Arch Candle Holder',cat:'holders',spec:'Stoneware · H18 cm · Reactive glaze',pos:'47% 8%'},
  {id:'SS-C307',name:'Morandi Pillar Candle Set',cat:'candles',spec:'Paraffin/soy blend · 3 sizes',pos:'90% 8%'},
  {id:'SS-M412',name:'Speckled Studio Mug',cat:'tableware',spec:'Ceramic · 380 ml · Dishwasher safe',pos:'100% 5%'},
  {id:'SS-P518',name:'Sage Dinner Plate Set',cat:'tableware',spec:'Stoneware · 21/27 cm · 2 pcs',pos:'5% 95%'},
  {id:'SS-B620',name:'Nesting Bowl Set',cat:'tableware',spec:'Stoneware · 14/18 cm · 2 pcs',pos:'48% 95%'},
  {id:'SS-V733',name:'Reactive Glaze Bud Vase',cat:'vases',spec:'Ceramic · H16 cm · Hand-finished',pos:'72% 95%'},
  {id:'SS-D840',name:'Artisan Dinnerware Set',cat:'tableware',spec:'Stoneware · 12 pcs · Custom color',pos:'100% 95%'}
];

function header(active='') {
  return `<header class="nav"><div class="container nav-inner"><a class="brand" href="index.html"><span class="brand-top">Summer&rsquo;s</span><span class="brand-bottom">Secret</span><small>Objects for everyday living</small></a><nav class="links" id="links"><a class="${active==='home'?'active':''}" href="index.html">HOME</a><div class="nav-dropdown"><a class="${active==='products'?'active':''}" href="products.html">PRODUCTS</a><div class="submenu"><a href="products.html?cat=vases">VASES</a><a href="products.html?cat=candles">CANDLES</a><a href="products.html?cat=holders">CANDLE HOLDERS</a><a href="products.html?cat=tableware&amp;search=mug">MUGS</a><a href="products.html?search=gift%20set">GIFT SETS</a><a href="products.html?search=xmas">X&rsquo;MAS SERIES</a></div></div><a class="${active==='about'?'active':''}" href="about.html">ABOUT US</a><a class="${active==='contact'?'active':''}" href="contact.html">CONTACT</a><a class="${active==='blog'?'active':''}" href="blog.html">BLOG</a></nav><form class="nav-search" action="products.html" role="search"><svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4"></path></svg><input type="search" name="search" placeholder="Search" aria-label="Search products"></form><button class="menu" id="menu" aria-label="Menu">&#9776;</button></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container"><div class="foot-grid"><div><h4>PRODUCT</h4><div class="foot-links"><a href="products.html?cat=candles">CANDLES</a><a href="products.html?cat=vases">VASES</a><a href="products.html?cat=holders">CANDLE HOLDERS</a><a href="products.html?cat=tableware&amp;search=mug">MUGS</a></div></div><div><h4>COMPANY</h4><div class="foot-links"><a href="about.html">ABOUT US</a><a href="contact.html">CONTACT US</a><a href="faq.html">FAQ</a><a href="blog.html">BLOG</a></div></div><div><h4>POLICIES</h4><div class="foot-links"><a href="privacy.html">PRIVACY POLICY</a><a href="privacy.html#returns">RETURN POLICY</a><a href="privacy.html#shipping">SHIPPING POLICY</a></div></div></div><div class="copyright"><span>&copy; 2026 SUMMER&rsquo;S SECRET. All rights reserved.</span><span>summersecret.cn &middot; China Homeware Manufacturer</span></div></div></footer><a class="whatsapp" href="https://wa.me/8615586390157?text=Hello%20Summer%27s%20Secret%2C%20I%27d%20like%20a%20quote." target="_blank" aria-label="WhatsApp">WA</a><div class="cookie" id="cookie"><p>We use essential cookies and optional analytics to improve your browsing experience. See our <a href="privacy.html#cookies"><u>Cookie Policy</u></a>.</p><button class="btn sage" id="acceptCookie">Accept</button></div>`;
}

function init(active) {
  document.documentElement.lang='en';
  document.documentElement.dir='ltr';
  document.querySelector('#site-header').innerHTML=header(active);
  document.querySelector('#site-footer').innerHTML=footer();
  document.querySelector('#menu').onclick=()=>document.querySelector('#links').classList.toggle('open');
  if(localStorage.getItem('ss-cookie')) document.querySelector('#cookie').classList.add('hidden');
  document.querySelector('#acceptCookie').onclick=()=>{localStorage.setItem('ss-cookie','1');document.querySelector('#cookie').classList.add('hidden')};
  document.querySelectorAll('form[data-inquiry]').forEach(f=>f.addEventListener('submit',submitInquiry));
}

function submitInquiry(e) {
  e.preventDefault();
  const data=Object.fromEntries(new FormData(e.target));
  data.date=new Date().toISOString();
  const list=JSON.parse(localStorage.getItem('ss-inquiries')||'[]');
  list.unshift(data);
  localStorage.setItem('ss-inquiries',JSON.stringify(list));
  alert('Thank you! Your inquiry has been recorded. We will reply via info@summersecret.cn within 12 hours.');
  e.target.reset();
}

function renderProducts(target,limit) {
  const custom=JSON.parse(localStorage.getItem('ss-products')||'null');
  const list=custom||products;
  const term=(new URLSearchParams(location.search).get('search')||'').trim().toLowerCase();
  const filtered=term?list.filter(p=>`${p.id} ${p.name} ${p.cat} ${p.spec}`.toLowerCase().includes(term)):list;
  document.querySelector(target).innerHTML=filtered.length?filtered.slice(0,limit||99).map(p=>{
    const href=p.href||`contact.html?product=${encodeURIComponent(p.name)}#inquiry`;
    const media=p.image?`<img src="${p.image}" alt="${p.name}" loading="lazy">`:'';
    const style=p.image?'':` style="--pos:${p.pos}"`;
    return `<article class="product" data-cat="${p.cat}"><a class="product-img" href="${href}"${style}>${media}</a><div class="product-body"><span class="tag">${p.id}</span><h3><a href="${href}">${p.name}</a></h3><p class="specs">${p.spec}</p><div class="product-row"><span>MOQ ${p.moq||'500 pcs'}</span><a class="btn sage" href="${href}">${p.href?'View details':'Inquire'} &rarr;</a></div></div></article>`;
  }).join(''):`<div class="search-empty"><h3>No products found</h3><p>Try another keyword or <a href="products.html"><u>view all products</u></a>.</p></div>`;
}
