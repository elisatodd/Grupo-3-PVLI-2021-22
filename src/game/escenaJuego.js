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

    preload() {
        if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)) {
            this.bmute = new OBJETO(Data.buttons.buttonMute, this);
            this.bunmute = new OBJETO(Data.buttons.buttonUnMute, this);
            this.bpause = new OBJETO(Data.buttons.buttonPause, this);
            this.bunpause = new OBJETO(Data.buttons.hsButton, this);
            this.breturn = new OBJETO(Data.buttons.playButton, this);
        }
        
        //this.loadImage(this._wallpaper);

        //a eliminar
        //this.loadObjects(this.objects);
        //this.loadObjects(this.characters);
        //this.loadObjects([this.bpause, this.bmute, this.bunmute, this.bunpause, this.breturn]);
        //this.loadArrows();

        this.createArrows();

    }

    create() {
        super.create();
        this.gameManager.loadElements();

        this.assignArrows();
        this.spawnArrows();

        let scenesIni = this.registry.get('scenesIni');
        if (scenesIni.indexOf(this.scene.key) !== -1) {

            this.bmute.assignFunctionality('mute');
            this.bunmute.assignFunctionality('mute');
            this.bpause.assignFunctionality('pause');
            this.bunpause.assignFunctionality('deletePause');
            this.breturn.assignFunctionality('returnMenu');

            scenesIni[scenesIni.indexOf(this.scene.key)] = null;
            this.registry.set('scenesIni', scenesIni);

        }
        this.spawnObjects(this.objects);
        this.spawnObjects(this.characters);
        this.spawnObjects([this.bpause, this.bmute]);

    }

    /**
    * Crea flechas para cambiar de zonas en la escena actual
    * con la informacion de esta
    * @param 
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

    //a eliminar
    loadArrows() {
        for (let i = 0; i < this.arrows.length; i++)
            if (this.arrows[i] != false)
                this.loadImage(this.arrows[i]);
    }

    /**
     * Instancia botones con los datos de las flechas en la escena.
     */
    spawnArrows() {
        for (let i = 0; i < this.arrows.length; i++)
            if (this.arrows[i] != false)
                this.addBottomArrows(this.arrows[i]);
    }

    //a eliminar
    loadObjects(container) {
        for (let i = 0; i < container.length; i++)
            this.loadImage(container[i]);
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
     * @param {Array} container 
     */
    spawnObjects(container) {
        for (let i = 0; i < container.length; i++) {
            this.addBottom(container[i]);
        }
    }

    /**
     * Añade un item al array de objetos de la escena
     * @param {item} object objeto para ser añadido al contenedor de objetos
     */
    AddObject(object) {
        this.objects.push(object);
    }

    /**
     * Añade un NPC al array de personajes d ela escena
     * @param {NPC/NPCItem} character 
     */
    AddCharacter(character) {
        this.characters.push(character);
    }

    //actives es un array donde se ven que objectos siguen estado activados, recogido del gameManager
    CreateCharacters(actives) {
        let i = 0;
        for (let character of this.characters) {
            if (actives[i] == true) {
                //character();
            }
            i++;
        }
    }

    //a eliminar?
    CreateObjects(actives) {
        let i = 0;
        for (let object of this.objects) {
            if (actives[i] == true) {
                //object();
            }
            i++;
        }
    }

    //posInv?
    /**
     * Mueve al inventario un objeto de la escena
     * @param {Pos : {x,y}} posInv 
     * @param {Item} obj 
     * @param {Int} xPosition 
     * @param {Int} yPosition 
     * @param {Int} itemScale 
     */
    moverAlInventario(posInv, obj, xPosition, yPosition, itemScale) { // Pone un objeto de esta escena en el inventario
        // Las posiciones dependen de cuantos objetos haya en el inventario
        let inv1 = this.add.image(xPosition, yPosition, obj);
        inv1.setScale(this.scale / itemScale).setScrollFactor(0);
    }

    //?devuelve el nombre?
    /**
     * Busca un objeto en el inventario
     * @param {string} name nombre usado para encontra rel objeto en cuestión 
     * @returns 
     */
    buscarObjeto(name) { // UN FOR RECORRIENDO EL ARRAY DE OBJETOS HASTA QUE ENCUENTRA EL NOMBRE
        for (i = 0; i < this.objects.length; ++i) {
            if (objects[i].dameNombre() == name) {
                return objects[i].dameNombre();
            }
        }
    }

    /**
     * Elimina un objeto del contenedor de objetos la escena
     * @param {Item} obj 
     */
    // El GM llama a este método cuando se pasa un objeto al inventario, para que desaparezca de la escena
    RemoveObject(obj) {
        //Forma de borrar un elemento concreto de un vector
        let indice = array.indexOf(obj);
        if (indice !== -1) {
            this.objects.splice(indice, 1);
        }
    }

}