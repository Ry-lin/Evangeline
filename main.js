$(document).ready(function () {
     $('.menu-toggler').on('click', function () {
          $('.menu-toggler').toggleClass('open');
          $('.top-nav').toggleClass('open');
     });

     $('.top-nav .nav-link').on('click', function () {
          $('.menu-toggler').removeClass('open');
          $('.top-nav').removeClass('open');
     });

     AudioScheduledSourceNode.init({
          easing: 'ease',
          duration:1800,
     });
});