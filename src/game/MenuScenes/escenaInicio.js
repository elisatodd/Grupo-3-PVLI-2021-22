/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Cinematicas
 */

import Cinematicas from "../Cinematicas.js";
import Data from "../../data.js"
import Object from "../Objects/objeto.js"

export default class EscenaInicio extends Cinematicas {

    playButton;
    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'escenaInicio' });
        {
            
        };
    }
    preload(){
        
        super.preload();
        this.playButton = new Object(Data.buttons.secondaryPlayButton, this);
        this.loadImage(this.playButton);
    }
    create(){        
        super.create();
        this.assignText(Data.cinematics.initialText.string);
        this.playButton.assignFunctionality('startGame');
        this.addBottom(this.playButton);
    }

    
}