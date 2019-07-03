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
