/**
 * Escena de la feria
 * @extends EscenaJuego
*/
import EscenaJuego from '../escenaJuego.js';  
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import OBJETO from "../Objects/objeto.js";


export default class Feria extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'feria' });
    {

    };
    this.arrows = [true, true, true, false];
    this.arrowsDirs = ['casaEspejos', 'casetaFeria', 'bosque', false];
  }

  preload(){
    this._wallpaper = {name: 'feria ', route: './assets/images/fondoCirco.jpg'};
    

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPC('./assets/images/cirquense.jpg', 600, this.cameras.main.height - 350, 2, 'cirquense', this, 'codigoIndiscreto', "Ayuda todo se ha estropeado", "Me has salvado gracias" ));
    }
    super.preload();
  }

  create(){
    super.create();
    console.log("Escena Feria");
  }
}