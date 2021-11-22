/**
 * Escena de la calle
 * @extends Phaser.Scene
 */
 import OBJETO from "../../ArchivosIniciales/objeto.js";
 import EscenaJuego from '../escenaJuego.js';
 
 export default class Calle extends EscenaJuego {

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'calle' });
    {

    };
    this.arrows = [true, true, false, true];
  }

  preload(){
    this._wallpaper = {name: 'plaza', route: './assets/images/pueblo.jpg'};
    this.loadImage(this._wallpaper);

    this.AddObject(new OBJETO('./assets/images/flor.png', 200, this.cameras.main.height - 70,  7.5, 'flor', this));
    this.AddCharacter(new OBJETO('./assets/images/mujerGato.png', 200, this.cameras.main.height - 200, 1, 'mujer', this));
    this.loadObjects(this.objects);

    this.createArrows();
    this.loadArrows();
    console.log("Escena creada");
  }

  create(){
    this._wallpaper = this.spawnWallpaper(this._wallpaper);
     
    this.spawnObjects(this.objects);

    this.assignObjects(this.objects);
    
    this.spawnArrows();

    console.log("Escena Calle");
  }

  moverAlInventario(posInv, obj, xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
    // Las posiciones dependen de cuantos objetos haya en el inventario
    let inv1 = this.add.image(xPosition, yPosition, obj); 
    inv1.setScale(this.scale/itemScale).setScrollFactor(0);
  }

}