/**
 * Escena del bosque
 * @extends EscenaJuego
*/
import EscenaJuego from '../escenaJuego.js';
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import NPCItem from "../Objects/NPCItem.js";
import OBJETO from "../Objects/objeto.js";


export default class Bosque extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'bosque' }); 
    {

    };
    this.arrows = [false, false, true, true];
    this.arrowsDirs = [false, false, 'plaza', 'feria'];
  }

  preload(){
    this._wallpaper = {name: 'bosque ', route: './assets/images/fondoBosque.jpg'};

    if (this.first){
      this.AddCharacter(new NPCItem('./assets/images/policia.png', 800, this.cameras.main.height - 300, 0.75, 'policia', this,  null, "ALTO AHÍ, inspección", "Interesante evidencia...", 'pajarita' ));
      this.AddCharacter(new NPCItem('./assets/images/campesino.png', 200, this.cameras.main.height - 200, 1, 'campesino', this,  null, "Se rompio la carreta", "Gracias justo lo que buscaba", 'caja' ));
      this.AddObject(new Item('./assets/images/pajarita.png', 1000, this.cameras.main.height - 70, 10, 'pajarita', this));
    }

    super.preload();
  }

  create(){
    console.log("Escena Bosque");
    super.create();
  }

}