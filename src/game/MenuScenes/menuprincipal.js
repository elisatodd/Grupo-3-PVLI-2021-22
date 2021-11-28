/**
 * Escena del menñu principal
 * @extends EscenaMenu
 */
 import EscenaMenu from '../escenaMenu.js';
 import Object from "../Objects/objeto.js";

 export default class Bosque extends EscenaMenu {
    
    first = true;

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'EscenaMenu' });
        {

        };
    }

    preload(){
        this._wallpaper = {name: 'mainmenu ', route: './assets/images/wallpaperWeb.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){
            //this.AddObject(new Object('./assets/images/playbutton.png', 550, this.cameras.main.height - 70, 10, 'play', this));
        }

    }

    create(){
        
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
    }
}