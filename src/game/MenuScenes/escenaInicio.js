/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Cinematicas
 */

import Cinematicas from "../Cinematicas.js";
import Data from "../../data.js"
import Object from "../Objects/objeto.js"

export default class EscenaInicio extends Cinematicas {

    // Botón que permite comenzar el juego.
    playButton;

    constructor(){
        super({ key: 'escenaInicio' });
        {
        };
    }
    /**
     * Carga el botón necesario para continuar.
     */
    preload(){
        super.preload();
        this.playButton = new Object(Data.buttons.secondaryPlayButton, this);
        this.loadImage(this.playButton);
    }

    /**
     * Añade los elementos de la escena
     */
    create(){        
        super.create();
        this.assignText(Data.cinematics.initialText.string);
        this.playButton.assignFunctionality('startGame');
        this.addButton(this.playButton);
    }
}