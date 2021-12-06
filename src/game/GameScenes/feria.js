/**
 * Escena de la feria
 * @extends EscenaJuego
 */
 import EscenaJuego from '../escenaJuego.js';  
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  import OBJETO from "../Objects/objeto.js";


 export default class Feria extends EscenaJuego {

    first = true;
    pause;
    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'feria' });
        {

        };
        this.arrows = [true, true, true, false];
        this.arrowsDirs = ['casaEspejos', 'casetaFeria', 'bosque', false];
    }

    preload(){
        this._wallpaper = {name: 'feria ', route: './assets/images/fondoCirco.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){

        this.AddCharacter(new NPC('./assets/images/circensefinal.png', 200, this.cameras.main.height - 200, 2.5, 'cirquense', this, 'codigoIndiscreto', "Ayuda todo se ha estropeado", "Me has salvado gracias" ));
        this.pause = new OBJETO('./assets/images/botonpausa.png', 50, 50, 8, 'pause', this);
  
      }
        this.loadObjects(this.characters);
        this.loadObjects([this.pause]);


        this.createArrows();
        this.loadArrows();
    }

    create(){
      this._wallpaper = this.spawnWallpaper(this._wallpaper);

      this.createGameManager(this.game, this);
      this.gameManager.loadElements();
      
      this.assignArrows();
      this.spawnArrows();

      if (this.first){

        this.assignObjects(this.characters, 'cargarDialogo');
        this.pause.assignFunctionality('pause');

        this.first = false;
        
      }
      this.spawnObjects(this.objects);
      this.spawnObjects(this.characters);
      this.spawnObjects([this.pause]);

      
     
    }
}