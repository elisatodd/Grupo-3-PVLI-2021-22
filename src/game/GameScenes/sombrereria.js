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
  timedEvent;

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
        this.AddCharacter(new NPCItem('./assets/images/vendedora.png', 900, this.cameras.main.height - 350, 1.75, 'vendedora', this, 'cartaPuzle', "No te creo", "Ahora si", 'carta'));
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
      this.assignObjects(this.characters, 'cargarDialogo');
      this.pause.assignFunctionality('pause');

      this.first = false;
    }

    this.spawnObjects(this.characters);
    this.spawnObjects([this.pause]);

  }

}3