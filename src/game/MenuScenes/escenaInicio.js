/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Escena
 */

import Cinematicas from "../Cinematicas.js";
import Object from "../Objects/objeto.js"
import Data from "../../data.js"

export default class EscenaInicio extends Cinematicas {

   
    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'escenaInicio' });
        {
            
        };
    }
    preload(){
        
        super.preload();
    }
    create(){        
        this.assignText (Data.cinematics.initialText.string);
        super.create();
    }

    
}