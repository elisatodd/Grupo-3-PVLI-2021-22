/**
 * Escena del menñu principal
 * @extends EscenaMenu
 */
 import EscenaMenu from '../escenaMenu.js';
 import Object from "../Objects/objeto.js";

 export default class MenuPrincipal extends EscenaMenu {
    
    first = true;
    playButton;

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'MenuPrincipal' });
        {

        };
    }

    preload(){
        this._wallpaper = {name: 'mainmenu ', route: './assets/images/pueblo.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){
            this.playButton = new Object('./assets/images/playbutton.png', 400, 300, 2, 'play', this);
        }

        this.loadImage(this.playButton);
    }

    create(){        
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
        this.playButton.image = this.spawnImage(this.playButton);
        this.playButton.scene = this.scene;
        this.playButton.assignFunctionality('startGame');

        this.createGameManager(this.game, this);
        this.gameManager.loadElements();
        
        if (this.first){
            this.addBottom(this.playButton);
            this.first = false;
        }
    }
}