/**
 * Escena de la sombrereria
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  import NPCItem from "../Objects/NPCItem.js";
  import OBJETO from "../Objects/objeto.js";


 export default class Sombrereria extends EscenaJuego {

  first = true;
  pause; 
  bpause;

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'sombrereria' });
    {
    };

    this.arrows = [false, false, true, false];
    this.arrowsDirs = [false, false, 'calle', false];

  }
 
  preload(){

    this._wallpaper = {name: 'sombrereria', route: './assets/images/nuevoFondo.jpg'};
    this.loadImage(this._wallpaper);
    
    if (this.first){
      this.AddCharacter(new NPCItem('./assets/images/clienta.png', 300, this.cameras.main.height - 250, 1, 'clienta', this, null, "Necesito un nuevo sombrero", "Muchisimas gracias", 'sombrero'));
      this.AddCharacter(new NPCItem('./assets/images/vendedora.png', 900, this.cameras.main.height - 350, 1.75, 'vendedora', this, 'cartaPuzle', "No te creo", "Ahora si", 'carta', true));
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
    console.log("Escena Sombrerería");
    super.create();
    
    this.assignArrows();
    this.spawnArrows();

    if (this.first){
      this.assignObjects(this.characters, 'cargarDialogo');
       
      this.bpause.assignFunctionality('pause');
      this.pause.assignFunctionality('deletePause');

      this.first = false;
    }

    this.spawnObjects(this.characters);
    this.spawnObjects([this.bpause]);

  }

}3