//
///*STICKY NAV BAR EFFECT*/
//window.onscroll = function() {myFunction()};
//
//var navbar = document.getElementById("navbar");
//var sticky = navbar.offsetTop;
//
//function myFunction() {
//  if (window.pageYOffset >= sticky) {
//    navbar.classList.add("sticky")
//  } else {
//    navbar.classList.remove("sticky");
//  }
//}

 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });
$(document).ready(function() {
    $('#autoWidth-2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-2').removeClass('cS-hidden');
        } 
    });  
  });
$(document).ready(function() {
    $('#autoWidth-3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-3').removeClass('cS-hidden');
        } 
    });  
  });
$(document).ready(function() {
    $('#autoWidth-4').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-4').removeClass('cS-hidden');
        } 
    });  
  });

$(document).ready(function() {
    $('#autoWidth-5').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth-5').removeClass('cS-hidden');
        } 
    });  
  });