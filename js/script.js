$(document).ready(function () {
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
            CSS.animate(0.86); // Number from 0.0 to 1.0
            HTML.animate(0.84); // Number from 0.0 to 1.0
            photoshop.animate(0.85); // Number from 0.0 to 1.0    
            Illustrator.animate(0.75); // Number from 0.0 to 1.0
        }else {
            JavaScript.animate(0); // Number from 0.0 to 1.0
            jQuery.animate(0); // Number from 0.0 to 1.0
            CSS.animate(0); // Number from 0.0 to 1.0
            HTML.animate(0); // Number from 0.0 to 1.0
            photoshop.animate(0); // Number from 0.0 to 1.0    
            Illustrator.animate(0); // Number from 0.0 to 1.0
        }

    });

});