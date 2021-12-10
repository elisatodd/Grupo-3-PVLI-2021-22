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
    
    first = true;
    pause;
    bpause;


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
      this.loadImage(this._wallpaper);

      if (this.first){
        this.AddCharacter(new NPCItem('./assets/images/ninio.png', 850, this.cameras.main.height - 300, 3, 'ninio', this, null, "No tengo dinero :(", "Gracias!! jeje", 'moneda' ));
        this.AddCharacter(new NPC('./assets/images/forzudo.png', 350, this.cameras.main.height - 250, 2.5, 'forzudo', this,  null, "Soy muy fuerte pero no muy listo \n ¿me ayudas?", "Gracias era muy dificil para mi" ));
        this.bpause = new OBJETO('./assets/images/botonpausa.png', 50, 50, 8, 'pause', this);
        this.pause = new OBJETO('./assets/images/wallpaperWeb.jpg', this.cameras.main.width/2 - 110, this.cameras.main.height/2, 1, 'text', this);
      }
        
      this.loadObjects(this.characters);
      this.loadObjects([this.bpause]);
      this.loadObjects([this.pause]);


      this.createArrows();
      this.loadArrows();
    }
  
    create(){
      this._wallpaper = this.spawnWallpaper(this._wallpaper);

      this.createGameManager(this.game, this);
      this.gameManager.loadElements();
    
      this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
      
      this.gameManager.points = this.game['gamePoints'].gamePoints;
      
      this.assignArrows();
      this.spawnArrows();

      if (this.first){
        this.assignObjects(this.characters, 'cargarDialogo');
         
        this.bpause.assignFunctionality('pause');
        this.pause.assignFunctionality('deleteImage');

        this.first = false;
      }
      this.spawnObjects(this.characters);
      this.spawnObjects([this.bpause]);

  
      console.log("Escena Caseta");
    }

    
  
  }