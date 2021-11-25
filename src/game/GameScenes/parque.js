/**
 * Escena de la parque
 * @extends EscenaJuego
 */

 import EscenaJuego from "../escenaJuego.js";

 import OBJETO from "../Objects/objeto.js";

 export default class Parque extends EscenaJuego {

   constructor(){
     // Nombre de la escena para el SceneManager
     super({ key: 'parque' });
     {
     };

     this.arrows = [false, false, true, false];
     this.arrowsDirs = [false, false, 'mercado', false];

   }
 
   preload(){

     this._wallpaper = {name: 'parque', route: './assets/images/parque.jpg'};
     this.loadImage(this._wallpaper);

     this.AddCharacter(new OBJETO('./assets/images/enamorado.png', 200, this.cameras.main.height - 200, 2.5, 'enamorado', this));
     this.AddObject(new OBJETO('./assets/images/caja.png', 600, this.cameras.main.height - 200, 5, 'caja', this)); 
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

    console.log("Escena Parque");
  }


  moveToInv(obj){
    obj.image.destroy();
    let x = 725;
    let y = this.gameManager.getInventoryPosition();
    obj.pos = {x, y};
    this.spawnObjects([obj]);
    obj.assignFunctionality('drag');
  }
}