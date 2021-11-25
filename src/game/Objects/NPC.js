import Objeto from './objeto.js';

export default class NPC extends Objeto{

    isClicked = false;
    objective = false;
    texto = "";
solved = false;
    box;

    constructor(sprite, x, y, esc, nom, e){

        super(sprite, x, y, esc, nom, e);
        this.functionality = this.moverAlInventario;
    }


    
  saveText(text)
  {
    this.texto = text;
    this.loadDialogue();
  }


  loadDialogue()
  {
    

    this.box = this.scene.add.image(this.scene.cameras.main.width / 2, 500, 'box');  
    this.box.setScale(this.scene.scale/1.35).setScrollFactor(0);

    let text = this.scene.add.text(this.scene.cameras.main.width/3.5, 480, this.texto, 
      { fontSize:'25px',color:'#000000',fontFamily: 'Arial'});

    this.box.setInteractive();
    this.box.on('pointerdown', function(f){
      this.destroyDialogue(this.box, text);
    }, this);
  }

  destroyDialogue(img, dialogue)
  {
    img.destroy();
    dialogue.destroy();

    if (!this.solved)
    {
      this.scene.scene.start('telefono');
      this.solved = true;
    }
      
  }
  
}