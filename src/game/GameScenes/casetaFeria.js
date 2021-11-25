/**
 * Escena de la caseta de feria
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import OBJETO from "../Objects/objeto.js";

  export default class CasetaFeria extends EscenaJuego {
    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'casetaFeria' });
      {
  
      };
      this.arrows = [true, false, false, false];  
      this.arrowsDirs = ['feria', false, false, false];
    }
  
    preload(){
      this._wallpaper = {name: 'caseta ', route: './assets/images/carpadecirco.jpg'};
      this.loadImage(this._wallpaper);

      this.AddCharacter(new OBJETO('./assets/images/ninio.png', 550, this.cameras.main.height - 300, 6, 'ninio', this));
      this.AddCharacter(new OBJETO('./assets/images/forzudo.png', 250, this.cameras.main.height - 200, 7, 'forzudo', this));
      this.loadObjects(this.characters);

      this.createArrows();
      this.loadArrows();
    }
  
    create(){
      this._wallpaper = this.spawnWallpaper(this._wallpaper);

      this.assignArrows();
      this.spawnArrows();

      this.spawnObjects(this.characters);
      this.assignObjects(this.characters);
  
      console.log("Escena Caseta");
    }
  
  }