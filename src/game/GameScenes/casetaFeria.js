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
  }

  preload(){
    this._wallpaper = {name: 'caseta ', route: './assets/images/fondoCaseta.jpg'};

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPCItem(Data.npc.ninio, this));
      this.AddCharacter(new NPC(Data.npc.forzudo, this));
    }
      
    super.preload();
  }

  create(){
    super.create();  
    console.log("Escena Caseta");
  }

  

}