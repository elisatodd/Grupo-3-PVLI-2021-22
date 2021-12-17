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

  preload(){

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddObject(new Item( Data.items.flor, this));
      this.AddCharacter(new NPCItem(Data.npc.mujerGato,this));
    }

    super.preload();
  }

  create(){   
    
    super.create();
    console.log("Escena Calle");
  }
}