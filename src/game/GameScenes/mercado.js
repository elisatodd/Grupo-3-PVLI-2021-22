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
  timedEvent;

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
    
    this.timedEvent = this.time.addEvent({ delay: 1000, callback: endGame, callbackScope: this.gameManager, repeat: this.game['timeLeft'].time});

    this.assignArrows();
    this.spawnArrows();

    if (this.first){

      this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
      this.assignObjects(this.characters, 'cargarDialogo');
      this.pause.assignFunctionality('pause');

      this.first = false;
      
    }
    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);
    this.spawnObjects([this.pause]);


    console.log("Escena Mercado");
  }
}