/**
 * Escena de la calle
 * @extends Phaser.Scene
*/
import EscenaJuego from '../escenaJuego.js';
import Item from "../Objects/item.js";

import NPC from "../Objects/NPC.js";
import NPCItem from '../Objects/NPCItem.js';
import OBJETO from "../Objects/objeto.js";

 
export default class Calle extends EscenaJuego {

  constructor(){
    super({ key: 'calle' });
    {

    };
    this.arrows = [true, true, false, true];
    this.arrowsDirs = ['mercado', 'plaza', false, 'sombrereria'];
  }

  preload(){

    this._wallpaper = {name: 'plaza', route: './assets/images/fondoCalle.jpg'};

    if (this.first){
      this.AddObject(new Item('./assets/images/flor.png', 700, this.cameras.main.height - 70, 8, 'flor', this));
      this.AddCharacter(new NPCItem('./assets/images/mujerGato.png', 350, this.cameras.main.height - 300, 1, 'mujer', this, null, "Dame un pescado", "Gracias, te quiero", 'pez'));
    }

    super.preload();
  }

  create(){   
    
    super.create();
    console.log("Escena Calle");
  }
}