/**
 * Escena de la calle
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";

 import NPC from "../Objects/NPC.js";
 import NPCItem from '../Objects/NPCItem.js';
 
 export default class Calle extends EscenaJuego {
  
  first = true;

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'calle' });
    {

    };
    this.arrows = [true, true, false, true];
    this.arrowsDirs = ['mercado', 'plaza', false, 'sombrereria'];
  }

  preload(){
    this._wallpaper = {name: 'plaza', route: './assets/images/pueblo.jpg'};
    this.loadImage(this._wallpaper);

    if (this.first){
      this.AddObject(new Item('./assets/images/flor.png', 500, this.cameras.main.height - 70, 8, 'flor', this));
      this.AddCharacter(new NPCItem('./assets/images/senorafinal.png', 200, this.cameras.main.height - 200, 3, 'mujer', this, null, "Dame un pescado", "Gracias, te quiero", 'pez'));
    }

    this.loadObjects(this.objects);
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

      this.assignObjects(this.objects, 'moveToInventory');
      this.assignObjects(this.characters, 'cargarDialogo');
      
      this.first = false;

    }
    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);

   
    console.log("Escena Calle");
  }
}