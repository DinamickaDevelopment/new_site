$(document).ready(() => {


    const resizeFunc = () => {

        let w, h;
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
        })

        $('.small-tab').css({
            height: h / 2.6 + 'px'
        })

        $('.big-tab').css({
            height: ((h / 2.6) * 2) + 'px'
        })

        $('.slider-track').css({
            paddingRight: $('.slider-thumb').width()
        })


    }

    resizeFunc();
    window.addEventListener('resize', (e) => {
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
    })

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

    // page scroll 
    $('#pagepiling').pagepiling({
        anchors: ['#1', '#2', '#3', '#4', '#5'],
        navigation: false,
        afterRender: () => {



            // $('.team-slider__content').css({
            //     display: 'block'
            // })

        }, 
        afterLoad: (hash, i) => {

            if (i == 4) {
                
                $('.team-overlay').fadeIn(300);
                $('.team-slider__content')
                .slick('slickGoTo', 0);
                $('.team-slider__content')
                .fadeIn(300)
                .css({opacity: '1!important'})
    
            } 

            if (i == 5) {
                 $('.clients-slider__content')
                // .slick('slickGoTo', 0) 
                 .fadeIn(300)
                 .css({opacity: '1!important'})
                 $('.slider-overlay')
                 .fadeIn(300); 
            }
        }, 
        onLeave: (old, next, dir) => { 
   

            if (old == 4) {
            $('.team-slider__content')
                .fadeOut(300);
            }
            $('.team-overlay').fadeOut(300);

            if (old == 5) {
                $('.slider-overlay')
                 .fadeOut(300);      
            }
        }

    });

    let hash = window.location.hash;
    hash = hash.replace('#', '');
    if (hash != '') {
        $.fn.pagepiling.moveTo(hash);
    }





    // team slider
    let slider = new Slider(6, 'team-slider-controls')
    slider.init();


    $('.slider-thumb').css({
        width: parseInt(100 / 6) + '%'
    });

    $('.slider-track').css({
        paddingRight: $('.slider-thumb').width()
    });

    $('.scroll-down-btn').on('click', () => {
        window.location.hash = '#2'
    });


})


class Slider {
    constructor(steps, elem) {

        this.steps = steps;
        this.elem = elem;
        this.lastStep = 1;
        this.currentStep = 1;
        this.slideControls = {}
        this.animationCallback = this.animationCallback.bind(this)
    }

    init() {
        this.slideControls = new Dragdealer(this.elem, {
            steps: this.steps,
            snap: true,
            loose: true,
            dragStartCallback: () => {
                this.lastStep = this.slideControls.getStep()[0];
            },
            dragStopCallback: () => {
                this.currentStep = this.slideControls.getStep()[0];
            },
            animationCallback: this.animationCallback
        });

    }

    animationCallback() {

        let self = this.slideControls;
        if (typeof self.getStep != 'undefined') {
            let step = self.getStep()[0];
            $('.slider-stats').text(`${step}/6`);

            if (step != this.currentStep) {
                this.changeSlide(step, this.currentStep)
            }
        }
    }

    changeSlide(nextStep) {
        $('.team-slider__content').slick('slickGoTo', nextStep - 1);
    }

}