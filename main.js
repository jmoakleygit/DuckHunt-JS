import Game from './src/modules/Game';

document.addEventListener('DOMContentLoaded', function() {
  let game = new Game({
    spritesheet: 'sprites.json'
  });
  window.__gameInstance = game;
  game.load();
});
