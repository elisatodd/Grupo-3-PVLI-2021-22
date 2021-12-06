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
    this.scene.start(this.sceneToLoad);
  }
}
