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


}