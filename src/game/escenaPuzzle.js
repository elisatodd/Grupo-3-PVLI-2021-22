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


  create()
  {
    super.create();
  }
  
  //método virtual
  ResolvePuzzle()
  {}

  LoadScene()
  {
    this.gameManager.saveTime(this.timedEvent.delay - this.timedEvent.getElapsed());
    this.timedEvent.remove(false); // cancelo el timer anterior
    this.gameManager.addPoints();
    this.gameManager.savePoints();

    // Efecto de sonido
    const config = {
      mute: false,
      volume: 0.1,
      loop: false,
      delay: 0,
    };
    let sfx = this.scene.scene.sound.add("winPuzzle", config);
    sfx.play();

    this.scene.start(this.sceneToLoad);
  }
}
