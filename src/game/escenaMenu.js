/**
 * Intentando hacer una escena
 * @extends escena
 */
import escena from './escena.js'

export default class escenaMenu extends escena {



  constructor() {


    super({ key: 'menuScene' });
    {
    };

  }


  preload() {
    //carga el archivo de wallpaper
    this.loadImage('wallpaper', '../assets/images/pueblo.jpg');
    this.loadImage('logo', '../arte/Logokiwi.png');

  }

  create() {
    this._wallpaper = this.spawnWallpaper('wallpaper');
    let setPosition = {x: this.cameras.main.width / 2, y: this.cameras.main.height / 2}
    let logo = this.addBottom('logo', setPosition, 2, this.metodExample);
  }

  addBottom(nameImage, position, scaleProportion, functionality) {

    let container = super.loadImage(nameImage, position, scaleProportion);    
    container.setInteractive();
    container.on('pointerdown', () => functionality);

    return container;

  }

  metodExample()
  {
    console.log("llamado el botón");
  }
}

