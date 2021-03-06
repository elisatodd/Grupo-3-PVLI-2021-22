/**
 * Escena de la casa
 * @extends Phaser.Scene
 */

import EscenaJuego from "../escenaJuego.js"
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import Data from "../../data.js";


export default class Casa extends EscenaJuego {  

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'casa' });
    {
    
    };
    this.arrows = [true, false, false, false];
    this.arrowsDirs = ['plaza', false, false, false];
    this._wallpaper=[Data.wallpapers.casa][0];  
  }

  /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
  preload(){

    if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
      let primo = new NPC(Data.npc.primo, this);
      let carta = new Item(Data.items.carta, this);
      let sombrero = new Item(Data.items.sombrero, this);

      this.objects = [carta,sombrero];
      this.characters = [primo];
    }
    
    super.preload();
  }

  create(){
    console.log("Escena Casa");
    super.create();
  }

// update()
    // {

    //   console.log(this.timedEvent.getRemainingSeconds());

    // }

}