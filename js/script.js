window.onload = function () {
    AOS.init();
}

$(document).ready(function () {

    //주메뉴
    let header = $('.header');

    $(window).scroll(function () {
        let scroll_bar = $(window).scrollTop();
        if (scroll_bar > 0) {
            header.addClass('header-active')
        } else {
            header.removeClass('header-active')
        };
    });

    // 부드럽게 위치 이동하는 코드
    var moveEl = $('.move');
    // 클릭시 해당위치로 부드럽게 이동한다.
    $.each(moveEl, function () {

        $(this).click(function (e) {
            // href 를 일단 막아서 위치이동 못하게함.
            e.preventDefault();
            // 가야하는 곳의 위치를 파악한다.
            var tg = $(this).attr('href');
            var num;
            // 혹시 #아이디 가 없다면
            if (tg == '#') {
                num = 0;
            } else {
                // 어느 만큼 이동해야 하는 지를 숫자로 파악한다.
                num = $(tg).offset().top;
            }
            // 움직이자
            $('html, body').stop().animate({
                scrollTop: num
            }, 500);
        });
    });

    var photoshop = new ProgressBar.Line('#photoshop-level', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#a63220',
        trailColor: 'none',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%',
            opacity: 0.7,
        }

    });

    var Illustrator = new ProgressBar.Line('#illust-level', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#a63220',
        trailColor: 'none',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%',
            opacity: 0.7,
        }

    });

    var HTML = new ProgressBar.Line('#html-level', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#a63220',
        trailColor: 'none',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%',
            opacity: 0.7,
        }

    });

    var CSS = new ProgressBar.Line('#css-level', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#a63220',
        trailColor: 'none',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%',
            opacity: 0.7,
        }

    });

    var JavaScript = new ProgressBar.Line('#js-level', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#a63220',
        trailColor: 'none',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%',
            opacity: 0.7,
        }

    });

    var jQuery = new ProgressBar.Line('#jQuery-level', {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#a63220',
        trailColor: 'none',
        trailWidth: 1,
        svgStyle: {
            width: '100%',
            height: '100%',
            opacity: 0.7,
        }

    });

    // 스크롤을 했을 때 모션 시작
    var sc_y = $(window).scrollTop();
    $(window).scroll(function () {
        sc_y = $(window).scrollTop();
        if (sc_y >= 3200) {
            JavaScript.animate(0.55); // Number from 0.0 to 1.0
            jQuery.animate(0.6); // Number from 0.0 to 1.0
            CSS.animate(0.78); // Number from 0.0 to 1.0
            HTML.animate(0.76); // Number from 0.0 to 1.0
            photoshop.animate(0.75); // Number from 0.0 to 1.0    
            Illustrator.animate(0.70); // Number from 0.0 to 1.0
        } else {
            JavaScript.animate(0); // Number from 0.0 to 1.0
            jQuery.animate(0); // Number from 0.0 to 1.0
            CSS.animate(0); // Number from 0.0 to 1.0
            HTML.animate(0); // Number from 0.0 to 1.0
            photoshop.animate(0); // Number from 0.0 to 1.0    
            Illustrator.animate(0); // Number from 0.0 to 1.0
        }

    });

    let sw_works = new Swiper('.sw-works', {
        loop: true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        effect: "fade",
        navigation: {
            nextEl: ".sw-works-next",
            prevEl: ".sw-works-prev",
        },
        pagination: {
            el: ".sw-works-pg",
            type: "fraction",
        },
    });

});