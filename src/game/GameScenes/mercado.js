/**
 * Escena de la mercado
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";

 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js"; 


 export default class Mercado extends EscenaJuego {

  first = true;
   constructor(){
     // Nombre de la escena para el SceneManager
     super({ key: 'mercado' });
     {
     };

     this.arrows = [false, true, false, true];
     this.arrowsDirs = [false, 'calle', false, 'parque'];

   }
 
   preload(){

     this._wallpaper = {name: 'mercado', route: './assets/images/pueblo.jpg'};
     this.loadImage(this._wallpaper);


     if (this.first){

      this.AddCharacter(new NPC('./assets/images/carnicero.png', 200, this.cameras.main.height - 200, 0.5, 'carnicera', this));
      this.AddObject(new Item('./assets/images/pez.png', 600, this.cameras.main.height - 200, 8, 'pez', this)); 
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

      this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
      this.assignObjects(this.characters, 'cargarDialogo');
      
      this.first = false;
      
    }
    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);

    console.log("Escena Mercado");
  }
}