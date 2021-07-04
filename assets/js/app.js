$(function(){
    $("#container1").twentytwenty();
  });

  $(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        autoplay:true,
        margin:20,
        items:3,
        nav:false,
        smartSpeed:1000,
        responsive:{
          0:{
              items:1,
          },
          577:{
              items:2,
          },
          800:{
              items:3,
          }
      }
    });
  });


  // toggle Icon
  let navWrapper = document.getElementById("navWrapper");
 document.getElementById("toggleMenu").addEventListener("click", function(){
  navWrapper.classList.toggle("showMobileMenu");
 })