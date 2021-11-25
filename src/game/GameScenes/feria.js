/**
 * Escena de la feria
 * @extends EscenaJuego
 */
 import EscenaJuego from '../escenaJuego.js';  
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
 export default class Feria extends EscenaJuego {

    first = true;
    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'feria' });
        {

        };
        this.arrows = [true, true, true, false];
        this.arrowsDirs = ['casaEspejos', 'casetaFeria', 'bosque', false];
    }

    preload(){
        this._wallpaper = {name: 'feria ', route: './assets/images/carpadecirco.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){

        this.AddCharacter(new NPC('./assets/images/cirquense.jpg', 200, this.cameras.main.height - 200, 7, 'cirquense', this));
        }
        this.loadObjects(this.characters);

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
      this.spawnObjects(this.objects);
      this.spawnObjects(this.characters);
      
     
    }
}