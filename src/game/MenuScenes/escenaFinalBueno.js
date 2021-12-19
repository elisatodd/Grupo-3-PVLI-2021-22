/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Cinematicas
 */

import Cinematicas from "../Cinematicas.js";
import Data from "../../data.js";
import Object from "../Objects/objeto.js";

export default class EscenaFinalBueno extends Cinematicas {

    // Botón que permite salir del juego.
    exitButton;

    constructor() {
        super({ key: 'escenaFinalBueno' });
        {

        };
    }
    
    /**
     * Carga el botón necesario para continuar.
     */
    preload() {
        this.exitButton = new Object(Data.buttons.exitButton, this);
        this.loadImage(this.exitButton);
        super.preload();
    }

    /**
     * Añade los elementos de la escena
     */
    create() {
        super.create();
        this.addButton(this.exitButton);
        this.exitButton.assignFunctionality('returnMenu');
        this.assignText(Data.cinematics.goodEnding.string);
    }


}