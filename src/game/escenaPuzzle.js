/**
 * Intentando hacer una escena
 * @extends Escena
 */
import Escena from './escena.js'

export default class EscenaPuzzle extends Escena {

  // Escena que debe salir cuando acabe el puzzle
  sceneToLoad = '';

  constructor(data) {
    super(data);
    {
    };
  }


  create() {
    super.create();
  }

  // Método virtual
  ResolvePuzzle() {
  }

  /**
   * Llamado cuando se completa el puzzle.
   * Guarda los datos correspondientes al puzzle (tiempo, puntos) y se añade la musica de ganar el puzzle.
   * Cambia de escena a la que estaba el jugador antes de hacer el puzzle.
   * @param {Scene} puzzle escena del puzzle
   */
  LoadScene(puzzle) {
    if (!puzzle) puzzle = this;

    puzzle.gameManager.saveTime(puzzle.timedEvent.delay - puzzle.timedEvent.getElapsed());
    puzzle.timedEvent.remove(false); // cancelo el timer anterior
    puzzle.gameManager.savePoints();

    // Efecto de sonido al resolver el puzzle
    const config = {
      mute: false,
      volume: 0.1,
      loop: false,
      delay: 0,
    };
    let sfx = puzzle.scene.scene.sound.add("winPuzzle", config);
    sfx.play();

    puzzle.scene.start(puzzle.sceneToLoad);
  }
}
