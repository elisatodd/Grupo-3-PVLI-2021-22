/**
 * Escena de la feria
 * @extends EscenaJuego
*/
import EscenaJuego from '../escenaJuego.js';  
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import Data from "../../data.js";


export default class Feria extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'feria' });
    {

    };
    this.arrows = [true, true, true, false];
    this.arrowsDirs = ['casaEspejos', 'casetaFeria', 'bosque', false];
    this._wallpaper=[Data.wallpapers.feria][0];  
  }

  /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
   preload(){

    if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
      let cirquense = new NPC(Data.npc.cirquense, this);
      let cirquense2 = new NPC(Data.npc.cirquense2, this)

      this.characters = [cirquense, cirquense2];
    }
    
    super.preload();
  }

  create(){
    super.create();
    console.log("Escena Feria");
  }
}