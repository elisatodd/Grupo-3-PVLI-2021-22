/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
import EscenaPuzzle from './../escenaPuzzle.js'
import Data from '../../data.js';

export default class PuzzleTopoz extends EscenaPuzzle {


    sceneToLoad = 'casetaFeria';
    inicialize = false;


    //base grafica que sera usada para todos
    up = { name: 'topoUp', pos: { x: "", y: "" }, scaleProportion: 2, image: "" };
    down = { name: 'topoDown', pos: { x: "", y: "" }, scaleProportion: 2, image: "" };

    //botón
    o1 = button({ id: 1, pos: { x: 400, y: 150 }, functionality: this.Change });
    o2 = button({ id: 2, pos: { x: 650, y: 150 }, functionality: this.Change });
    o3 = button({ id: 3, pos: { x: 900, y: 150 }, functionality: this.Change });
    o4 = button({ id: 4, pos: { x: 400, y: 400 }, functionality: this.Change });
    o5 = button({ id: 5, pos: { x: 650, y: 400 }, functionality: this.Change });
    o6 = button({ id: 6, pos: { x: 900, y: 400 }, functionality: this.Change });
    o7 = button({ id: 7, pos: { x: 400, y: 650 }, functionality: this.Change });
    o8 = button({ id: 8, pos: { x: 650, y: 650 }, functionality: this.Change });
    o9 = button({ id: 9, pos: { x: 900, y: 650 }, functionality: this.Change });




    map = [[this.o1, this.o2, this.o3],
    [this.o4, this.o5, this.o6],
    [this.o7, this.o8, this.o9]];

    constructor() {

        super("topoz");
        {
        };


    }

    //a la hora de hacer el create en las escenas heredadas añadir un super para que se cargen ambos recursos
    preload() {
        this._wallpaper = Data.wallpapers.blueWallpaper;
    }

    create() {
        super.create();


        for (let n = 0; n < this.map.length; n++) {
            for (let j = 0; j < this.map[n].length; j++) {
                this.ChangeObj(this.map[n][j]);
            }
        }

        this.inicialize = true;

    }

    /**
     * Cambia todos los topos afectados por la zona según donde se haya clickeado, mostrando la cara contraria a la actual en ellos,
     * y comrpobando si todos los topos volteados, y el puzle, resuelto.
     */
    Change() {
        let pos = { x: this.x, y: this.y };
        let obj = this.scene.GetObj(pos);
        this.scene.ChangeObj(obj);

        let indice = this.scene.GetArrayPos(obj.id);

        for (let n = indice.v1 + 1; n < this.scene.map.length; n++)
            this.scene.ChangeObj(this.scene.map[n][indice.v2]);

        for (let n = indice.v1 - 1; n >= 0; n--)
            this.scene.ChangeObj(this.scene.map[n][indice.v2]);


        for (let n = indice.v2 + 1; n < this.scene.map.length; n++)
            this.scene.ChangeObj(this.scene.map[indice.v1][n]);

        for (let n = indice.v2 - 1; n >= 0; n--)
            this.scene.ChangeObj(this.scene.map[indice.v1][n]);


        this.scene.CheckPuzzle();

    }

    /**
     * Voltea al topo, y en caso de ser la primera vez, 
     * le añade el botón para que pueda ser modificado
     * por el jugador.
     * @param {Topo} obj el topo que debe ser mvolteado
     */
    ChangeObj(obj) {

        if (this.inicialize)
            obj.right = !obj.right;
        else this.addSpecialButton(obj);

        if (obj.right === true) {
            this.up.pos = { x: obj.pos.x, y: obj.pos.y };
            this.spawnImage(this.up);

        }
        else {
            this.down.pos = { x: obj.pos.x, y: obj.pos.y };
            this.spawnImage(this.down);
        }
    }

    /**
     * Obtiene la posición del topo específico dentro del array bidimensional para 
     * poder modificar los que estan en su misma fila y columna
     * @param {int} id el identificador del topo para poder ser reconocido
     * @returns devuelve el pair v1,v2 con su posición
     */
    GetArrayPos(id) {
        for (let n = 0; n < this.map.length; n++) {
            for (let j = 0; j < this.map[n].length; j++) {
                if (this.map[n][j].id === id) {
                    let indice = { v1: n, v2: j };
                    return indice;
                }
            }
        }

    }

    /**
     * Devuelve el topo según la posición seleccionada
     * @param {pair: x,y} pos 
     * @returns el objeto "topo" 
     */
    GetObj(pos) {
        for (let n = 0; n < this.map.length; n++) {
            for (let j = 0; j < this.map[n].length; j++) {
                if (this.map[n][j].pos.x === pos.x && this.map[n][j].pos.y === pos.y) {

                    return this.map[n][j];
                }
            }
        }

    }

    /**
     * Comprueba si todos los topos están dados la vuelta, 
     * y en caso correcto, da por concluido el puzle
     */
    CheckPuzzle() {
        let allDown = true;
        for (let n = 0; n < this.map.length && allDown === true; n++) {
            for (let j = 0; j < this.map[n].length && allDown === true; j++) {
                allDown = !this.map[n][j].right;
            }
        }



        if (allDown) {
            console.log("completado");
            this.scene.scene.LoadScene();
        }
    }


}

/**
 * Se le da a los diferentes topos las propiedades comunes para todos 
 * con las que completar su funcionamiento
 * @param {boton} obj 
 * @returns el objeto con los valores dados
 */
function button(obj) {

    const template =
    {
        name: 'transparent',
        pos: "",
        scaleProportion: 1,
        id: "",
        right: true

    }

    return Object.assign(template, obj);

}
