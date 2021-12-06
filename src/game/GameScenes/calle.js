/**
 * Escena de la calle
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";

 import NPC from "../Objects/NPC.js";
 import NPCItem from '../Objects/NPCItem.js';
 import OBJETO from "../Objects/objeto.js";

 
 export default class Calle extends EscenaJuego {
  
  first = true;
  pause;

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'calle' });
    {

    };
    this.arrows = [true, true, false, true];
    this.arrowsDirs = ['mercado', 'plaza', false, 'sombrereria'];
  }

  preload(){
    this._wallpaper = {name: 'plaza', route: './assets/images/fondoCalle.jpg'};
    this.loadImage(this._wallpaper);

    if (this.first){
      this.AddObject(new Item('./assets/images/flor.png', 700, this.cameras.main.height - 70, 8, 'flor', this));
      this.AddCharacter(new NPCItem('./assets/images/mujerGato.png', 350, this.cameras.main.height - 300, 1, 'mujer', this, null, "Dame un pescado", "Gracias, te quiero", 'pez'));
      this.pause = new OBJETO('./assets/images/botonpausa.png', 50, 50, 8, 'pause', this);

    }

    this.loadObjects(this.objects);
    this.loadObjects(this.characters);
    this.loadObjects([this.pause]);


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
      this.pause.assignFunctionality('pause');

      this.first = false;

    }
    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);
    this.spawnObjects([this.pause]);


   
    console.log("Escena Calle");
  }
}