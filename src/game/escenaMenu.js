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
    let setScale = {x: this.cameras.main.width / 2, y: this.cameras.main.height / 2}
      let logo = this.spawnImage('logo', setScale, 2);
  }

  addBottom(position, image, text) {

  }
}

