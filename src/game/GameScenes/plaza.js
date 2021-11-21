/**
 * Escena de la plaza
 * @extends EscenaJuego
 */

  import EscenaJuego from "../escenaJuego.js";

//preguntar guille si se puede quitar de algua manera
import OBJETO from "../Objects/objeto.js";
 
 
  export default class Plaza extends EscenaJuego {

    escenIzq = true;

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'plaza' });
      {
      };

      

    }
  
    preload(){

      this._wallpaper = {name: 'plaza', route: './assets/images/pueblo.jpg'};
      this.loadImage(this._wallpaper);

      this.AddObject(new OBJETO('./assets/images/moneda.png', 200, this.cameras.main.height - 70, 14, 'moneda', this));
      this.AddObject(new OBJETO('./assets/images/cafeteria.png', 600, this.cameras.main.height - 200, 3, 'cafeteria', this)); // Primero estará cerrada

      this.loadObjects(this.objects);


      this.createArrows();
      this.loadArrows();

      
     

      //this.AddCharacter(new OBJETO('./assets/images/policia.png', 400, this.cameras.main.height - 300, 1, "cargarDialogo", 'policia', this)); // Más tarde desaparecerá
      

    }
  
    create(){
      
      this._wallpaper = this.spawnWallpaper(this._wallpaper);
     
      this.spawnObjects(this.objects);

      this.assignObjects(this.objects);
      
      this.spawnArrows();

      console.log("Escena Plaza");
      
  
      //lo escala a esta        
    
        
    }
  
    moverAlInventario(posInv, obj, xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
      // Las posiciones dependen de cuantos objetos haya en el inventario
      let inv1 = this.add.image(xPosition, yPosition, obj); 
      inv1.setScale(this.scale/itemScale).setScrollFactor(0);
    }
  
  }