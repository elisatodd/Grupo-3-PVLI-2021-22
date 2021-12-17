
import GameZone from './ArchivosIniciales/GameScene.js';
import Puzzle from './ArchivosIniciales/PuzzleScene.js';
import PuzzleInput from './game/puzzleInput.js';
import EscenaMenu from './game/escenaMenu.js';
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

import MenuPrincipal from './game/MenuScenes/menuprincipal.js';
import MenuPausa from './game/MenuScenes/menupausa.js';
import EscenaInicio from './game/MenuScenes/escenaInicio.js';
import EscenaFinalMalo from './game/MenuScenes/escenaFinalMal.js'
import EscenaFinalBueno from './game/MenuScenes/escenaFinalBueno.js'
import EscenaFinalNormal from './game/MenuScenes/escenaFinalNormal.js'
import Boot from './boot.js';

//import Datos1 from'./game/Pruebas/pasoDeDatos1.js';
//import Datos2 from'./game/Pruebas/pasoDeDatos2.js';



import NumerosRasgados from './game/PuzzleScenes/NumerosRasgados.js';
import CodigoIndscreto from './game/PuzzleScenes/CodigoIndiscreto.js';
import CartaPuzle from './game/PuzzleScenes/CartaPuzle.js';
import PuzzleBanderines from './game/PuzzleScenes/puzzleBanderines.js'
import PuzzleTopoz from './game/PuzzleScenes/puzzleTopoz.js'
import PuzzleCarniceria from './game/PuzzleScenes/puzzleCarniceria.js'
import PuzzleEspejos from './game/PuzzleScenes/puzleEspejos.js'
import PuzzleCandado from './game/PuzzleScenes/puzzleCandado.js'
import PuzzleCafeteria from './game/PuzzleScenes/puzleCafeteria.js'

//import PuzzleClick from './game/puzzleClick.js';



let config = {
  type: Phaser.AUTO,
  // Configuracion del cuadro de juego
  width: 1550,
  height: 825,
  scale: {
    // mode: Phaser.Scale.FIT,  
    autoCenter: Phaser.Scale.CENTER_HORIZONTALLY
  },
  scene: [Boot, MenuPrincipal, EscenaInicio,EscenaFinalMalo,EscenaFinalBueno,EscenaFinalNormal, Casa, Plaza, Calle, Bosque, Feria, CasetaFeria, CasaEspejos, Sombrereria, Mercado, Parque, 
    NumerosRasgados, PuzzleCafeteria, PuzzleBanderines, PuzzleTopoz ,PuzzleCandado ,CodigoIndscreto, CartaPuzle, PuzzleEspejos, PuzzleCarniceria, MenuPausa] // Escenas que requiere el juego
  };



new Phaser.Game(config);





