$(function(){

    window.addEventListener("load", function(){
        AOS.init();
    });
// Navbar Toggling
$("#navbar-toggler").click(function(){
    $('.navbar-collapse').slideToggle();
});

// Navbar Bg Scroll
$(window).scroll(function(){
    let position = $(window).scrollTop();
    if(position  >= 80){
        $('.navbar').addClass('bg-navbar');
    } else {
        $('.navbar').removeClass('bg-navbar');

    }
});
// smooth scroll
let links = $('.navbar-nav a.nav-link, .btn-menu');
links.click(function(e){
    e.preventDefault();
    let target = $(this).attr('href');
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 700);
});

// Magnific Popup
$('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
            return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
        }
    }
});

// Slick slider
$('.testimonial-slider').slick({
    dots:true,
    infinite:true,
    autoplay:true,
    speed:300,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight:true,
});


  
});