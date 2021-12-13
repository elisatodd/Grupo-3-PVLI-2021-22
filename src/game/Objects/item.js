import NPC from './NPC.js';
import Objeto from './objeto.js';

export default class item extends Objeto{

    isClicked = false;
    pointer = this.scene.input.activePointer;

    iniposx;
    iniposy;
    canDrag = false;

    /**
     * 
     * @param {Data} newItem Datos del objeto que se quiere crear, obtenidos de Data.js
     * @param {Escena} scene Escena en la que se va a encontrar el objeto
     */
    constructor(newItem, scene){
      super(newItem, scene);
      //los items tienen como funcionalidad colocarse en el inventario siempre
      this.functionality = 'moveToInventory';
    }

    moverAlInventario(){
      this.e.gameManager.moverAlInventario(this);
      this.e.moverAlInventario(this.e.gameManager.objetosEnInventario, dirImagen, 725, 100 + (this.e.gameManager.objetosEnInventario*100), escala*2 );

      //Cambiar funcionalidad a arrastrar
        
    }

    
    moveToInv(scene){

      if(scene !== undefined)this.scene = scene;
        
      this.scene.objects = this.scene.objects.filter(item => item !== this);

      this.image.destroy();
      let x = 1380;
      let y = this.scene.gameManager.getInventoryPosition();
      this.pos = {x, y};
      this.scene.spawnObjects([this]);
      this.functionality = 'drag';
    }

    
    startdrag()
    {
      
      this.iniposx = this.pos.x;
      this.iniposy = this.pos.y;

      this.scene.input.off('pointerdown', this.startdrag, this);
      this.scene.input.on('pointermove', this.dodrag, this);
      this.scene.input.on('pointerup',this.stopdrag,this);
    }

    dodrag(pointer)
    {
      let x = this.pointer.x;
      let y = this.pointer.y;

      this.pos = {x, y};

      this.image.destroy();
      this.scene.spawnObjects([this]);
    }

    stopdrag()
    {
      this.scene.input.off('pointermove', this.dodrag, this);
      this.scene.input.off('pointerup',this.stopdrag,this);

      let x = this.iniposx;
      let y = this.iniposy;
      this.pos = {x, y};

      this.image.destroy();

      if(!this.scene.gameManager.checkObjects(this))
      {
        this.scene.spawnObjects([this]);
      }


    }
   
  }