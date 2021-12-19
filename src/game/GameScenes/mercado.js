/**
 * Escena de la mercado
 * @extends EscenaJuego
 */

import EscenaJuego from "../escenaJuego.js";
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js"; 
import Data from "../../data.js";


export default class Mercado extends EscenaJuego {
  
  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'mercado' });
    {
    };

    this.arrows = [false, true, false, true];
    this.arrowsDirs = [false, 'calle', false, 'parque'];
    this._wallpaper=[Data.wallpapers.mercado][0];  
  }
   /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
    preload(){

      if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
        let carnicero = new NPC(Data.npc.carnicero, this);
        let pez = new Item(Data.items.pez, this);
  
        this.objects = [pez];
        this.characters = [carnicero];
      }
      
      super.preload();
    }
  
  create(){
    super.create();
    console.log("Escena Mercado");
  }
}