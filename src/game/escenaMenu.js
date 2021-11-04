/**
 * Intentando hacer una escena
 * @extends Escena
 */
import Escena from './escena.js'

export default class EscenaMenu extends Escena {



  constructor() {


    super({ key: 'MenuScene' });
    {
    };

  }


  /*preload() {
    //carga el archivo de wallpaper
    this.loadImage('wallpaper', '../assets/images/pueblo.jpg');
    this.loadImage('logo', '../arte/Logokiwi.png');

  }

 create() {
    this._wallpaper = this.spawnWallpaper('wallpaper');
    let setPosition = {x: this.cameras.main.width / 2, y: this.cameras.main.height / 2}
    let logo = this.addBottom('logo', setPosition, 2, this.metodExample);
  }
  metodExample()
  {
    console.log("llamado el botón");
  }*/

  addBottom(info) {
    //debemos usar estos nombres al crear el objeto
    let container = super.spawnImage(info.name, info.position, info.align, info.scaleProportion);    
    container.setInteractive();
    container.on('pointerdown', () =>  info.functionality());

    return container;

  }

  
}

