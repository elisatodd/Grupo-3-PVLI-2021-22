/**
 * Escena de la feria
 * @extends EscenaJuego
 */
 import EscenaJuego from '../escenaJuego.js';  
 import OBJETO from "../Objects/objeto.js";

 export default class Feria extends EscenaJuego {

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'feria' });
        {

        };
        this.arrows = [true, true, true, false];
    }

    preload(){
        this._wallpaper = {name: 'feria ', route: './assets/images/carpadecirco.jpg'};
        this.loadImage(this._wallpaper);

        this.AddCharacter(new OBJETO('./assets/images/cirquense.png', 200, this.cameras.main.height - 200, 1, 'cirquense', this));
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
    
        console.log("Escena Feria");
    }
}