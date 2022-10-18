let logoimg = document.getElementById('logoimg');

window.addEventListener("scroll", function(){
  let value = window.scrollY;
  logoimg.style.top = value * 1.05 + 'px';
})