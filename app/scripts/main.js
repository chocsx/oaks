$(document).ready(function(){
  $('.hamburger').click(function(){
    $('nav.menu ul').toggleClass('open');
    $('.hamburger').toggleClass('is-active');
  });
  $('.slider').slick({
    infinite: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    speed: 1000,
    autoplay: true,
    pauseOnHover: false,
    autoplaySpeed: 3000,
    mobileFirst: true
  });
  $(window).on("resize scroll load", function() {
    var e = $(window).scrollTop();

    if(e > 0){
      $('.topo').css({
        "background-color":"rgba(7,7,7,.5)",
        "color": "#FFF"
      })
    }else{
      $('.topo').css({
        "background-color":"transparent",
      })
    }

  });
});