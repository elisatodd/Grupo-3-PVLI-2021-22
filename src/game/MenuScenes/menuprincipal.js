/**
 * Escena del menu principal del cual se pasa al juego
 * @extends EscenaMenu
 */
 import Escena from '../escena.js';
 import Object from "../Objects/objeto.js";
 import Data from "../../data.js"

 export default class MenuPrincipal extends Escena {

    first = true;
    playButton; // Botón que accede a la partida
    hsButton; // Botón que muestra el highscore
    hsBoard; // Panel en el que se ve el highscore
    text; // Texto que contiene el highscore
    backgroundMusic; // Música que se escucha durante el juego

    constructor(){
        super({ key: 'menuPrincipal' });
        {

        };
    }

    /**
     * Crea lo que se ve en el menú: fondo y objetos.
     */
    preload(){
        
        this._wallpaper=[Data.wallpapers.mainMenu][0];
      
        if (this.first){
            this.playButton = new Object(Data.buttons.playButton, this);
            this.hsButton = new Object(Data.buttons.hsButton, this);
            this.hsBoard = new Object(Data.buttons.hsPannel, this);
        }
    }

    /**
     * Crea sus elementos, les asigna funcionalidad y pone en ejecución la música.
     */
    create(){        

        super.create();

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