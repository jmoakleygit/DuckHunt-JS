import Game from './src/modules/Game';

document.addEventListener('DOMContentLoaded', function() {

  let game = new Game({
    spritesheet: 'sprites.json'
  }).load();

  window.__vafmhGame = game;

}, false);

document.addEventListener('vafmh_game_over', function(e) {
  try {
    window.parent.postMessage({
      type: 'VAFMH_GAME_OVER',
      game: 'duck-hunt',
      score: e.detail.score,
      accuracy: e.detail.accuracy
    }, '*');
  } catch(err) {}
});