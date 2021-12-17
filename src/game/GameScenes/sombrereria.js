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
 
  preload(){

    
    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPCItem(Data.npc.clienta, this));
      this.AddCharacter(new NPCItem(Data.npc.vendedora, this));
    }

    super.preload();
  }

  create(){
    console.log("Escena Sombrerería");
    super.create();
  }

}