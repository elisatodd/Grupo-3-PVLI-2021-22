/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Cinematicas
 */

import Cinematicas from "../Cinematicas.js";
import Data from "../../data.js"

export default class EscenaInicio extends Cinematicas {

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'escenaFinalNormal' });
        {
            
        };
    }
    preload(){
        
        super.preload();
    }
    create(){        
        this.assignText (Data.cinematics.neutralEnding.string);
        super.create();
    }

    
}