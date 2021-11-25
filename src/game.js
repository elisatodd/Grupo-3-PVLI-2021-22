
import GameZone from './ArchivosIniciales/GameScene.js';
import Puzzle from './ArchivosIniciales/PuzzleScene.js';
import PuzzleInput from './game/puzzleInput.js';
//import EscenaMenu from './game/escenaMenu.js';
import EscenaJuego from './game/escenaJuego.js';
import Puzzle1 from './game/Pruebas/puzzlePrueba.js';
import Casa from './game/GameScenes/casa.js'
import Calle from './game/GameScenes/calle.js';
import Plaza from './game/GameScenes/plaza.js';
import Bosque from './game/GameScenes/bosque.js';
import Feria from './game/GameScenes/feria.js';
import CasetaFeria from './game/GameScenes/casetaFeria.js';
import CasaEspejos from './game/GameScenes/casaEspejos.js';
import Sombrereria from './game/GameScenes/sombrereria.js';
import Mercado from './game/GameScenes/mercado.js';
import Parque from './game/GameScenes/parque.js';


import Datos1 from'./game/Pruebas/pasoDeDatos1.js';
import Datos2 from'./game/Pruebas/pasoDeDatos2.js';
import Telefono from './game/PuzzleScenes/telefono.js';


let config = {
  type: Phaser.AUTO,
  // Configuracion del cuadro de juego
  width: 800,
  height: 600,
  scale: {
    // mode: Phaser.Scale.FIT,  
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  scene: [Casa, Plaza, Calle, Bosque, Feria, CasetaFeria, CasaEspejos, Sombrereria, Mercado, Parque, Telefono] // Escenas que requiere el juego
  };



new Phaser.Game(config);

