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

  //método virtual
  ResolvePuzzle()
  {}

  LoadScene()
  {
    this.gameManager.saveTime(this.timedEvent.delay - this.timedEvent.getElapsed());
    this.gameManager.savePoints();
    this.timedEvent.remove(false); // cancelo el timer anterior
    this.scene.start(this.sceneToLoad);
  }
}
