/**
 * Escena de la calle
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";
 import NPC from "../Objects/NPC.js";
 
 export default class Calle extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'calle' });
    {

    };
    this.arrows = [true, true, false, true];
    this.arrowsDirs = ['mercado', 'plaza', false, 'sombrereria'];
  }

  preload(){
    this._wallpaper = {name: 'plaza', route: './assets/images/pueblo.jpg'};
    this.loadImage(this._wallpaper);

    this.AddObject(new Item('./assets/images/flor.png', 500, this.cameras.main.height - 70,  7.5, 'flor', this));
    this.AddCharacter(new NPC('./assets/images/mujerGato.png', 200, this.cameras.main.height - 200, 1, 'mujer', this));
    this.loadObjects(this.objects);
    this.loadObjects(this.characters);

    this.createArrows();
    this.loadArrows();
    console.log("Escena creada");
  }

  create(){
    
    this._wallpaper = this.spawnWallpaper(this._wallpaper);
     
    this.assignArrows();
    this.spawnArrows();

    this.assignObjects(this.objects, 'moveToInventory'); // ASSIGN FIRST
    this.spawnObjects(this.objects);
    this.assignObjects(this.characters, 'cargarDialogo');
    this.spawnObjects(this.characters);

    console.log("Escena Calle");
  }
}