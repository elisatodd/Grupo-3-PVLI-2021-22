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
  }

  preload(){

    this._wallpaper = {name: 'plaza', route: './assets/images/fondoCalle.jpg'};

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddObject(new Item( Data.items.flor, this));
      this.AddCharacter(new NPCItem('./assets/images/mujerGato.png', 350, this.cameras.main.height - 300, 1, 'mujer', this, null, "Dame un pescado", "Gracias, te quiero", 'pez'));
    }

    super.preload();
  }

  create(){   
    
    super.create();
    console.log("Escena Calle");
  }
}