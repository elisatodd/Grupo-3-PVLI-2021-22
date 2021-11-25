/**
 * Escena de la mercado
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";

 import OBJETO from "../Objects/objeto.js";

 export default class Mercado extends EscenaJuego {

   constructor(){
     // Nombre de la escena para el SceneManager
     super({ key: 'mercado' });
     {
     };

     this.arrows = [false, true, false, true];
     this.arrowsDirs = [false, 'calle', false, 'parque'];

   }
 
   preload(){

     this._wallpaper = {name: 'mercado', route: './assets/images/mercado.jpg'};
     this.loadImage(this._wallpaper);

     this.AddCharacter(new OBJETO('./assets/images/carnicero.png', 200, this.cameras.main.height - 200, 0.5, 'carnicera', this));
     this.AddObject(new OBJETO('./assets/images/pez.png', 600, this.cameras.main.height - 200, 8, 'pez', this)); 
     this.loadObjects(this.objects);
     this.loadObjects(this.characters);
 
     this.createArrows();
     this.loadArrows();

   }

   create(){
    this._wallpaper = this.spawnWallpaper(this._wallpaper);

    this.assignArrows();
    this.spawnArrows();

    this.spawnObjects(this.objects);
    this.spawnObjects(this.characters);
    this.assignObjects(this.objects);
    this.assignObjects(this.characters);

    console.log("Escena Mercado");
  }

}