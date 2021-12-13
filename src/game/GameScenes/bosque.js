/**
 * Escena del bosque
 * @extends EscenaJuego
*/
import EscenaJuego from '../escenaJuego.js';
import Item from "../Objects/item.js";
import NPCItem from "../Objects/NPCItem.js";
import Data from "../../data.js";


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

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPCItem('./assets/images/policia.png', 800, this.cameras.main.height - 300, 0.75, 'policia', this,  null, "ALTO AHÍ, inspección", "Interesante evidencia...", 'pajarita' ));
      this.AddCharacter(new NPCItem('./assets/images/campesino.png', 200, this.cameras.main.height - 200, 1, 'campesino', this,  null, "Se rompio la carreta", "Gracias justo lo que buscaba", 'caja' ));
      this.AddObject(new Item(Data.items.pajarita, this));
    }

    super.preload();
  }

  create(){
    console.log("Escena Bosque");
    super.create();
  }

}