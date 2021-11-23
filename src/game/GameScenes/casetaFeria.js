/**
 * Escena de la caseta de feria
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import OBJETO from "../../ArchivosIniciales/objeto.js";
 import GAMEMANAGER from "../../ArchivosIniciales/gameManager.js";

  export default class CasetaFe extends EscenaJuego {
    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'carpadecirco' });
      {
  
      };
      this.arrows = [true, false, false, false];  
    }
  
    preload(){
      this._wallpaper = {name: 'caseta ', route: './assets/images/carpadecirco.jpg'};
      this.loadImage(this._wallpaper);

      this.AddCharacter(new OBJETO('./assets/images/ninio.png', 200, this.cameras.main.height - 200, 1, 'ninio', this));
      this.AddCharacter(new OBJETO('./assets/images/forzudo.png', 200, this.cameras.main.height - 200, 1, 'forzudo', this));
      this.loadObjects(this.characters);

      this.createArrows();
      this.loadArrows();
    }
  
    create(){
      this._wallpaper = this.spawnWallpaper(this._wallpaper);
       
      this.spawnObjects(this.characters);
      this.assignObjects(this.objects);
      
      this.spawnArrows();
  
      console.log("Escena Caseta");
    }
  
  }