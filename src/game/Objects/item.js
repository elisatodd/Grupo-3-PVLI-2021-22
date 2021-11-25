import Objeto from './objeto.js';

export default class item extends Objeto{

    isClicked = false;
    pointer = this.scene.input.activePointer;
    objmove;


    constructor(sprite, x, y, esc, nom, e, make){

        super(sprite, x, y, esc, nom, e);
        this.functionality = this.moverAlInventario;
    }

    moverAlInventario(){
        this.e.gameManager.moverAlInventario(this);
        this.e.moverAlInventario(this.e.gameManager.objetosEnInventario, dirImagen, 725, 100 + (this.e.gameManager.objetosEnInventario*100), escala*2 );

        //Cambiar funcionalidad a arrastrar
        
    }

    
    moveToInv(){
        this.image.destroy();
        let x = 725;
        let y = this.scene.gameManager.getInventoryPosition();
        this.pos = {x, y};
        this.scene.spawnObjects([this]);
        this.functionality = 'drag';
    }

    
    startdrag(obj)
    {

      this.objectmove(obj);

      this.iniposx = this.objmove.x;
      this.iniposy = this.objmove.y;

      this.scene.input.off('pointerdown', this.startdrag, this);
      this.scene.input.on('pointermove', this.dodrag, this);
      this.scene.input.on('pointerup',this.stopdrag,this);
    }

    dodrag(pointer)
    {
      this.objmove.x = this.pointer.x;
      this.objmove.y = this.pointer.y;
    }

    stopdrag()
    {
      this.scene.input.on('pointerdown', this.startdrag, this);
      this.scene.input.off('pointermove', this.dodrag, this);
      this.scene.input.off('pointerup',this.stopdrag,this);

      this.objmove.x = this.iniposx;
      this.objmove.y = this.iniposy;

      this.objectmove(null);
    }

    objectmove(obj)
    {
        this.objmove = obj;
    }

}