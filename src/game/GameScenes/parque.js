/**
 * Escena de la parque
 * @extends EscenaJuego
 */

import EscenaJuego from "../escenaJuego.js";
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import NPCItem from '../Objects/NPCItem.js';
import Data from "../../data.js";


export default class Parque extends EscenaJuego {

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

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPC('./assets/images/candado.png', 100, this.cameras.main.height - 200, 4, 'candado', this, null, "Parece que este candado tiene un puzle...", "¡Lo he resuelto!" ));
      this.AddCharacter(new NPCItem(Data.npc.enamorado,this));
      this.AddObject(new Item(Data.items.caja, this)); 
    }
    super.preload();
  }

  create(){
    super.create();
    console.log("Escena Parque");
  }
}