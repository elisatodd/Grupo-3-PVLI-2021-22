/**
 * Escena del bosque
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import OBJETO from "../Objects/objeto.js";

 export default class Bosque extends EscenaJuego { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'bosque' });
        {

        };
        this.arrows = [false, false, true, true];
    }

    preload(){
        this._wallpaper = {name: 'bosque ', route: './assets/images/pueblo.jpg'};
        this.loadImage(this._wallpaper);

        this.AddCharacter(new OBJETO('./assets/images/policia.png', 200, this.cameras.main.height - 200, 1, 'policia', this));
        this.AddCharacter(new OBJETO('./assets/images/campesino.png', 200, this.cameras.main.height - 200, 1, 'campesino', this));
        this.AddObject(new OBJETO('./assets/images/pajarita.png', 550, this.cameras.main.height - 70, 7.5, 'pajarita', this));
        this.loadObjects(this.objects);
        this.loadObjects(this.characters);

        this.createArrows();
        this.loadArrows();
    }

    create(){
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
         
        this.spawnObjects(this.objects);
        this.spawnObjects(this.characters);
        this.assignObjects(this.objects);
        
        this.spawnArrows();
    
        console.log("Escena Bosque");
    }
}