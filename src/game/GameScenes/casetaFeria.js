/**
 * Escena de la caseta de feria
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  import NPCItem from "../Objects/NPCItem.js";
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
      this._wallpaper = {name: 'caseta ', route: './assets/images/pueblo.jpg'};
      this.loadImage(this._wallpaper);

      if (this.first){
        this.AddCharacter(new NPCItem('./assets/images/ninofinal.png', 550, this.cameras.main.height - 300, 3, 'ninio', this, null, "No tengo dinero :(", "Gracias!! jeje", 'moneda' ));
        this.AddCharacter(new NPC('./assets/images/forzudofinal.png', 250, this.cameras.main.height - 200, 2.5, 'forzudo', this,  null, "Soy muy fuerte pero no muy listo \n ¿me ayudas?", "Gracias era muy dificil para mi" ));
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