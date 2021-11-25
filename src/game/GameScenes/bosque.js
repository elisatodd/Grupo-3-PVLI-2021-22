/**
 * Escena del bosque
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";
 import NPC from "../Objects/NPC.js";

 export default class Bosque extends EscenaJuego { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'bosque' });
        {

        };
        this.arrows = [false, false, true, true];
        this.arrowsDirs = [false, false, 'plaza', 'feria'];
    }

    preload(){
        this._wallpaper = {name: 'bosque ', route: './assets/images/pueblo.jpg'};
        this.loadImage(this._wallpaper);

        this.AddCharacter(new NPC('./assets/images/policia.png', 200, this.cameras.main.height - 200, 1, 'policia', this));
        this.AddCharacter(new NPC('./assets/images/campesino.png', 200, this.cameras.main.height - 200, 1, 'campesino', this));
        this.AddObject(new Item('./assets/images/pajarita.png', 550, this.cameras.main.height - 70, 10, 'pajarita', this));
        
        this.loadObjects(this.objects);
        this.loadObjects(this.characters);

        this.createArrows();
        this.loadArrows();
    }

    create(){
    
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
     
      this.assignArrows();
      this.spawnArrows();

      this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
      this.spawnObjects(this.objects);
      this.assignObjects(this.characters, 'cargarDialogo');
      this.spawnObjects(this.characters);
        console.log("Escena Bosque");
    }

}