/**
 * Escena de la plaza
 * @extends EscenaJuego
 */

  import EscenaJuego from "../escenaJuego.js";
  //preguntar guille si se puede quitar de algua manera
  import OBJETO from "../Objects/objeto.js";
  import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
 
  export default class Plaza extends EscenaJuego {

    first = true;
    pause;
    timedEvent;
    gamePoints;

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'plaza' }); 
      {
        
      };
      this.arrows = [true, true, false, true];
      this.arrowsDirs = ['calle', 'casa', false, 'bosque'];

    }
  
    preload(){
      //this.timedEvent = this.time.addEvent({ delay: 1000, repeat: 9 });

      this._wallpaper = {name: 'plaza', route: './assets/images/fondoPlaza.jpg'};
      this.loadImage(this._wallpaper);
      

      this.load.image('box', '../../../assets/images/box.png');


      if (this.first){
      this.AddObject(new Item('./assets/images/moneda.png', 200, this.cameras.main.height - 70, 14, 'moneda', this));
      this.AddCharacter(new NPC('./assets/images/cafeteria.png', 600, this.cameras.main.height - 200, 3, 'cafeteria', this, null, " Está cerrado.", "Abierto")); // Primero estará cerrada
      this.pause = new OBJETO('./assets/images/botonpausa.png', 50, 50, 8, 'pause', this);
    }

      this.loadObjects(this.objects);
      this.loadObjects(this.characters);
      this.loadObjects([this.pause]);


      this.createArrows();
      this.loadArrows();

    }
  
    create(){

      console.log("Escena Plaza");
      this._wallpaper = this.spawnWallpaper(this._wallpaper);

      this.createGameManager(this.game, this);
      this.gameManager.loadElements();
      
      this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
      this.gamePoints=this.time.addEvent({ delay: this.game['gamePoints'],callbackScope: this.gameManager });

      this.assignArrows();
      this.spawnArrows();

      if (this.first){

        this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
        this.assignObjects(this.characters, 'cargarDialogo');
        
        this.pause.assignFunctionality('pause');
        this.first = false;
        
      }
      this.spawnObjects(this.objects);
      this.spawnObjects(this.characters);
      this.spawnObjects([this.pause]);
     
    }

    update()
    {

      console.log(this.timedEvent.getRemainingSeconds());

    }
  }