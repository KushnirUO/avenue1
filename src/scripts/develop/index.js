

function HeaderType(){
    if(window.outerWidth > 768){
        $(window).on('scroll', function() {
            if(window.pageYOffset === 0)$('.header').removeClass('header-scroll');
            else $('.header').addClass('header-scroll');
        })
    }
    else{
        $('.header').addClass('header-scroll');
    }
}
function MenuBurger() {
    $(document).on('click', '.burger', function () {
        $('.menu-burger').toggle();
        $('.burger-icon').toggle();
        $('.burger-close').toggle();
    })
}

$(document).ready(function(){
    let copy;
    $('.viewbox').each(function (){
        copy = $(this).clone();
    })
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next-main",
            prevEl: ".swiper-button-prev-main",
        },
    });
    var swiper = new Swiper(".slider-filter", {
        slidesPerView: 4,
        navigation: {
            nextEl: ".swiper-button-next-main",
            prevEl: ".swiper-button-prev-main",
        },
    });

    var swiper = new Swiper(".slider-time", {
        autoplay: {
            delay: 4300,
            disableOnInteraction: false,
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-time",
            prevEl: ".swiper-button-prev-time",
        },
        on: {
            slideChange: function () {
                $('.viewbox').each(function (){
                    $(this).remove();
                })
                $('.slider-time-number').append(copy);
            },
        }
    });
    $(window).on('scroll', function() {
        yPos = window.pageYOffset;
        shift = yPos * 0.8 + 'px';
        $('.mySwiper').css('top', shift);
    });
    MenuBurger();
    HeaderType();
});

$(window).load(function(){

});

$(window).resize(function(){

});