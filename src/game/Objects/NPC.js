import Objeto from './objeto.js';

export default class NPC extends Objeto{

    isClicked = false;

    constructor(sprite, x, y, esc, nom, e){

        super(sprite, x, y, esc, nom, e);
        this.functionality = this.moverAlInventario;
    }


    
  guardarTexto(text)
  {
    texto = text;
    this.cargarDialogo(obj);
  }


  cargarDialogo(obj)
  {
    this.escena.load.image('box', '.../assest/images/box.png');

    this.box = this.escena.add.image(this.escena.cameras.main.width / 2, 500, 'box');  
    this.box.setScale(this.escena.scale/1.35).setScrollFactor(0);

    let text = this.escena.add.text(this.escena.cameras.main.width/3.5, 480, texto, 
      { fontSize:'25px',color:'#000000',fontFamily: 'Arial'});

    this.box.setInteractive();
    this.box.on('pointerdown', function(f){
      this.obj.quitarDialogo(this.box, text);
    }, this);
  }

  quitarDialogo(img, dialogo)
  {
    img.destroy();
    dialogo.destroy();
  }
  
}