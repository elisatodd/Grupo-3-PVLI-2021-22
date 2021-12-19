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

    this._wallpaper=[Data.wallpapers.bosque][0];
  }

    /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
     preload(){

      if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
        let policia = new NPCItem(Data.npc.policia, this);
        let campesino = new NPCItem(Data.npc.campesino, this);
        let pajarita = new Item(Data.items.pajarita, this);
  
        this.objects = [policia, campesino];
        this.characters = [pajarita];
      }
      
      super.preload();
    }
  

  create(){
    console.log("Escena Bosque");
    super.create();
  }
}