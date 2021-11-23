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

   }
 
   preload(){

     this._wallpaper = {name: 'mercado', route: './assets/images/mercado.jpg'};
     this.loadImage(this._wallpaper);

     this.AddCharacter(new OBJETO('./assets/images/carnicero.png', 200, this.cameras.main.height - 200, 1, 'carnicera', this));
     this.AddObject(new OBJETO('./assets/images/pez.png', 600, this.cameras.main.height - 200, 3, 'pez', this)); 

     this.createArrows();
     this.loadArrows();

   }

   create(){
    this._wallpaper = this.spawnWallpaper(this._wallpaper);
    
    this.spawnObjects(this.objects);

    this.spawnObjects(this.characters);

    this.assignObjects(this.objects);
    
    this.spawnArrows();

    console.log("Escena Mercado");
  }

}