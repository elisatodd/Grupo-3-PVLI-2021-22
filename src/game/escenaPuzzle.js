/**
 * Intentando hacer una escena
 * @extends Escena
 */
import Escena from './escena.js'

export default class EscenaPuzzle extends Escena {

  sceneToLoad = '';

  constructor(data) {
    super(data);
    {
    };
  }


  create() {
    super.create();
  }

  //método virtual
  ResolvePuzzle() {

  }


  /**
   * Guarda los datos correspondientes al puzle (tiempo, puntos) y se añade la musica de ganar el puzle
   * @param {Scene} puzzle escena del puzle
   */
  LoadScene(puzzle) {
    if (!puzzle) puzzle = this;
    puzzle.gameManager.saveTime(puzzle.timedEvent.delay - puzzle.timedEvent.getElapsed());
    puzzle.timedEvent.remove(false); // cancelo el timer anterior
    puzzle.gameManager.savePoints();

    // Efecto de sonido
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
