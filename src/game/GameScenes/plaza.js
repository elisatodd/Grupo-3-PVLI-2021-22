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

  /**
   * Inicializa los valores para el fondo de la escena junto con sus flechas direccionales.
   */
  constructor(){
    super({ key: 'plaza' }); 
    {
      
    };
    // Los datos vienen dados en el archivo data. 
    // Se importa tanto qué flechas están activas (arrows) como a dónde se dirige cada flecha (arrowsDirs).
    this.arrows = [Data.scenesArrows.plaza.arrows.left, Data.scenesArrows.plaza.arrows.right, Data.scenesArrows.plaza.arrows.down, Data.scenesArrows.plaza.arrows.up];
    this.arrowsDirs = [Data.scenesArrows.plaza.arrowsDirs.left, Data.scenesArrows.plaza.arrowsDirs.right, Data.scenesArrows.plaza.arrowsDirs.down, Data.scenesArrows.plaza.arrowsDirs.up];
    // Fondo de la escena:
    this._wallpaper = [Data.wallpapers.plaza][0];
  }

  /**
   * Crea los objetos que deben aparecer en la escena: items y NPCs.
   */
  preload(){
    // Solo se crean objetos cuando es la primera vez que se carga la escena.
    // Esto se resetea una vez acaba el juego.
    if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1){
      let cafeteria = new NPC(Data.npc.cafeteria, this);
      let moneda = new Item(Data.items.moneda, this);
      // Guarda estos objetos en las variables que los controlan 
      this.objects = [moneda];
      this.characters = [cafeteria]; 
      // Esta escena tiene la flecha hacia arriba como desbloqueable, por lo que queda a falso al comienzo de la partida.
      this.arrows[3] = false;
    }

    super.preload();
  }

  /**
   * Cambia la flecha de dirección hacia arriba si ha ocurrido el evento que lo habilita.
   */
  create(){

    console.log("Escena Plaza");
    super.create();

    if (this.gameManager.zoneUnlocked){
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