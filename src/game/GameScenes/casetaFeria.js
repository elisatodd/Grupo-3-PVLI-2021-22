/**
 * Escena de la caseta de feria
 * @extends Phaser.Scene
 */
import EscenaJuego from '../escenaJuego.js';
import NPC from "../Objects/NPC.js";
import NPCItem from "../Objects/NPCItem.js";
import Data from "../../data.js";

export default class CasetaFeria extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'casetaFeria' });
    {

    };
    this.arrows = [true, false, false, false];  
    this.arrowsDirs = ['feria', false, false, false];
    this._wallpaper=[Data.wallpapers.casetaFeria][0];  
  }
  /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
   preload(){

    if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
      let ninio = new NPCItem(Data.npc.ninio, this);
      let forzudo = new NPC(Data.npc.forzudo, this);

      this.characters = [ninio, forzudo];
    }
    
    super.preload();
  }

  create(){
    super.create();  
    console.log("Escena Caseta");
  }

  

}