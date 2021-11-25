/**
 * Escena de la parque
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";

 export default class Parque extends EscenaJuego {

  first = true;

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'parque' });
    {
    };

    this.arrows = [false, false, true, false];
    this.arrowsDirs = [false, false, 'mercado', false];

  }
 
  preload(){

    this._wallpaper = {name: 'parque', route: './assets/images/pueblo.jpg'};
    this.loadImage(this._wallpaper);

    if (this.first){
    this.AddCharacter(new NPC('./assets/images/enamorado.png', 200, this.cameras.main.height - 200, 2.5, 'enamorado', this, null, "Necesito algo para mi amada", "Gracias justo lo que buscaba" ));
    this.AddObject(new Item('./assets/images/caja.png', 600, this.cameras.main.height - 200, 5, 'caja', this)); 
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

    console.log("Escena Parque");
  }
}