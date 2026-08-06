const products = [
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
  return `<header class="nav"><div class="container nav-inner"><a class="brand" href="index.html"><span class="brand-top">Summer&rsquo;s</span><span class="brand-bottom">Secret</span><small>Objects for everyday living</small></a><nav class="links" id="links"><a class="${active==='home'?'active':''}" href="index.html">Home</a><a class="${active==='products'?'active':''}" href="products.html">Products</a><a class="${active==='about'?'active':''}" href="about.html">About Us</a><a class="${active==='contact'?'active':''}" href="contact.html">Contact</a></nav><a class="btn sage" href="contact.html#inquiry">Get a Quote</a><button class="menu" id="menu" aria-label="Menu">&#9776;</button></div></header>`;
}

function footer() {
  return `<footer class="site-footer"><div class="container"><div class="foot-grid"><div><a class="brand" href="index.html"><span class="brand-top">Summer&rsquo;s</span><span class="brand-bottom">Secret</span><small>Objects for everyday living</small></a><p>Design-led wholesale homeware manufactured in China for retailers, importers, hospitality groups and private labels worldwide.</p><p><a href="mailto:summerhome@aliyun.com">summerhome@aliyun.com</a></p></div><div><h4>Collections</h4><div class="foot-links"><a href="products.html?cat=vases">Vases</a><a href="products.html?cat=candles">Candles</a><a href="products.html?cat=holders">Candle Holders</a><a href="products.html?cat=tableware">Tableware</a></div></div><div><h4>Company</h4><div class="foot-links"><a href="about.html">Factory &amp; QC</a><a href="about.html#oem">OEM / ODM</a><a href="contact.html">Contact</a><a href="admin.html">Site Admin</a></div></div><div><h4>Policies</h4><div class="foot-links"><a href="privacy.html">Privacy Policy</a><a href="privacy.html#cookies">Cookie Policy</a><a href="contact.html#inquiry">Request samples</a></div></div></div><div class="copyright"><span>&copy; 2026 Summer&rsquo;s Secret. All rights reserved.</span><span>summersecret.cn &middot; China Homeware Manufacturer</span></div></div></footer><a class="whatsapp" href="https://wa.me/8615586390157?text=Hello%20Summer%27s%20Secret%2C%20I%27d%20like%20a%20quote." target="_blank" aria-label="WhatsApp">WA</a><div class="cookie" id="cookie"><p>We use essential cookies and optional analytics to improve your browsing experience. See our <a href="privacy.html#cookies"><u>Cookie Policy</u></a>.</p><button class="btn sage" id="acceptCookie">Accept</button></div>`;
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
  alert('Thank you! Your inquiry has been recorded. We will reply via summerhome@aliyun.com within 12 hours.');
  e.target.reset();
}

function renderProducts(target,limit) {
  const custom=JSON.parse(localStorage.getItem('ss-products')||'null');
  const list=custom||products;
  document.querySelector(target).innerHTML=list.slice(0,limit||99).map(p=>`<article class="product" data-cat="${p.cat}"><div class="product-img" style="--pos:${p.pos}"></div><div class="product-body"><span class="tag">${p.id}</span><h3>${p.name}</h3><p class="specs">${p.spec}</p><div class="product-row"><span>MOQ 500 pcs</span><a class="btn sage" href="contact.html?product=${encodeURIComponent(p.name)}#inquiry">Inquire &rarr;</a></div></div></article>`).join('');
}
