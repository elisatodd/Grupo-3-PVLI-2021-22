/**
 * Escena del menu pausa
 * @extends EscenaMenu
 */
 import EscenaMenu from '../escenaMenu.js';
 import Object from "../Objects/objeto.js";

 export default class MenuPausa extends EscenaMenu {
    
    first = true;


    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'menuPausa' });
        {

        };
    }

    preload(){
        this._wallpaper = {name: 'pause ', route: './assets/images/pueblo.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){
            this.playButton = new Object('./assets/images/playbutton.png', 400, 300, 2, 'play', this);
        }

        this.loadImage(this.playButton);
    }


 }