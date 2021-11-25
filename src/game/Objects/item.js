import Objeto from './objeto.js';

export default class item extends Objeto{

    isClicked = false;
    pointer = this.scene.input.activePointer;

    iniposx;
    iniposy;

    constructor(sprite, x, y, esc, nom, e, make){

        super(sprite, x, y, esc, nom, e);
        this.functionality = this.moverAlInventario;
    }

    moverAlInventario(){
        this.e.gameManager.moverAlInventario(this);
        this.e.moverAlInventario(this.e.gameManager.objetosEnInventario, dirImagen, 725, 100 + (this.e.gameManager.objetosEnInventario*100), escala*2 );

        //Cambiar funcionalidad a arrastrar
        
    }

    
    moveToInv(scene){

      if(scene !== undefined)this.scene = scene;
      
        this.image.destroy();
        let x = 725;
        let y = this.scene.gameManager.getInventoryPosition();
        this.pos = {x, y};
        this.scene.spawnObjects([this]);
        this.functionality = 'drag';
    }

    
    startdrag()
    {

      this.iniposx = this.x;
      this.iniposy = this.y;

      this.scene.input.off('pointerdown', this.startdrag, this);
      this.scene.input.on('pointermove', this.dodrag, this);
      this.scene.input.on('pointerup',this.stopdrag,this);

      console.log("A");

    }

    dodrag(pointer)
    {
      let x = this.pointer.x;
      let y = this.pointer.y;

      this.pos = {x, y};

      this.scene.spawnObjects([this]);
      console.log("B "+ this.pos.x);

    }

    stopdrag(obj)
    {
      this.scene.input.on('pointerdown', this.startdrag, this);
      this.scene.input.off('pointermove', this.dodrag, this);
      this.scene.input.off('pointerup',this.stopdrag,this);

      obj.x = this.iniposx;
      obj.y = this.iniposy;

      console.log("C");

    }
   
  }