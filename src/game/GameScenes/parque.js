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
    this._wallpaper=[Data.wallpapers.parque][0];  
  }

  /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
   preload(){

    if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
      let enamorado = new NPCItem(Data.npc.enamorado, this);
      let candado = new NPC(Data.npc.candado, this);
      let caja = new Item(Data.items.caja, this);

      this.objects = [caja];
      this.characters = [enamorado, candado];
    }
    
    super.preload();
  }


  create(){
    super.create();
    console.log("Escena Parque");
  }
}