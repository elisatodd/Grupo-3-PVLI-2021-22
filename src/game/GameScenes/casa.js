/**
 * Escena de la casa
 * @extends Phaser.Scene
 */

 import EscenaJuego from "../escenaJuego.js"
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  import OBJETO from "../Objects/objeto.js";


  export default class Casa extends EscenaJuego {  

    first = true;
    pause;  
    bpause;


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
      this.loadImage(this._wallpaper);

      if (this.first){

        this.AddCharacter(new NPC('./assets/images/primo.png', 600, this.cameras.main.height - 250, 2, 'primo', this, 'NumerosRasgados'," Ayudame a conseguir \n este número", " Gracias por haberme \n ayudado primo"));
        this.AddObject(new Item('./assets/images/Carta.png', 1050, this.cameras.main.height - 70, 7.5, 'carta', this));
        this.AddObject(new Item('./assets/images/sombrero.png', 250, this.cameras.main.height - 450, 6, 'sombrero', this));
        this.bpause = new OBJETO('./assets/images/botonpausa.png', 50, 50, 8, 'pause', this);
        this.pause = new OBJETO('./assets/images/wallpaperWeb.jpg', this.cameras.main.width/2 - 110, this.cameras.main.height/2, 1, 'text', this);
      }
      this.loadObjects(this.objects);
      this.loadObjects(this.characters);
      this.loadObjects([this.bpause]);
      this.loadObjects([this.pause]);

      this.createArrows();
      this.loadArrows();
    }

    create(){
      console.log("Escena Casa");
      this._wallpaper = this.spawnWallpaper(this._wallpaper);

      this.createGameManager(this.game, this);
      this.gameManager.loadElements();
    
      this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
      
      this.gameManager.points = this.game['gamePoints'].gamePoints;
      
      this.assignArrows();
      this.spawnArrows();

      if (this.first){

        this.assignObjects(this.objects, 'moveToInventory');
        this.assignObjects(this.characters, 'cargarDialogo');
         
        this.bpause.assignFunctionality('pause');
        this.pause.assignFunctionality('deleteImage');

        
        this.first = false;

      }
      this.spawnObjects(this.objects);
      this.spawnObjects(this.characters);
      this.spawnObjects([this.bpause]);

      
     
    }

    // update()
    // {

    //   console.log(this.timedEvent.getRemainingSeconds());

    // }

  }