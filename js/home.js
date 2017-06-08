$(document).ready(() => {

    const resizeFunc = () => {
        $('.homepage__content_tab').css({
            height: window.innerHeight + 'px', 
            width: window.innerWidth - 250 + 'px'
        })

        $('.small-tab').css({
            height: window.innerHeight / 2.6 + 'px'
        })

        $('.big-tab').css({
            height: ((window.innerHeight / 2.6)*2) + 'px'
        })
    } 

    resizeFunc(); 
    window.addEventListener('resize', (e) => {
        resizeFunc(); 
    }) 

    $(document).ready(function() {
	    $('#pagepiling').pagepiling({
            anchors: ['#1', '#2', '#3', '#4'], 
            navigation: false
        });
    });

    $('.scroll-down-btn').on('click', () => {
        window.location.hash = '#2'
    })
  
})
