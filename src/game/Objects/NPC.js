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

  constructor(npc, scene){

    super(npc, scene);

    this.puzzle = npc.puzzle;
    this.first = npc.first;
    this.last = npc.last;
    this.esVendedora = npc.vendedora;

    // Los NPC siempre tienen la función de cargar diálogo
    this.functionality = 'cargarDialogo';
  }

  /**
   * Guarda el texto y llama a la creación de este en pantalla
   * @param {string} text texto a mostrar y guardar
   */
  saveText(text)
  {
    this.texto = text;
    this.loadDialogue();
  }

/**
 * Muestra el diálogo en pantalla, creando su función y el marco sobr l que se muestra
 */
  loadDialogue()
  {
    this.box = this.scene.add.image(this.scene.cameras.main.width / 2.5,this.scene.cameras.main.height- 155 , 'box');  
    this.box.setScale(this.scene.scale/1.35).setScrollFactor(0);

    let text = this.scene.add.text(this.scene.cameras.main.width/4.5 , this.scene.cameras.main.height-230, this.texto, 
      { fontSize:'30px',color:'#000000',fontFamily: 'Arial'});

    this.box.setInteractive();
    this.box.on('pointerdown', function(f){
      this.destroyDialogue(this.box, text);
    }, this);
  }

  /**
   * Destruye el diálogo y la imagen solicitados
   * @param {Iamge} img imagen a ser eleminada
   * @param {String} dialogue diálogo a ser eliminado
   */
  destroyDialogue(img, dialogue)
  {
    img.destroy();
    dialogue.destroy();

    if (!this.esVendedora && !this.solved && this.puzzle != null)
    {
      this.scene.gameManager.saveTime(this.scene.timedEvent.delay - this.scene.timedEvent.getElapsed());
      this.scene.gameManager.savePoints();
      this.scene.timedEvent.remove(false); // cancelo el timer anterior
      this.scene.scene.start(this.puzzle);
      this.solved = true;
      
    }else if (this.esVendedora && this.cartaEntregada && !this.solved){
      this.scene.gameManager.saveTime(this.scene.timedEvent.delay - this.scene.timedEvent.getElapsed());
      this.solved = true;
      this.scene.gameManager.savePoints();
      this.scene.gameManager.saveUnlocked();
      this.scene.timedEvent.remove(false); // cancelo el timer anterior
      this.scene.scene.start(this.puzzle);
    }
      
  }
  
}