/**
 * Escena de la caseta de feria
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  export default class CasetaFeria extends EscenaJuego {
    
    first = true;

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

      if (this.first){
        this.AddCharacter(new NPC('./assets/images/ninio.png', 550, this.cameras.main.height - 300, 6, 'ninio', this));
        this.AddCharacter(new NPC('./assets/images/forzudo.png', 250, this.cameras.main.height - 200, 7, 'forzudo', this));
        this.loadObjects(this.characters);
      }

      this.createArrows();
      this.loadArrows();
    }
  
    create(){
      this._wallpaper = this.spawnWallpaper(this._wallpaper);

      this.createGameManager(this.game, this);
      this.gameManager.loadElements();
      
      this.assignArrows();
      this.spawnArrows();

      if (this.first){
        this.assignObjects(this.characters, 'cargarDialogo');
        this.first = false;
      }
      this.spawnObjects(this.characters);
  
      console.log("Escena Caseta");
    }
  
  }