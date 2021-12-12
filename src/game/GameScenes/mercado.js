/**
 * Escena de la mercado
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";

 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js"; 
  import OBJETO from "../Objects/objeto.js";


 export default class Mercado extends EscenaJuego {

  first = true;
  pause;
  bpause;


   constructor(){
     // Nombre de la escena para el SceneManager
     super({ key: 'mercado' });
     {
     };

     this.arrows = [false, true, false, true];
     this.arrowsDirs = [false, 'calle', false, 'parque'];

   }
 
  preload(){

    this._wallpaper = {name: 'mercado', route: './assets/images/fondoMercado.jpg'};
    this.loadImage(this._wallpaper);


    if (this.first){

      this.AddCharacter(new NPC('./assets/images/carnicero.png', 350, this.cameras.main.height - 350, 0.75, 'carnicera', this, null, "¿Quieres comprar algo?", ""));
      this.AddObject(new Item('./assets/images/pez.png', 600, this.cameras.main.height - 200, 8, 'pez', this)); 
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

      this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
      this.assignObjects(this.characters, 'cargarDialogo');
      
      this.bpause.assignFunctionality('pause');
      this.pause.assignFunctionality('deletePause');

      this.first = false;
      
    }
    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);
    this.spawnObjects([this.bpause]);


    console.log("Escena Mercado");
  }
}