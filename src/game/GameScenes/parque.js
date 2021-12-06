/**
 * Escena de la parque
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";
 import Item from "../Objects/item.js";
 import NPC from "../Objects/NPC.js";
 import NPCItem from '../Objects/NPCItem.js';
 import OBJETO from "../Objects/objeto.js";


 export default class Parque extends EscenaJuego {

  first = true;
  pause;

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'parque' });
    {
    };

    this.arrows = [false, false, true, false];
    this.arrowsDirs = [false, false, 'mercado', false];

  }
 
  preload(){

    this._wallpaper = {name: 'parque', route: './assets/images/nuevoFondo.jpg'};
    this.loadImage(this._wallpaper);

    if (this.first){
      this.AddCharacter(new NPC('./assets/images/candado.png', 100, this.cameras.main.height - 200, 2.5, 'candado', this, null, "Parece que este candado tiene un puzle...", "¡Lo he resuelto!" ));
      this.AddCharacter(new NPCItem('./assets/images/enamoradofinal.png', 200, this.cameras.main.height - 200, 2.5, 'enamorado', this, null, "Necesito algo para mi amada", "Gracias justo lo que buscaba", 'flor' ));
      this.AddObject(new Item('./assets/images/caja.png', 600, this.cameras.main.height - 200, 5, 'caja', this)); 
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

      this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
      this.assignObjects(this.characters, 'cargarDialogo');
      this.pause.assignFunctionality('pause');

      this.first = false;
      
    }
    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);
    this.spawnObjects([this.pause]);


    console.log("Escena Parque");
  }
}