/**
 * Escena de la sombrereria
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";

 export default class Sombrereria extends EscenaJuego {

  first = true;
   constructor(){
     // Nombre de la escena para el SceneManager
     super({ key: 'sombrereria' });
     {
     };

     this.arrows = [false, false, true, false];
     this.arrowsDirs = [false, false, 'calle', false];

   }
 

   
   preload(){

     this._wallpaper = {name: 'sombrereria', route: './assets/images/sombrereria.jpg'};
     this.loadImage(this._wallpaper);
     
     if (this.first){

     this.AddCharacter(new NPC('./assets/images/clienta.png', 200, this.cameras.main.height - 200, 0.5, 'clienta', this));
     this.AddCharacter(new NPC('./assets/images/vendedora.png', 505, this.cameras.main.height - 200, 1, 'vendedora', this));
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
        this.assignObjects(this.characters, 'cargarDialogo');
        
        this.first = false;
        
      }
      this.spawnObjects(this.objects);
      this.spawnObjects(this.characters);
      
     
  }

}