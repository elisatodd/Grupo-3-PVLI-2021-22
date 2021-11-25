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
      this.AddCharacter(new OBJETO('./assets/images/cafeteria.png', 600, this.cameras.main.height - 200, 3, 'cafeteria', this)); // Primero estará cerrada

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
  
    // ESTO SE VA A TOMAR POR CULO (no lo quiero borrar por si alguien lo necesita)
    // moverAlInventario(posInv, obj, xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
    //   // Las posiciones dependen de cuantos objetos haya en el inventario
    //   let inv1 = this.add.image(xPosition, yPosition, obj); 
    //   inv1.setScale(this.scale/itemScale).setScrollFactor(0);
    // }

    moveToInv(obj){
      obj.image.destroy();
      let x = 725;
      let y = this.gameManager.getInventoryPosition();
      obj.pos = {x, y};
      this.spawnObjects([obj]);
      obj.assignFunctionality('drag');
    }

/*
    startdrag(pointer, obj)
    {
      this.iniposx = this.objmove.x;
      this.iniposy = this.objmove.y;

      this.input.off('pointerdown', this.startdrag, this);
      this.input.on('pointermove', this.dodrag, this);
      this.input.on('pointerup',this.stopdrag,this);
    }

    dodrag(pointer)
    {
      this.objmove.x = pointer.x;
      this.objmove.y = pointer.y;

    }

    stopdrag()
    {
      this.input.on('pointerdown', this.startdrag, this);
      this.input.off('pointermove', this.dodrag, this);
      this.input.off('pointerup',this.stopdrag,this);

      this.objmove.x = this.iniposx;
      this.objmove.y  = this.iniposy;

      this.objectmove(null);
    }

    objectmove(obj)
    {
      this.objmove = obj;
    }

*/
  }