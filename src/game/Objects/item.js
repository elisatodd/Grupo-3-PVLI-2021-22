import Objeto from './objeto.js';

export default class item extends Objeto{

    isClicked = false;

    constructor(sprite, x, y, esc, nom, e){

        super(sprite, x, y, esc, nom, e);
        this.functionality = this.moverAlInventario;
    }

    moverAlInventario(){
        this.e.gameManager.moverAlInventario(this);
        this.e.moverAlInventario(this.e.gameManager.objetosEnInventario, dirImagen, 725, 100 + (this.e.gameManager.objetosEnInventario*100), escala*2 );

        //Cambiar funcionalidad a arrastrar
        
    }

    
    moveToInv(obj){
        obj.image.destroy();
        let x = 725;
        let y = this.gameManager.getInventoryPosition();
        obj.pos = {x, y};
        this.spawnObjects([obj]);
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