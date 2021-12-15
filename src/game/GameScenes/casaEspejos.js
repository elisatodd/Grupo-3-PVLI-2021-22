/**
 * Escena de la casa de los espejos
 * @extends EscenaJuego
*/
import Data from '../../data.js';
import EscenaJuego from '../escenaJuego.js';
import NPC from "../Objects/NPC.js";

export default class CasaEsp extends EscenaJuego { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO
  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'casaEspejos' });
    {
    };
    this.arrows = [false, true, false, false];
    this.arrowsDirs = [false, 'feria', false, false];
    this._wallpaper=[Data.wallpapers.casaEspejos][0];  
  }
  
  preload(){
    
    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPC(Data.npc.excentrico, this));
    }
    super.preload();
  }
  
  create(){
    super.create();
    console.log("Escena Espejos");
  }
}