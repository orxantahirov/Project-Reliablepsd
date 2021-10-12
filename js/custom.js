$(window).on("scroll", function () {
    if ($(window).scrollTop() > 30) {
        $("#first").addClass("bg-black");
        $('.logo').attr('src', 'img/Logo-white.png');
        $('.hamburger-menu').addClass('active');
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#first").removeClass("bg-black");
        $('.logo').attr('src', 'img/logo.png');
        $('.hamburger-menu').removeClass('active');


    }
});
$('.hamburger-menu').click(function () {
    $('.sub-menu').toggleClass('open');
    $('.hamburger-menu').toggleClass('opened');
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});