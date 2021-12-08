import Objeto from './objeto.js';

export default class NPC extends Objeto{

  isClicked = false;
  objective = false;
  texto = "";
  solved = false;
  box;
  puzzle = null;
  first;
  second;
  // VARIABLES PARA LA VENDEDORA Y EL PUZLE DE LA CARTA -> solo se activa el puzle una vez entregada la carta
  esVendedora = false;
  cartaEntregada = false;

  constructor(sprite, x, y, esc, nom, e, puz, f, l, tienePuzle){

    super(sprite, x, y, esc, nom, e);
    this.functionality = this.moverAlInventario;
    this.puzzle = puz;
    this.first = f;
    this.last = l;
      
    this.esVendedora = tienePuzle;

  }

  saveText(text)
  {
    this.texto = text;
    this.loadDialogue();
  }


  loadDialogue()
  {
    this.box = this.scene.add.image(this.scene.cameras.main.width / 2.5,this.scene.cameras.main.height- 155 , 'box');  
    this.box.setScale(this.scene.scale/1.35).setScrollFactor(0);

    let text = this.scene.add.text(this.scene.cameras.main.width/3.8 , this.scene.cameras.main.height-185, this.texto, 
      { fontSize:'30px',color:'#000000',fontFamily: 'Arial'});

    this.box.setInteractive();
    this.box.on('pointerdown', function(f){
      this.destroyDialogue(this.box, text);
    }, this);
  }

  destroyDialogue(img, dialogue)
  {
    img.destroy();
    dialogue.destroy();

    if (!this.esVendedora && !this.solved && this.puzzle != null)
    {
      this.scene.gameManager.saveTime(this.scene.timedEvent.delay - this.scene.timedEvent.getElapsed());
      this.scene.timedEvent.remove(false); // cancelo el timer anterior
      this.scene.scene.start(this.puzzle);
      this.solved = true;
      gameManager.addPoints();
      console.log("esto lo hago");
    }else if (this.esVendedora && this.cartaEntregada && !this.solved){
      this.scene.gameManager.saveTime(this.scene.timedEvent.delay - this.scene.timedEvent.getElapsed());
      this.scene.timedEvent.remove(false); // cancelo el timer anterior
      this.scene.scene.start(this.puzzle);
      this.solved = true;
      gameManager.addPoints();
      
      console.log("esto lo hago");
    }
      
  }
  
}