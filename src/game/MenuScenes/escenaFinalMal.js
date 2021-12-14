/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Cinematicas
 */

import Cinematicas from "../Cinematicas.js";
import Data from "../../data.js";
import Object from "../Objects/objeto.js";

export default class EscenaFinalMalo extends Cinematicas {
    
    exitButton;
    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'escenaFinalMal' });
        {
            
        };
    }
    preload(){
        this.exitButton = new Object(Data.buttons.exitButton, this);
        this.loadImage(this.exitButton);
        super.preload();
    }
    create(){        
        super.create();
        this.addBottom(this.exitButton);
        this.exitButton.assignFunctionality('returnMenu');
        this.assignText (Data.cinematics.badEnding.string);
    }

    
}