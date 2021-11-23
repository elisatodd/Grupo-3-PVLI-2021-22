/**
 * Escena de la sombrereria
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";

 import OBJETO from "../Objects/objeto.js";

 export default class Sombrereria extends EscenaJuego {

   constructor(){
     // Nombre de la escena para el SceneManager
     super({ key: 'sombrereria' });
     {
     };

     this.arrows = [false, false, true, false];

   }
 

   
   preload(){

     this._wallpaper = {name: 'sombrereria', route: './assets/images/sombrereria.jpg'};
     this.loadImage(this._wallpaper);

     this.AddCharacter(new OBJETO('./assets/images/clienta.png', 200, this.cameras.main.height - 200, 1, 'clienta', this));
     this.AddCharacter(new OBJETO('./assets/images/vendedora.png', 200, this.cameras.main.height - 200, 1, 'vendedora', this));

     this.createArrows();
     this.loadArrows();

   }




   create(){
    this._wallpaper = this.spawnWallpaper(this._wallpaper);
    
    //this.spawnObjects(this.objects);

    this.spawnObjects(this.characters);

    //this.assignObjects(this.objects);
    
    this.spawnArrows();

    console.log("Escena Sombrereria");
  }

}