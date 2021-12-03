/**
 * Escena del menñu principal
 * @extends EscenaMenu
 */
 import EscenaMenu from '../escenaMenu.js';
 import Object from "../Objects/objeto.js";

 export default class MenuPrincipal extends EscenaMenu {
    
    first = true;
    playButton;
    hsButton;

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'menuPrincipal' });
        {

        };
    }

    preload(){
        this._wallpaper = {name: 'mainmenu ', route: './assets/images/pueblo.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){
            this.playButton = new Object('./assets/images/playbutton.png', this.cameras.main.width/2, this.cameras.main.height/2 - 50, 2, 'play', this);
            this.hsButton = new Object('./assets/images/hsbutton.png', this.cameras.main.width/2, this.cameras.main.height/2 + 110, 2, 'highscore', this);
        }

        this.loadImage(this.playButton);
        this.loadImage(this.hsButton);
    }

    create(){        
        
        this.createGameManager(this.game, this);
        console.log(this.gameManager);

        this._wallpaper = this.spawnWallpaper(this._wallpaper);
        this.playButton.assignFunctionality('startGame');
        this.hsButton.assignFunctionality('showHighScore');

        if (this.first){
            this.addBottom(this.playButton);
            this.addBottom(this.hsButton);
            this.first = false;
        }
    }
}