/**
 * Escena de la caseta de feria
 * @extends Phaser.Scene
 */
import EscenaJuego from '../escenaJuego.js';
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import NPCItem from "../Objects/NPCItem.js";
import OBJETO from "../Objects/objeto.js";

export default class CasetaFeria extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'casetaFeria' });
    {

    };
    this.arrows = [true, false, false, false];  
    this.arrowsDirs = ['feria', false, false, false];
  }

  preload(){
    this._wallpaper = {name: 'caseta ', route: './assets/images/fondoCaseta.jpg'};

    if (this.first){
      this.AddCharacter(new NPCItem('./assets/images/ninio.png', 850, this.cameras.main.height - 300, 3, 'ninio', this, null, "No tengo dinero :(", "Gracias!! jeje", 'moneda' ));
      this.AddCharacter(new NPC('./assets/images/forzudo.png', 350, this.cameras.main.height - 250, 2.5, 'forzudo', this,  null, "Soy muy fuerte pero no muy listo \n ¿me ayudas?", "Gracias era muy dificil para mi" ));
    }
      
    super.preload();
  }

  create(){
    super.create();  
    console.log("Escena Caseta");
  }

  

}