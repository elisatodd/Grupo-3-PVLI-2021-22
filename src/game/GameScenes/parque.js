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

    if (this.first){
      this.AddCharacter(new NPC('./assets/images/candado.png', 100, this.cameras.main.height - 200, 4, 'candado', this, null, "Parece que este candado tiene un puzle...", "¡Lo he resuelto!" ));
      this.AddCharacter(new NPCItem('./assets/images/enamorado.png', 1000, this.cameras.main.height - 250, 2.5, 'enamorado', this, null, "Necesito algo para mi amada", "Gracias justo lo que buscaba", 'flor' ));
      this.AddObject(new Item('./assets/images/caja.png', 600, this.cameras.main.height - 200, 5, 'caja', this)); 
    }
    super.preload();
  }

  create(){
    super.create();
    console.log("Escena Parque");
  }
}