import Objeto from './objeto.js';

export default class NPC extends Objeto{

    isClicked = false;

    constructor(sprite, x, y, esc, nom, e){

        super(sprite, x, y, esc, nom, e);
        this.functionality = this.moverAlInventario;
    }

  
}