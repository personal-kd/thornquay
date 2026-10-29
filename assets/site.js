(function(){
  var hd=document.querySelector('header.site');
  function hh(){if(hd)document.documentElement.style.setProperty('--head-h',hd.offsetHeight+'px');}
  hh();window.addEventListener('resize',hh);
  var calm=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(!calm&&'IntersectionObserver' in window){
    // 1-3: reveal blocks, rise the process steps, draw brass rules; each runs once
    var GRID='.offer-grid,.principles,.ins-grid,.scen-grid,.flow,.flow-foot,.who-grid,.steps,.partners,.values,.article,.split';
    var io=new IntersectionObserver(function(es){
      var n=0;
      es.forEach(function(e){
        if(!e.isIntersecting)return;
        var el=e.target;io.unobserve(el);
        var d=Math.min(n++,6)*(el.classList.contains('rv-rise')?140:90);
        el.style.transitionDelay=d+'ms';
        el.classList.add('in','drawn');
        setTimeout(function(){el.classList.remove('rv','rv-rise','in');el.style.transitionDelay='';},d+1000);
      });
    },{rootMargin:'0px 0px -8% 0px',threshold:.12});
    function rv(el){if(el.closest('.hero-screen'))return;el.classList.add('rv');if(el.closest('.steps-rise')&&el.matches('.step'))el.classList.add('rv-rise');io.observe(el);}
    document.querySelectorAll('main section.wrap, main section > .wrap').forEach(function(w){
      [].forEach.call(w.matches(GRID)?[w]:w.children,function(c){
        if(c.matches(GRID))[].forEach.call(c.children,rv);else rv(c);
      });
    });
    document.querySelectorAll('.principle,.ins').forEach(function(el){el.classList.add('draw-line');io.observe(el);});
    document.querySelectorAll('.rule').forEach(function(el){el.classList.add('draw');io.observe(el);});
  }
  // 4: hero arches settle into the waterline as the page scrolls
  var ar=document.querySelector('.hero .arches');
  if(ar&&!calm){
    var tk=false;
    function settle(){tk=false;var y=Math.min(window.scrollY,window.innerHeight);ar.style.transform=y>0?'translateY('+(y*.18).toFixed(1)+'px)':'';}
    window.addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(settle);}},{passive:true});
  }
  var nav=document.getElementById('mainNav'), btn=document.getElementById('menuBtn');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  var cb=document.getElementById('copyEmail'), st=document.getElementById('copyStatus'), et=document.getElementById('emailText');
  if(cb&&et){cb.addEventListener('click',function(){
    var t=et.textContent;
    function sel(){var r=document.createRange();r.selectNodeContents(et);var s=window.getSelection();s.removeAllRanges();s.addRange(r);if(st)st.textContent='Selected. Press Ctrl or Cmd + C to copy.';}
    try{navigator.clipboard.writeText(t).then(function(){if(st)st.textContent='Email address copied.';},sel);}catch(e){sel();}
  });}
})();
