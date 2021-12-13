/**
 * Escena de la casa de los espejos
 * @extends EscenaJuego
*/
import EscenaJuego from '../escenaJuego.js';
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import OBJETO from "../Objects/objeto.js";

  

export default class CasaEsp extends EscenaJuego { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO
  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'casaEspejos' });
    {
    };
    this.arrows = [false, true, false, false];
    this.arrowsDirs = [false, 'feria', false, false];
  }
  
  preload(){
    this._wallpaper = {name: 'espejos ', route: './assets/images/nuevoFondo.jpg'};

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPC('./assets/images/excentrico.png', 600, this.cameras.main.height - 300, 2, 'excentrico', this, null, "Resuelve mi acertijo", "Eres muy listo" ));
    }
    super.preload();
  }
  
  create(){
    super.create();
    console.log("Escena Espejos");
  }
}