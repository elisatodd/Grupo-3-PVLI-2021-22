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
    timedEvent;

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
    
        this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
        
        this.assignArrows();
        this.spawnArrows();
  
        if (this.first){
          this.assignObjects(this.characters, 'cargarDialogo');
          this.pause.assignFunctionality('pause');

          this.first = false;
        }
        this.spawnObjects(this.characters);
        this.spawnObjects([this.pause]);

    
        console.log("Escena Espejos");
    }
 }