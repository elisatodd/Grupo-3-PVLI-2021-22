/**
 * Escena del menu principal del cual se pasa al juego
 * @extends EscenaMenu
 */
 import Escena from '../escena.js';
 import Object from "../Objects/objeto.js";
 import Data from "../../data.js"

 export default class MenuPrincipal extends Escena {

    first = true;
    playButton;
    hsButton;
    hsBoard;
    text;
    backgroundMusic;

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'menuPrincipal' });
        {

        };
    }

    preload(){
        
        this._wallpaper = {name: 'mainmenu ', route: './assets/images/fondoMenu.jpg'};
        this.loadImage(this._wallpaper);
      
        if (this.first){
            this.playButton = new Object(Data.buttons.playButton, this);
            this.hsButton = new Object(Data.buttons.hsButton, this);
            this.hsBoard = new Object(Data.buttons.hsPannel, this);
        }

        this.loadImage(this.hsBoard);
        this.loadImage(this.playButton);
        this.loadImage(this.hsButton);
    }

    create(){        
        
        this.createGameManager(this.game, this);

        this._wallpaper = this.spawnWallpaper(this._wallpaper);

        // Para que la música suene desde que se cargue la primera escena
        if (this.sound.context.state === 'suspended') {
            this.sound.context.resume();
        }

        if (this.first){
                
            this.playButton.assignFunctionality('startIntroduction');
            this.hsButton.assignFunctionality('showHighScore');
            this.hsBoard.assignFunctionality('deleteHighScore');
            
            this.backgroundMusic = this.sound.add(Data.sound.backgroundMusic.name, Data.sound.backgroundMusic.config);

            this.backgroundMusic.play();

            this.first = false;
        }
        
        this.addButton(this.playButton);
        this.addButton(this.hsButton);
    }


}