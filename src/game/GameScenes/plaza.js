/**
 * Escena de la plaza
 * @extends EscenaJuego
 */

import EscenaJuego from "../escenaJuego.js";
import Item from "../Objects/item.js";
import OBJETO from "../Objects/objeto.js";
import NPC from "../Objects/NPC.js";
import Data from "../../data.js"
export default class Plaza extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'plaza' }); 
    {
      
    };
    //this.arrows = [true, true, false, true];
    this.arrows = [Data.scenesArrows.plaza.arrows.left, Data.scenesArrows.plaza.arrows.right, Data.scenesArrows.plaza.arrows.down, false];
    //this.arrowsDirs = ['calle', 'casa', false, 'bosque'];
    this.arrowsDirs = [Data.scenesArrows.plaza.arrowsDirs.left, Data.scenesArrows.plaza.arrowsDirs.right, Data.scenesArrows.plaza.arrowsDirs.down, Data.scenesArrows.plaza.arrowsDirs.up];
    this._wallpaper = [Data.wallpapers.plaza][0];
  }

  preload(){
    
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
    
    if (!this.gameManager.zoneUnlocked){
      this.arrows[3] = false;
    }else{
      this.arrows[3] = new OBJETO(Data.arrows.up, this);
      this.assignArrows();
      this.spawnArrows();
    }
  }

  // update()
  // {

  //   console.log(this.timedEvent.getRemainingSeconds());

  // }
}