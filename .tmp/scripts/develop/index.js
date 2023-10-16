

function HeaderType() {
    if (window.outerWidth > 768) {
        $(window).on('scroll', function () {
            if (window.pageYOffset === 0) $('.header').removeClass('header-scroll');else $('.header').addClass('header-scroll');
        });
    } else {
        $('.header').addClass('header-scroll');
    }
}
function MenuBurger() {
    $(document).on('click', '.burger', function () {
        $('.menu-burger').toggle();
        $('.burger-icon').toggle();
        $('.burger-close').toggle();
    });
}
function initSlider() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".swiper-button-next-main",
            prevEl: ".swiper-button-prev-main"
        }
    });
    var swiper = new Swiper(".slider-filter", {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next-filter",
            prevEl: ".swiper-button-prev-filter"
        }
    });

    var swiper = new Swiper(".slider-time", {
        autoplay: {
            delay: 4300,
            disableOnInteraction: false
        },
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next-time",
            prevEl: ".swiper-button-prev-time"
        },
        on: {
            slideChange: function () {
                $('.viewbox').each(function () {
                    $(this).remove();
                });
                $('.slider-time-number').append(copy);
            }
        }
    });
}

$(document).ready(function () {
    let copy;
    $('.viewbox').each(function () {
        copy = $(this).clone();
    });
    $("#openModalBtn").click(function () {
        $.fancybox.open({
            src: '#modalContent',
            type: 'inline',
            opts: {
                afterShow: function (instance, current) {
                    console.info('Модальное окно открыто');
                },
                afterClose: function (instance, current) {
                    console.info('Модальное окно закрыто');
                }
            }
        });
    });
    initSlider();

    $(window).on('scroll', function () {
        yPos = window.pageYOffset;
        shift = yPos * 0.8 + 'px';
        $('.mySwiper').css('top', shift);
    });
    MenuBurger();
    HeaderType();
});

$(window).load(function () {});

$(window).resize(function () {});
//# sourceMappingURL=index.js.map
