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
  bpause;


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
      this.bpause = new OBJETO('./assets/images/botonpausa.png', 50, 50, 8, 'pause', this);
      this.pause = new OBJETO('./assets/images/wallpaperWeb.jpg', this.cameras.main.width/2 - 110, this.cameras.main.height/2, 1, 'text', this);
    }

    this.loadObjects(this.objects);
    this.loadObjects(this.characters);
    this.loadObjects([this.bpause]);
      this.loadObjects([this.pause]);


    this.createArrows();
    this.loadArrows();
  }

  create(){   
    this._wallpaper = this.spawnWallpaper(this._wallpaper);
     
    this.createGameManager(this.game, this);
    this.gameManager.loadElements();
    
    this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
      
    this.gameManager.points = this.game['gamePoints'].gamePoints;

    this.assignArrows();
    this.spawnArrows();

    if (this.first){

      this.assignObjects(this.objects, 'moveToInventory');
      this.assignObjects(this.characters, 'cargarDialogo');
       
      this.bpause.assignFunctionality('pause');
      this.pause.assignFunctionality('deletePause');

      this.first = false;

    }
    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);
    this.spawnObjects([this.bpause]);


   
    console.log("Escena Calle");
  }
}