/**
 * Escena de la casa
 * @extends Phaser.Scene
 */

 import EscenaJuego from "../escenaJuego.js"
 import OBJETO from "../../ArchivosIniciales/objeto.js"; 

  export default class Casa extends EscenaJuego {  

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'casa' });
      {

      };
      this.arrows = [true, false, false, false];
    }

    preload(){
      this._wallpaper = {name: 'casa', route: './assets/images/pueblo.jpg'};
      this.loadImage(this._wallpaper);

      this.AddCharacter(new OBJETO('./assets/images/primo.png', 200, this.cameras.main.height - 200, 1, 'primo', this));
      this.AddObject(new OBJETO('./assets/images/carta.png', 550, this.cameras.main.height - 70, 7.5, 'carta', this));
      this.AddObject(new OBJETO('./assets/images/sombrero.png', 550, this.cameras.main.height - 70, 7.5, 'sombrero', this));
      this.loadObjects(this.objects);


      this.createArrows();
      this.loadArrows();
    }

    create(){
      this._wallpaper = this.spawnWallpaper(this._wallpaper);
      
      this.spawnObjects(this.objects);

      this.assignObjects(this.objects);
      
      this.spawnArrows();

      console.log("Escena Casa");
    }

  }