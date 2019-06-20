let boxes = document.querySelectorAll('.hover-polygon');

boxes.forEach((box) => {
  box.addEventListener('mouseenter', (event) => {
    anime.remove(box.querySelector('.reveal-source'));
    anime.remove(box.querySelector('.reveal-text'));
    anime({
      targets: box.querySelector('.reveal-source'),
      easing: 'easeOutExpo',
      scale: 30,
      duration: 1000,
      delay: 200,
    })
    anime({
      targets: box.querySelector('.reveal-text'),
      opacity: 1,
      translateY: 0,
      duration: 1200,
      delay: 200,
    })
  })
  box.addEventListener('mouseleave',(event) => {
    anime.remove(box.querySelector('.reveal-source'));
    anime.remove(box.querySelector('.reveal-text'));
    anime({
      targets: box.querySelector('.reveal-source'),
      easing: 'easeOutExpo',
      scale: 1,
      duration: 1000,
      delay: 100,
    })
    anime({
      targets: box.querySelector('.reveal-text'),
      opacity: 0,
      translateY: 10,
      duration: 1200,
      delay: 100,
    })
  })
});

/*
SCROLLMAGIC
*/
var controller = new ScrollMagic.Controller();

$(".project").each(function(){

  var picOverlay = $(this).find(".overlay");
  var imgTitle = $(this).find(".img-title");
  var smallTitle = $(this).find(".img-title p");
  var title = $(this).find("img-title h1");

  var animateIn = new TimelineMax();


  animateIn
  .fromTo(picOverlay, 2, {skewX: 30, scale: 2.2}, {skewX: 0, xPercent: 100, transformOrigin: "0% 100%", ease: Power4.easeOut})
  .from(smallTitle, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=1.1")
  .from(title, 0.3, {autoAlpha: 0, y: 30, ease: Power4.easeOut}, "-=1.1")


  // SCROLLMAGIC SCENE

  var scene = new ScrollMagic.Scene({
    triggerElement: this,
  })

  .setTween(animateIn).addTo(controller);

});

/*
PARALLAX
*/

var parallaxScene1 = document.getElementById('scene1');
var parallaxScene2 = document.getElementById('scene2');
var parallaxScene3 = document.getElementById('scene3');
var parallaxScene4 = document.getElementById('scene4');
var parallaxInstance1 = new Parallax(parallaxScene1);
var parallaxInstance2 = new Parallax(parallaxScene2);
var parallaxInstance3 = new Parallax(parallaxScene3);
var parallaxInstance4 = new Parallax(parallaxScene4);

// var parallaxTitle = document.getElementById('title-parallax');
// var parallaxInstanceTitle = new Parallax(parallaxTitle);

/*
TILT JS
*/

$('.logo').tilt({
    scale: 1.1,
    maxTilt: 5
});
$('.nav-tab').tilt({
    scale: 1.1,
    maxTilt: 5
});
