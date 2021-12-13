/**
 * Escena de la casa
 * @extends Phaser.Scene
 */

import EscenaJuego from "../escenaJuego.js"
import Item from "../Objects/item.js";
import NPC from "../Objects/NPC.js";
import OBJETO from "../Objects/objeto.js";


export default class Casa extends EscenaJuego {  

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'casa' });
    {
    
    };
    this.arrows = [true, false, false, false];
    this.arrowsDirs = ['plaza', false, false, false];
  }

  preload(){
    this._wallpaper = {name: 'casa', route: './assets/images/fondoCasa.jpg'};

    if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){

      this.AddCharacter(new NPC('./assets/images/primo.png', 600, this.cameras.main.height - 250, 2, 'primo', this, 'NumerosRasgados'," Ayudame a conseguir \n este número", " Gracias por haberme \n ayudado primo"));
      this.AddObject(new Item('./assets/images/Carta.png', 1050, this.cameras.main.height - 70, 7.5, 'carta', this));
      this.AddObject(new Item('./assets/images/sombrero.png', 250, this.cameras.main.height - 450, 6, 'sombrero', this));
    }
    super.preload();
  }

  create(){
    console.log("Escena Casa");
    super.create();
  }

// update()
    // {

    //   console.log(this.timedEvent.getRemainingSeconds());

    // }

}