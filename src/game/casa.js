/**
 * Escena de la casa
 * @extends escenaJuego
 */
 import EscenaJuego from './escenaJuego.js'

 export default class Casa extends EscenaJuego {

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'casa' });

     {
     };
    }
     preload(){
         console.log("Escena creada");
         this.load.image('fondoEscena','./assets/images/fondoPocho.jpg');
     }

     create(){
         console.log("Escena Casa");
        this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'fondoEscena');
     }





 }