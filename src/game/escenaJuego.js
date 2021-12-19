/**
 * Intentando hacer una escena
 * @extends escena
 */
import Escena from "./escena.js";
import OBJETO from "./Objects/objeto.js";
import Data from "../data.js";
import item from "./Objects/item.js";

export default class EscenaJuego extends Escena {


    first = true;

    pause;
    bpause;
    bmute;
    bunmute;

    characters = [];
    objects = [];

    constructor(data) {
        super(data);
        {
        };
    }

    /**
     * Define los objetos comunes a todas las escenas de juego: flechas, botones de pausa, mute, y paneles de pausa.
     */
    preload() {
        // Solo lo hace una vez por partida
        if (this.registry.get('scenesIni').indexOf(this.scene.key) !== -1) {
            this.bmute = new OBJETO(Data.buttons.buttonMute, this);
            this.bunmute = new OBJETO(Data.buttons.buttonUnMute, this);
            this.bpause = new OBJETO(Data.buttons.buttonPause, this);
            this.bunpause = new OBJETO(Data.buttons.exitPauseButtom, this);
            this.breturn = new OBJETO(Data.buttons.exitMenuButtom, this);
        }
        // Hay flechas en todas las escenas pero hacen cosas distintas,
        // por lo que hay que crear las flechas de cada escena.
        this.createArrows();
    }

    /**
     * Crea los objetos que se ven en la escena de juego. 
     * También comprueba si se ha alcanzado el máximo de puntos.
     */
    create() {
        super.create();
        // Carga los items que tenga en el inventario.
        this.gameManager.loadElements();

        // Comprueba si el jugador ha obtenido los puntos máximos, así no tendrá que esperar a que acabe el tiempo de juego.
        if (this.gameManager.points >= this.gameManager.MAX_POINTS){
            this.gameManager.endGame();
        }

        // En la primera aparición, asigna funcionalidad a los botones
        let scenesIni = this.registry.get('scenesIni');
        if (scenesIni.indexOf(this.scene.key) !== -1) {
            this.bmute.assignFunctionality('mute');
            this.bunmute.assignFunctionality('mute');
            this.bpause.assignFunctionality('pause');
            this.bunpause.assignFunctionality('deletePause');
            this.breturn.assignFunctionality('returnMenu');

            // Cambia el registro -> marca la escena como accedida
            scenesIni[scenesIni.indexOf(this.scene.key)] = null;
            this.registry.set('scenesIni', scenesIni);
        }        
        this.assignArrows();
        // Dibuja los objetos
        this.spawnArrows();
        this.spawnObjects(this.objects);
        this.spawnObjects(this.characters);
        this.spawnObjects([this.bpause, this.bmute]);

    }

    /**
    * Crea flechas para cambiar de zonas en la escena actual
    * con la informacion de la misma sacada del data.
    */
    createArrows() {
        for (let i = 0; i < this.arrows.length; i++) {
            if (this.arrows[i]) {
                switch (i) {
                    case 0:
                        this.arrows[i] = new OBJETO(Data.arrows.left, this)
                        break;
                    case 1:
                        this.arrows[i] = new OBJETO(Data.arrows.rigth, this)
                        break;
                    case 2:
                        this.arrows[i] = new OBJETO(Data.arrows.down, this)
                        break;
                    case 3:
                        this.arrows[i] = new OBJETO(Data.arrows.up, this)
                        break;
                }
            }
        }
    }

    /**
     * Instancia las flechas (botones) con los datos de las flechas definidos anteriormente.
     */
    spawnArrows() {
        for (let i = 0; i < this.arrows.length; i++)
            if (this.arrows[i] != false)
                this.addButtonArrows(this.arrows[i]);
    }

    /**
     * Asigna a todos los objetos contenidos en el container
     *  la funcionalidad específicada
     * @param {Array} container contiene los objetos que deben ser modificados
     * @param {Funcionalidad} funct función que debe de ser dada a los objetos
     */
    assignObjects(container, funct) {
        for (let i = 0; i < container.length; i++)
            container[i].assignFunctionality(funct);
    }

    /**
     * Asigna a cada una de las flechas la funcionalidad de cambio de escena 
     * y la dirección a la que debe pasar al ser clicada
     */
    assignArrows() {
        for (let i = 0; i < this.arrows.length; i++) {
            let dir;
            if (this.arrows[i] != false) {
                switch (i) {
                    case 0:
                        dir = 'left';
                        break;
                    case 1:
                        dir = 'right';
                        break;
                    case 2:
                        dir = 'down';
                        break;
                    case 3:
                        dir = 'up';
                        break;
                }
                this.arrows[i].assignFunctionality('changeScene');
                this.arrows[i].assignDir(dir);
            }
        }
    }

    /**
     * Instancia en la escena todos los objetos almacenados en el contenedor 
     * dado como parámetro
     * @param {Array} container Objetos que queremos spawnear
     */
    spawnObjects(container) {
        for (let i = 0; i < container.length; i++) {
            this.addButton(container[i]);
        }
    }
}