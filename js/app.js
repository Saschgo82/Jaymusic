$(document).ready(function(){
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=550){
            $(".sticky").addClass("stickyadd");
        }else{
            $(".sticky").removeClass("stickyadd");
        }
    })
});

    var swiper = new Swiper('.swiper-container', {
    effect: 'cube',
    grabCursor: true,
    cubeEffect: {
     shadow: true,
     slideShadows: true,
     shadowOffset: 20,
     shadowScale: 0.94,
},
pagination: {
    el: '.swiper-pagination',
},
});