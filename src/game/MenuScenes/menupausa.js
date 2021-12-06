/**
 * Escena del menu pausa
 * @extends EscenaMenu
 */
 import EscenaMenu from '../escenaMenu.js';
 import Object from "../Objects/objeto.js";

 export default class MenuPausa extends EscenaMenu {
    
    first = true;
    pausa;

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'menuPausa' });
        {

        };
    }

    preload(){
        this._wallpaper = {name: 'wallpaper ', route: './assets/images/pueblo.jpg'};
        this.loadImage(this._wallpaper);

            this.pausa = new Object('./assets/images/botonpausa.png', 400, 300, 2, 'returnPause', this);
        

        this.loadImage(this.pausa);
    }

    create(){        
        
        this.createGameManager(this.game, this);

        this._wallpaper = this.spawnWallpaper(this._wallpaper);

       
                
            this.pausa.assignFunctionality('startGame');
            this.addBottom(this.pausa);

    }
 }