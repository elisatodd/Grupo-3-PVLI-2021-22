
import GameZone from './GameScene.js';
import Puzzle from './PuzzleScene.js';

let config = {
  type: Phaser.AUTO,
  // Configuracion del cuadro de juego
  width: 800,
  height: 600,
  scale: {
    // mode: Phaser.Scale.FIT,  
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
},
  scene: [GameZone, Puzzle] // Escenas que requiere el juego
  };



new Phaser.Game(config);

