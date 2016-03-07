"use strict";
var app = document.querySelector('#app');
window.addEventListener('WebComponentsReady', function() {
  page.base('/ep10');
  page('/', home);
  page('/frobules', frobules);
  page('/smurf', smurf);

  page({hashbang: true});
});

function home() {
  console.log('home');
  app.pageValue = 'home';
}

function frobules() {
  console.log('frob');
  app.pageValue = 'frobules';
}

function smurf() {
  console.log('smurf');
  app.pageValue = 'smurf';
}
