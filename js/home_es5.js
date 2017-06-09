'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {

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
    };

    resizeFunc();
    window.addEventListener('resize', function (e) {
        resizeFunc();
    });

    $('.team-slider__content').slick({
        slidesToScroll: 1,
        slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 250
    });
    $('.team-slider__content').css({
        opacity: '0!important'
    }

    // $('.clients-slider__content').slick({
    //     slidesToScroll: 1,
    //     slidesToShow: 2,
    //     autoplay: true,
    //     autoplaySpeed: 7000,
    //     speed: 300
    // })
    // $('.team-slider__content').css({
    //     opacity: '0!important'
    // })

    );$('.nav__main_home-options').find('li').on('click', function (e) {
        var t = $(this).attr('data-target'); 
        $.fn.pagepiling.moveTo(t);
    }

    // page scroll 
    );$('#pagepiling').pagepiling({
        anchors: ['#1', '#2', '#3', '#4', '#5'],
        navigation: false,
        afterRender: function afterRender() {

            // $('.team-slider__content').css({
            //     display: 'block'
            // })

        },
        afterLoad: function afterLoad(hash, i) {

            if (i == 4) {

                $('.team-overlay').fadeIn(300);
                $('.team-slider__content').slick('slickGoTo', 0);
                $('.team-slider__content').fadeIn(300).css({ opacity: '1!important' });
            } else {
                $('.team-overlay').fadeOut(300);
                $('.team-slider__content').fadeOut();
            }

            if (i == 5) {
                $('.clients-slider__content'
                // .slick('slickGoTo', 0) 
                ).fadeIn(300).css({ opacity: '1!important' });
                $('.slider-overlay').fadeIn(300);
            } else {
                $('.slider-overlay').fadeOut(300);
            }
        },
        onLeave: function onLeave(old, next, dir) {

            if (old == 4) {
                $('.team-slider__content').fadeOut(300);
            }
            $('.team-overlay').fadeOut(300);

            if (old == 5) {
                $('.slider-overlay').fadeOut(300);
            }
        }

    });

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
});

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
        }
    }, {
        key: 'animationCallback',
        value: function animationCallback() {

            var self = this.slideControls;
            if (typeof self.getStep != 'undefined') {
                var step = self.getStep()[0];
                $('.slider-stats').text(step + '/6');

                if (step != this.currentStep) {
                    this.changeSlide(step, this.currentStep);
                }
            }
        }
    }, {
        key: 'changeSlide',
        value: function changeSlide(nextStep) {
            $('.team-slider__content').slick('slickGoTo', nextStep - 1);
        }
    }]);

    return Slider;
}();