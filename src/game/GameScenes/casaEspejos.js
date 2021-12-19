/**
 * Escena de la casa de los espejos
 * @extends EscenaJuego
*/
import Data from '../../data.js';
import EscenaJuego from '../escenaJuego.js';
import NPC from "../Objects/NPC.js";

export default class CasaEsp extends EscenaJuego { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO
  constructor() {
    // Nombre de la escena para el SceneManager
    super({ key: 'casaEspejos' });
    {
    };
    this.arrows = [false, true, false, false];
    this.arrowsDirs = [false, 'feria', false, false];
    this._wallpaper = [Data.wallpapers.casaEspejos][0];
  }

  /**
  * Crea los objetos que deben aparecer en la escena: items y NPCs.
  */
  preload() {
    if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1) {
      let excentrico = new NPC(Data.npc.excentrico, this);

      this.characters = [excentrico];
    }

    super.preload();
  }

  create() {
    super.create();
    console.log("Escena Espejos");
  }
}