/**
 * Escena de la casa
 * @extends Phaser.Scene
 */

 import EscenaJuego from "../escenaJuego.js"
 import OBJETO from "../Objects/objeto.js"; 

  export default class Casa extends EscenaJuego {  

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'casa' });
      {
      
      };
      this.arrows = [true, false, false, false];
      this.arrowsDirs = ['plaza', false, false, false];
    }

    preload(){
      this._wallpaper = {name: 'casa', route: './assets/images/pueblo.jpg'};
      this.loadImage(this._wallpaper);

      this.AddCharacter(new OBJETO('./assets/images/primo.png', 600, this.cameras.main.height - 250, 2.15, 'primo', this));
      this.AddObject(new OBJETO('./assets/images/carta.png', 150, this.cameras.main.height - 70, 7.5, 'carta', this));
      this.AddObject(new OBJETO('./assets/images/sombrero.png', 250, this.cameras.main.height - 400, 6, 'sombrero', this));
      this.loadObjects(this.objects);
      this.loadObjects(this.characters);

      this.createArrows();
      this.loadArrows();
    }

    create(){
      this._wallpaper = this.spawnWallpaper(this._wallpaper);
      
      this.assignArrows();
      this.spawnArrows();

      this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
      this.spawnObjects(this.objects);
      this.assignObjects(this.characters, 'cargarDialogo');
      this.spawnObjects(this.characters);
      
      console.log("Escena Casa");
    }

    moveToInv(obj){
      obj.image.destroy();
      let x = 725;
      let y = this.gameManager.getInventoryPosition();
      obj.pos = {x, y};
      this.spawnObjects([obj]);
    }
  }