/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
import EscenaPuzzle from './escenaPuzzle.js'

export default class PuzzleClick extends EscenaPuzzle {

    puzzle = this;

    buttons = [];

    winImage = { name: 'winImage', route: './assets/images/puzzles/win.png', pos: { x: 780, y: 412 }, scaleProportion: 0.7, functionality: this.LoadScenePoints };
    loseImage = { name: 'lossImage', route: './assets/images/puzzles/lose.png', pos: { x: 825, y: 412 }, scaleProportion: 0.8, functionality: this.LoadSceneNoPoints };

    constructor(data) {

        super(data);
        {
        };


    }


    //a la hora de hacer el create en las escenas heredadas añadir un super para que se cargen ambos recursos
    preload() {
        this._wallpaper = { name: 'fondoazul', route: './assets/images/puzzles/bluewallpaper.jpg' };
        this.loadImage(this._wallpaper);

        this.loadImage(this.winImage);
        this.loadImage(this.loseImage);
    }

    create() {

        super.create();
    }


    /**
     * Asignación de la escena ligada a este puzle para poder ser cargada a la finalización de este
     * @param {string} scene: variable con el nombre de la escena
     */
    AssignScene(scene) {
        this.sceneToLoad = scene;

    }

    /**
     * Carga de la escena de juego asociada al puzle
     */
    LoadSceneNoPoints() {
        //this.scene.scene.start(this.scene.sceneToLoad);
        this.scene.scene.start(this.scene.sceneGame)

    }
    LoadScenePoints() {
        this.scene.LoadScene(this.scene);
    }

    /**
     * Crea un botón y lo almacena para ser desacivado una vez s ehaya seleccionado la opción
     * @param {Datos} info parámetros del  botón a crear
     */
    CreateClickPuzzleButton(info) {
        this.addSpecialButton(info);
        this.buttons.push(info.image);
    }

    /**
     * Elimina los botones almacenados en el contendor d ela escena para no permitir
     *  seleccionar otras opcioens una vez picada la primera
     */
    EliminateButtons() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].destroy();
        }
    }

    /**
     * Elimina los demás botones y muestra la imagen asociada a solucionar del puzle como botón, 
     * dando feedback y permitiendo salir al jugador de la escena
     */
    Win() {
        let scene = this.scene;
        scene.addSpecialButton(scene.winImage);
        scene.EliminateButtons();

    }


    /**
     * Elimina los demás botones y muestra el botón asociado a fallar la solución del puzle como botón,
     *  dando feedback y permitiendo salir al jugador de la escena
     */
    Lose() {
        let scene = this.scene;
        scene.EliminateButtons();
        scene.addSpecialButton(scene.loseImage);
    }


}

