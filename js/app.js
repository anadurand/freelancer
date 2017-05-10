/*
 * Archivo principal de JS
 */
 var lastScrollTop = 0;
//cambiar el estilo del header cuando avanza el scroll
window.addEventListener("scroll", function(){
   var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   console.log(currentScroll);
   if(currentScroll > 3){
     document.getElementById("navMenu").classList.add("change-nav");
     document.getElementById("header").classList.add("change-header");
   }
   if (currentScroll > 700 && currentScroll < 1590){
     document.getElementById("linkPortfolio").classList.add("change-background");
   }else {
     document.getElementById("linkPortfolio").classList.remove("change-background");
   }
   if (currentScroll > 1590 && currentScroll < 2100){
     document.getElementById("linkAbout").classList.add("change-background");
   }else {
     document.getElementById("linkAbout").classList.remove("change-background");
   }
   if (currentScroll > 2100 && currentScroll < 2800){
     document.getElementById("linkContact").classList.add("change-background");
   }else {
     document.getElementById("linkContact").classList.remove("change-background");
   }
   if(currentScroll<=3){
     document.getElementById("navMenu").classList.remove("change-nav");
     document.getElementById("header").classList.remove("change-header");
   }
   lastScrollTop = currentScroll;
}, false);
