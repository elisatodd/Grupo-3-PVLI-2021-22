/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Escena
 */

import Escena from "../game/escena.js";
import Data from "../data.js";

export default class EscenaInicio extends Escena {

    //texto que tiene que mostrar en pantalla
    texto = " ";
    // Velocidad a la que avanza el texto
    textSpeed = 10;
    // Evento para el avance de las letras
    textTimedEvent;
    // Posición de texto por la que va
    i = 0;
    // Posición donde se va escribiendo
    posX = 350;
    posY = 120;
    // Tamaño de la letra
    fontSize = 15;

    constructor(data) {
        super(data);
        {

        };
    }

    preload() {
        this._wallpaper = Data.wallpapers.initialScene;
    }

    create() {

        super.create();

        this.textTimedEvent = this.time.addEvent({ delay: this.textSpeed, callback: this.onEvent, callbackScope: this, loop: true });
    }

    /**
     * Evento que ocurre cada iteración del timer
     */
    onEvent() {
        this.spawnText(this.texto[this.i]);
    }

    /**
     * Aparición de una letra del texto en la posición indicada.
     * @param {Char} letra caracter que debe escribir
     */
    spawnText(letra) {
        // Salto de linea
        if (letra === '=') {
            this.posY += 40;
            this.posX = 350;
        }
        else {
            this.add.text(this.posX, this.posY, letra, { fontSize: '30px', color: '#4E342E', fontFamily: 'initialFont' });
            this.posX += this.fontSize;
        }
        this.i++;
        // Cuando se termine de escribir el texto, acaba el evento
        if (this.i === this.texto.length) {
            this.textTimedEvent.remove(false);
        }

    }
    
    /**
     * Almacena en texto aquello que escribirá la cinemática
     * @param {String} story Texto que se debe guardar
     */
    assignText(story) {
        this.texto = story;
    }


}