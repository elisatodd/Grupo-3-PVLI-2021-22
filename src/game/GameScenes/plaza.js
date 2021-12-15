/**
 * Escena de la plaza
 * @extends EscenaJuego
 */

import EscenaJuego from "../escenaJuego.js";
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import Data from "../../data.js"
export default class Plaza extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'plaza' }); 
    {
      
    };
    //this.arrows = [true, true, false, true];
    this.arrows = [Data.scenesArrows.plaza.arrows.left, Data.scenesArrows.plaza.arrows.right, Data.scenesArrows.plaza.arrows.down, Data.scenesArrows.plaza.arrows.up];
    //this.arrowsDirs = ['calle', 'casa', false, 'bosque'];
    this.arrowsDirs = [Data.scenesArrows.plaza.arrowsDirs.left, Data.scenesArrows.plaza.arrowsDirs.right, Data.scenesArrows.plaza.arrowsDirs.down, Data.scenesArrows.plaza.arrowsDirs.up];
  }

  preload(){
    
    this._wallpaper = {name: 'plaza', route: './assets/images/fondoPlaza.jpg'};

    this.load.image('box', '../../../assets/images/testing.png');
  
    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddObject(new Item(Data.items.moneda, this));
      this.AddCharacter(new NPC(Data.npc.cafeteria, this)); // Primero estará cerrada
    } 

    super.preload();
  }

  create(){

    console.log("Escena Plaza");
    super.create();
  }

  // update()
  // {

  //   console.log(this.timedEvent.getRemainingSeconds());

  // }
}