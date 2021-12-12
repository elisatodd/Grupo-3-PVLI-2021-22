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
  bpause;

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'parque' });
    {
    };

    this.arrows = [false, false, true, false];
    this.arrowsDirs = [false, false, 'mercado', false];

  }
 
  preload(){
    this._wallpaper = {name: 'parque', route: './assets/images/fondoParque.jpg'};
    this.loadImage(this._wallpaper);

    if (this.first){
      this.AddCharacter(new NPC('./assets/images/candado.png', 100, this.cameras.main.height - 200, 4, 'candado', this, null, "Parece que este candado tiene un puzle...", "¡Lo he resuelto!" ));
      this.AddCharacter(new NPCItem('./assets/images/enamorado.png', 1000, this.cameras.main.height - 250, 2.5, 'enamorado', this, null, "Necesito algo para mi amada", "Gracias justo lo que buscaba", 'flor' ));
      this.AddObject(new Item('./assets/images/caja.png', 600, this.cameras.main.height - 200, 5, 'caja', this)); 
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
    super.create();
    
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


    console.log("Escena Parque");
  }
}