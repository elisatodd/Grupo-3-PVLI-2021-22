/**
 * Escena de la sombrereria
 * @extends EscenaJuego
 */

import EscenaJuego from "../escenaJuego.js";
import NPCItem from "../Objects/NPCItem.js";
import Data from "../../data.js";


 export default class Sombrereria extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'sombrereria' });
    {
    };

    this.arrows = [false, false, true, false];
    this.arrowsDirs = [false, false, 'calle', false];
    this._wallpaper=[Data.wallpapers.sombrereria][0];  
  }
   /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
    preload(){

      if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
        let clienta = new NPCItem(Data.npc.clienta, this);
        let vendedora = new NPCItem(Data.npc.vendedora, this);

        this.characters = [clienta, vendedora];
      }
      
      super.preload();
    }
  

  create(){
    console.log("Escena Sombrerería");
    super.create();
  }

}