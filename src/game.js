
import GameZone from './GameScene.js';
import Puzzle from './PuzzleScene.js';

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scale: {
    // mode: Phaser.Scale.FIT,  
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
},
  scene: [GameZone, Puzzle]
  };



new Phaser.Game(config);

