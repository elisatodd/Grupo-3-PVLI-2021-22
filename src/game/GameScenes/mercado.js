/**
 * Escena de la mercado
 * @extends EscenaJuego
 */

import EscenaJuego from "../escenaJuego.js";
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js"; 
import Data from "../../data.js";


export default class Mercado extends EscenaJuego {
  
  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'mercado' });
    {
    };

    this.arrows = [false, true, false, true];
    this.arrowsDirs = [false, 'calle', false, 'parque'];

  }
 
  preload(){

    this._wallpaper = {name: 'mercado', route: './assets/images/fondoMercado.jpg'};
  
    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPC('./assets/images/carnicero.png', 350, this.cameras.main.height - 350, 0.75, 'carnicera', this, null, "¿Quieres comprar algo?", ""));
      this.AddObject(new Item(Data.items.pez, this)); 
    }

    super.preload();
  }

  create(){
    super.create();
    console.log("Escena Mercado");
  }
}