/**
 * Escena de la casa de los espejos
 * @extends EscenaJuego
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";
  

 export default class CasaEsp extends EscenaJuego { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'casaEspejos' });
        {

        };
        this.arrows = [false, true, false, false];
        this.arrowsDirs = [false, 'feria', false, false];
    }
    
    preload(){
        this._wallpaper = {name: 'espejos ', route: './assets/images/carpadecirco.jpg'};
        this.loadImage(this._wallpaper);

        this.AddCharacter(new NPC('./assets/images/excentrico.png', 200, this.cameras.main.height - 200, 7, 'excentrico', this));
        this.loadObjects(this.characters);

        this.createArrows();
        this.loadArrows();
    }
    
    create(){
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
         
        this.assignArrows();
        this.spawnArrows();

        this.spawnObjects(this.characters);
        this.assignObjects(this.characters);
    
        console.log("Escena Espejos");
    }
 }