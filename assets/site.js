(function(){
  var hd=document.querySelector('header.site');
  function hh(){if(hd)document.documentElement.style.setProperty('--head-h',hd.offsetHeight+'px');}
  hh();window.addEventListener('resize',hh);
  var nav=document.getElementById('mainNav'), btn=document.getElementById('menuBtn');
  if(btn&&nav){btn.addEventListener('click',function(){var o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false');});}
  var cb=document.getElementById('copyEmail'), st=document.getElementById('copyStatus'), et=document.getElementById('emailText');
  if(cb&&et){cb.addEventListener('click',function(){
    var t=et.textContent;
    function sel(){var r=document.createRange();r.selectNodeContents(et);var s=window.getSelection();s.removeAllRanges();s.addRange(r);if(st)st.textContent='Selected. Press Ctrl or Cmd + C to copy.';}
    try{navigator.clipboard.writeText(t).then(function(){if(st)st.textContent='Email address copied.';},sel);}catch(e){sel();}
  });}
})();
