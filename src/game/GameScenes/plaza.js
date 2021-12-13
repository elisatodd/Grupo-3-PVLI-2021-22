/**
 * Escena de la plaza
 * @extends EscenaJuego
 */

  import EscenaJuego from "../escenaJuego.js";
  import OBJETO from "../Objects/objeto.js";
  import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
 
  export default class Plaza extends EscenaJuego {

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'plaza' }); 
      {
        
      };
      this.arrows = [true, true, false, true];
      this.arrowsDirs = ['calle', 'casa', false, 'bosque'];

    }
  
    preload(){
      
      this._wallpaper = {name: 'plaza', route: './assets/images/fondoPlaza.jpg'};

      this.load.image('box', '../../../assets/images/testing.png');
    
      if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
        this.AddObject(new Item('./assets/images/moneda.png', 200, this.cameras.main.height - 70, 14, 'moneda', this));
        this.AddCharacter(new NPC('./assets/images/cafeteria.png', 750, this.cameras.main.height - 350, 1.5, 'cafeteria', this, null, " Está cerrado.", "Abierto")); // Primero estará cerrada
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