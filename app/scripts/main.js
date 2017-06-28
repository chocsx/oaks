$(document).ready(function() {
    $('.hamburger').click(function() {
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
    $(window).on('resize scroll load', function() {
        var e = $(window).scrollTop();
        if (e > 0) {
            $('.home  .topo').css({
                'background-color': 'rgba(7,7,7,.5)',
                'color': '#FFF'
            })
        } else {
            $('.home .topo').css({
                'background-color': 'transparent',
            })
        }
    });
    $('.menu a:not([href*="://"],[target="_blank"],[href^="mailto:"])').click(function(e) {
        e.preventDefault();
        var a = $(this).attr("href"),
            o = $(a).offset().top - $('header.topo').height() - 20;
        console.log(a);
        $("html, body").animate({
            scrollTop: o
        }, 500);
    $("nav.menu ul").removeClass("open");
    $(".hamburger").removeClass("is-active");
    })
});