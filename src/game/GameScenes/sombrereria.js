/**
 * Escena de la sombrereria
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  import NPCItem from "../Objects/NPCItem.js";
  import OBJETO from "../Objects/objeto.js";


 export default class Sombrereria extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'sombrereria' });
    {
    };

    this.arrows = [false, false, true, false];
    this.arrowsDirs = [false, false, 'calle', false];

  }
 
  preload(){

    this._wallpaper = {name: 'sombrereria', route: './assets/images/nuevoFondo.jpg'};
    
    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
      this.AddCharacter(new NPCItem('./assets/images/clienta.png', 300, this.cameras.main.height - 250, 1, 'clienta', this, null, "Necesito un nuevo sombrero", "Muchisimas gracias", 'sombrero'));
      this.AddCharacter(new NPCItem('./assets/images/vendedora.png', 900, this.cameras.main.height - 350, 1.75, 'vendedora', this, 'cartaPuzle', "No te creo", "Ahora si", 'carta', true));
    }

    super.preload();
  }

  create(){
    console.log("Escena Sombrerería");
    super.create();
  }

}