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
      this.AddCharacter(new NPCItem(Data.npc.policia, this));
      this.AddCharacter(new NPCItem(Data.npc.campesino, this));
      this.AddObject(new Item(Data.items.pajarita, this));
    }

    super.preload();
  }

  create(){
    console.log("Escena Bosque");
    super.create();
  }
}