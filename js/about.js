/*
TILT
*/
$('.logo').tilt({
    scale: 1.1,
    maxTilt: 5
})

$('.nav-tab').tilt({
    scale: 1.1,
    maxTilt: 5
})

/*
BAFFLE
*/
const h1 = baffle(".about-text .description");
h1.set({
  characters: '▒██ ▓░▓▒< █>░/▒ ░▒░ █░/█> >▓█> ▓▒█ █▓/░ █░<░',
  speed: 120
});
h1.start();
h1.reveal(2000, 1000);

/*
PARALLAX
*/

var textParallax = document.getElementById('scene1');
var parallaxInstance1 = new Parallax(textParallax);

particlesJS.load('particles-js', 'json/particles2.json', function() {
  console.log('callback - particles.js config loaded');
});
