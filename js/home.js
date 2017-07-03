'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {

    $('body').fadeIn(500); 

    var resizeFunc = function resizeFunc() {

        var w = void 0,
            h = void 0;
        if (window.innerHeight > 650) {

            h = window.innerHeight;
        } else {
            h = 650;
        }

        if (window.innerWidth > 767) {
            w = window.innerWidth;
        } else {
            w = 767;
        }

        $('.homepage__content_tab').css({
            height: h + 'px',
            width: w - 250 + 'px'
        });

        $('.small-tab').css({
            height: h / 2.6 + 'px'
        });

        $('.big-tab').css({
            height: h / 2.6 * 2 + 'px'
        });

        $('.slider-track').css({
            paddingRight: $('.slider-thumb').width()
        }); 

        $('.team-slider__container').css({
            width: (window.innerWidth - 225) + 'px', 
            height: h / 2 + 'px'
        })


        var slider_w = window.innerHeight > 1400 ? (window.innerWidth - 225) * 0.7 : (window.innerWidth - 225) * 0.9

        $('.clients-slider__container').css({
            width: slider_w + 'px', 
            height: h / 2.5 + 'px'
        }) 

        $('.homepage__content-scroller').css({
            height: window.innerHeight + 'px'
        })
        // $('.clients-logos').css({
        //     marginTop:  h / 2 + 'px'
        // })
        // $('.clients-slider__navigation').css({
        //     top: (($('#slide').height()) - 20) + 'px'
        // })
    };


    window.addEventListener('resize', function (e) {
        resizeFunc();
    });

    $('.team-slider__content').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 200, 
        centerMode: false, 
        waitForAnimate: false
    });

    $('.clients-slider__content').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 250, 
        centerMode: true, 
        responsive: [{
            breakpoint: 1200, 
            settings: {
                slidesToShow: 1
            }
        }], 
        appendArrows: '.clients-slider__navigation', 
        prevArrow: '<div class="arrow arrow-left"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>', 
        nextArrow: '<div class="arrow arrow-right"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>'
    }); 

    $('.clients-slider__content').on('beforeChange', function(e, s, curr, next) {
        $('.clients-slider__stats').text(++next + '/' + '4')
    })


    resizeFunc();

    // navigation 
    $('.nav__main_home-options').find('li').on('click', function (e) {
        var t = $(this).attr('data-target');  
        $.fn.pagepiling.moveTo(t);
    }

    // page scroll 
    );$('#pagepiling').pagepiling({
        anchors: ['#1', '#2', '#3', '#4', '#5'],
        navigation: false, 
        normalScrollElements: ".clients-section"
    });

    // load corresponding site section based on hash 
    let hash = window.location.hash;
    hash = hash.replace('#', '');
    if (hash != '') {
        $.fn.pagepiling.moveTo(hash);
    }


    // team slider
    var slider = new Slider(6, 'team-slider-controls');
    slider.init();

    $('.slider-thumb').css({
        width: parseInt(100 / 6) + '%'
    });

    $('.slider-track').css({
        paddingRight: $('.slider-thumb').width()
    });

    $('.scroll-down-btn').on('click', function () {
        window.location.hash = '#2';
    });


    var el = new SimpleBar(document.getElementById('scroller')); 
    
}); 

var scrollCount = 0; 

// handle normal scroll to pagepiling switch 
$(window).on('wheel', function(e) {

    if (window.location.hash == '#5' && e.originalEvent.wheelDelta > 0 && 
    $('.simplebar-scroll-content').scrollTop() == 0 && scrollCount == 3) {
        window.location.hash = '#4'
        scrollcount = 0; 
    } else if (scrollCount < 3) {
        scrollCount++; 
    }
    
})




var Slider = function () {
    function Slider(steps, elem) {
        _classCallCheck(this, Slider);

        this.steps = steps;
        this.elem = elem;
        this.lastStep = 1;
        this.currentStep = 1;
        this.slideControls = {};
        this.animationCallback = this.animationCallback.bind(this);
    }

    _createClass(Slider, [{
        key: 'init',
        value: function init() {
            var _this = this;


            this.slideControls = new Dragdealer(this.elem, {
                steps: this.steps,
                snap: true,
                loose: true,
                dragStartCallback: function dragStartCallback() {
                    _this.lastStep = _this.slideControls.getStep()[0];
                },
                dragStopCallback: function dragStopCallback() {
                    _this.currentStep = _this.slideControls.getStep()[0];
                },
                animationCallback: this.animationCallback
            }); 

            //  $('.team-slider__content').on('afterChange', function(e, s, curr) {
            //     _this.slideControls.setStep(curr)
            // })
        }
    }, {
        key: 'animationCallback',
        value: function animationCallback() {

            var self = this.slideControls;
            if (typeof self.getStep != 'undefined') {
                var step = self.getStep()[0];
                $('.slider-stats').text(step + '/6');

                //if (step != this.currentStep) {
                    this.changeSlide(step, this.currentStep);
                //}
            }
        }
    }, {
        key: 'changeSlide',
        value: function changeSlide(nextStep, thisStep) {
            console.log(nextStep, thisStep)
            $('.team-slider__content').slick('slickGoTo', nextStep - 1);
        }
    }]);

    return Slider;
}();