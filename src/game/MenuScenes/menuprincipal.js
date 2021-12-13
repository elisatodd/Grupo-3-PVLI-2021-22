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
    hsBoard;

    backgroundMusic;

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'menuPrincipal' });
        {

        };
    }

    preload(){
        this._wallpaper = {name: 'mainmenu ', route: './assets/images/nuevoFondo.jpg'};
        this.loadImage(this._wallpaper);
        this.load.audio("background", './assets/sounds/Pooka.mp3');
        this.load.audio("winPuzzle", './assets/sounds/ganarPuzzle.wav');
        this.load.audio("losePuzzle", './assets/sounds/perderPuzzle.wav');
        this.load.audio("takeItem", './assets/sounds/recogerObjeto.wav');
        this.load.audio("giveItem", './assets/sounds/ganarObjeto.wav');

        if (this.first){
            this.playButton = new Object('./assets/images/playbutton.png', this.cameras.main.width/2-100, this.cameras.main.height/2 - 100, 2, 'play', this);
            this.hsButton = new Object('./assets/images/hsbutton.png', this.cameras.main.width/2-100, this.cameras.main.height/2 + 110, 2, 'highscore', this);
            this.hsBoard = new Object('./assets/images/HSBoard.png', this.cameras.main.width/2, this.cameras.main.height/2 + 110, 2, 'highscoreBoard', this);
        }

        this.loadImage(this.hsBoard);
        this.loadImage(this.playButton);
        this.loadImage(this.hsButton);
    }

    create(){        
        
        this.createGameManager(this.game, this);

        this._wallpaper = this.spawnWallpaper(this._wallpaper);

        // Para que la música suene desde que se cargue la primera escena
        if (this.sound.context.state === 'suspended') {
            this.sound.context.resume();
        }

        if (this.first){
                
            this.playButton.assignFunctionality('startIntroduction');
            this.hsButton.assignFunctionality('showHighScore');
            this.hsBoard.assignFunctionality('deleteImage');
            
            const config = {
                mute: false,
                volume: 0.25,
                loop: true,
                delay: 0,
            };
            this.backgroundMusic = this.sound.add("background", config);

            this.backgroundMusic.play();

            this.first = false;
        }
        
        this.addBottom(this.playButton);
        this.addBottom(this.hsButton);
    }


}