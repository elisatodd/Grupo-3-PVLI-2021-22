/**
 * Escena de la plaza
 * @extends EscenaJuego
 */

  import EscenaJuego from "../escenaJuego.js";
  //preguntar guille si se puede quitar de algua manera
  import OBJETO from "../Objects/objeto.js";
 
  export default class Plaza extends EscenaJuego {

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'plaza' }); 
      {
        
      };
      this.arrows = [true, true, false, true];
      this.arrowsDirs = ['calle', 'casa', false, 'bosque'];

    }
  
    preload(){

      this._wallpaper = {name: 'plaza', route: './assets/images/pueblo.jpg'};
      this.loadImage(this._wallpaper);

      this.AddObject(new OBJETO('./assets/images/moneda.png', 200, this.cameras.main.height - 70, 14, 'moneda', this));
      this.AddObject(new OBJETO('./assets/images/cafeteria.png', 600, this.cameras.main.height - 200, 3, 'cafeteria', this)); // Primero estará cerrada

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

      console.log("Escena Plaza");
    }
  
    moverAlInventario(posInv, obj, xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
      // Las posiciones dependen de cuantos objetos haya en el inventario
      let inv1 = this.add.image(xPosition, yPosition, obj); 
      inv1.setScale(this.scale/itemScale).setScrollFactor(0);
    }
  
  }