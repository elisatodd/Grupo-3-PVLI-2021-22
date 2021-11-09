
import GameZone from './ArchivosIniciales/GameScene.js';
import Puzzle from './ArchivosIniciales/PuzzleScene.js';
import PuzzleInput from './game/puzzleInput.js';
import EscenaMenu from './game/escenaMenu.js';
import EscenaJuego from './game/escenaJuego.js';
import Puzzle1 from './game/Pruebas/puzzlePrueba.js';


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

