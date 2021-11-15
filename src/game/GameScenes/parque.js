/**
 * Escena del parque
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import OBJETO from "../../ArchivosIniciales/objeto.js";

 export default class Parque extends Phaser.Scene { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'parque' });
        {

        };

    }
}