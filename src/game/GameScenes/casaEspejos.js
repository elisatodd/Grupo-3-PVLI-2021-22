/**
 * Escena de la casa de los espejos
 * @extends EscenaJuego
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  import OBJETO from "../Objects/objeto.js";

  

 export default class CasaEsp extends EscenaJuego { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO
    
    first = true;
    pause;   
    bpause;


    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'casaEspejos' });
        {

        };
        this.arrows = [false, true, false, false];
        this.arrowsDirs = [false, 'feria', false, false];
    }
    
    preload(){
        this._wallpaper = {name: 'espejos ', route: './assets/images/nuevoFondo.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){
            this.AddCharacter(new NPC('./assets/images/excentrico.png', 600, this.cameras.main.height - 300, 2, 'excentrico', this, null, "Resuelve mi acertijo", "Eres muy listo" ));
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
        this.pause.assignFunctionality('deletePause');

          this.first = false;
        }
        this.spawnObjects(this.characters);
        this.spawnObjects([this.bpause]);

    
        console.log("Escena Espejos");
    }
 }