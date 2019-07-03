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
const h1 = baffle(".description h1");
h1.set({
  characters: '▒██ ▓░▓▒< █>░/▒ ░▒░ █░/█> >▓█> ▓▒█ █▓/░ █░<░',
  speed: 120
});
h1.start();
h1.reveal(2000, 1000);

/*
PARALLAX
*/

var textParallax1 = document.getElementById('scene1');
var parallaxInstance1 = new Parallax(textParallax1);
var textParallax2 = document.getElementById('scene2');
var parallaxInstance2 = new Parallax(textParallax2);

// particlesJS.load('particles-js', 'json/particles3.json', function() {
//   console.log('callback - particles.js config loaded');
// });
