/**
 * Escena de la calle
 * @extends Phaser.Scene
*/
import EscenaJuego from '../escenaJuego.js';
import Item from "../Objects/item.js";
import NPCItem from '../Objects/NPCItem.js';
import Data from "../../data.js";

 
export default class Calle extends EscenaJuego {

  constructor(){
    super({ key: 'calle' });
    {

    };
    this.arrows = [true, true, false, true];
    this.arrowsDirs = ['mercado', 'plaza', false, 'sombrereria'];
    this._wallpaper=[Data.wallpapers.calle][0];  
  }

   /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
    preload(){

      if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
        let mujerGato = new NPCItem(Data.npc.mujerGato, this);
        let flor = new Item(Data.items.flor, this);
  
        this.objects = [flor];
        this.characters = [mujerGato];
      }
      
      super.preload();
    }
  

  create(){   
    
    super.create();
    console.log("Escena Calle");
  }
}