//nav
var open = document.getElementById('hamburger');
var changeIcon = true;

open.addEventListener("click", function(){

    var overlay = document.querySelector('.overlay');
    var nav = document.querySelector('nav');
    var icon = document.querySelector('.menu-toggle i');

    overlay.classList.toggle("menu-open");
    nav.classList.toggle("menu-open");

    if (changeIcon) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");

        changeIcon = false;
    }
    else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
        changeIcon = true;
    }
});

//Parallax https://www.youtube.com/watch?v=dqzZ0SbSgHY
//document.addEventListener("mousemove" , parallax);
/*function parallax(e){
    this.querySelectorAll('.color').forEach(Layer => {
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)
        const y = (window.innerHeight - e.pageY*speed)

        layer.style.transform = `translateX(${x}px) translateY(${x}px)`
    })
};*/
function paralllax(element, distance, speed){
    const item = document.querySelector(element);
    item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function(){
    parallax(".color", window.scrollY,0.5);
});

// swiper
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

// About - https://www.youtube.com/watch?v=GWLB00EvhE8&t=23s
// Split text into letters
const text = document.querySelector('.text');
text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>");

const animation = anime.timeline({
    targets : '.text span',
    easing : 'easeInOutExpo',
    loop : true,
});

animation
    .add({
        rotate : function(){
            return anime.random(-360,360)
        },
        translateX : function(){
            return anime.random(-100,100)
        },
        translateY : function(){
            return anime.random(-100,100)
        },
        duration : 1000,
        delay : anime.stagger(5),
    })

    .add({
        rotate : 0,
        translateX : 0,
        translateY : 0,
        duration : 2000,
        delay : anime.stagger(10),
    });