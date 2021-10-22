
import GameZone from './GameScene.js';
import Puzzle from './PuzzleScene.js';

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  autocenter: Phaser.Scale.CENTER_HORIZONTALLY,
  scene: [GameZone, Puzzle]
  };



new Phaser.Game(config);


/*
Esto es una forma directa de inicializar juego pero es más común con un archivo config
var game = new Phaser.Game(
  {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update
  }
}
);*/

/*import GameScene from "./GameScene";*/




/*function preload ()
{
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
}

function create ()
{
  this.add.image(400, 300, 'bomb');
  this.add.image(400, 400, 'star');
  this.add.text(0, 0, 'Creo que por fin funciona.jpg')
}

function update ()
{
}*/
