// // AJAX RELOADER
// jQuery(document).ready(function($) {
//     Barba.Dispatcher.on('transitionCompleted', function (currentStatus, oldStatus, container) {

/*
TILT
*/
$('.img-tilt').tilt({
  scale: 1.1,
  maxTilt: 5,
})
$('.gallery-logo').tilt({
    scale: 1.1,
    maxTilt: 5
});

$('.nav-tab').tilt({
    scale: 1.1,
    maxTilt: 5
});

/*
BAFFLE
*/
const h2 = baffle(".works-container h4");
h2.set({
  characters: '▒██ ▓░▓▒< █>░/▒ ░▒░ █░/█> >▓█> ▓▒█ █▓/░ █░<░',
  speed: 120
});
h2.start();
h2.reveal(2000, 1000);

// });
// });
