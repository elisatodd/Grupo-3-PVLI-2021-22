/**
 * Escena de la sombrereria
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  import NPCItem from "../Objects/NPCItem.js";

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

     this._wallpaper = {name: 'sombrereria', route: './assets/images/pueblo.jpg'};
     this.loadImage(this._wallpaper);
     
      if (this.first){
        this.AddCharacter(new NPCItem('./assets/images/clientafinal.png', 200, this.cameras.main.height - 200, 3, 'clienta', this, null, "Necesito un nuevo sombrero", "Muchisimas gracias", 'sombrero'));
        this.AddCharacter(new NPCItem('./assets/images/duenafinal.png', 505, this.cameras.main.height - 200, 3, 'vendedora', this, 'cartaPuzle', "No te creo", "Ahora si", 'carta'));
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

    this.spawnObjects(this.characters);
  }

}