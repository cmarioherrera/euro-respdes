(function(){
   var loadCSS = require('./lib/loadCSS');
   var onScroll = require('./lib/onScroll');
   document.addEventListener('DOMContentLoaded',onDomLoad);

   var headerElement = document.querySelector('.header');
   window.addEventListener('scroll', onScroll);


   function onDomLoad(){
     var btnMenu = document.getElementById('btnMenu');
     var navbarMenu = document.getElementById('navbarMenu');

     btnMenu.addEventListener('click',onClickMenu);
     loadCSS('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css');
     loadCSS('https://fonts.googleapis.com/css?family=Montserrat|Lato');
     function onClickMenu(){
         navbarMenu.classList.toggle('header-menu-list--show');
     }
   }

}());
