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
    })
    anime({
      targets: box.querySelector('.reveal-text'),
      opacity: 1,
      translateY: 0,
      duration: 1200,
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
    })
    anime({
      targets: box.querySelector('.reveal-text'),
      opacity: 0,
      translateY: 10,
      duration: 1200,
    })
  })
})
particlesJS.load('particles-js', 'js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});
