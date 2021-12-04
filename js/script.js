window.onload = function () {
    AOS.init();
}

$(document).ready(function () {
         // 모달창 기능

    // 1 : .modal을 찾아서 웹브라우저에 보관한다.
    let modal = $('.modal');

    // 2 : .modal-cont를 찾아서 웹브라우저에 보관한다.
    let modal_cont = $('.modal-cont');

    // 3 : .modal-close를 찾아서 웹브라우저에 보관한다.
    let modal_close = $('.modal-close');

    // 3-1 : .modal-show를 찾아서 웹브라우저에 보관한다.
    let modal_show = $('.modal-show');

    // 4 : .modal을 display:none 안 보여요.
    // modal.fadeIn();

    // 5 : .modal_close를 마우스로 클릭하면 사라진다.
    modal_close.click(function () {
        modal.fadeOut();
    });

    // 6 : .modal을 마우스로 클릭하면 사라진다.
    modal.click(function () {
        modal.fadeOut();
    });

    // 7 : .modal-cont를 마우스로 클릭하면 그냥 있어라.
    modal_cont.click(function (e) {
        e.stopPropagation();
    });

    // 8 : .modal=show를 마우스로 클릭하면 보인다.
    // 8-1 : 아주 중요합니다. a 태그라면 주의합니다!!!
    modal_show.click(function (e) {
        // href를 막아야 합니다.
        e.preventDefault();
        modal.fadeIn();
    });

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