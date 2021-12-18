
export default class OBJETO{
 
  clicked = false;
  scene;
  route;
  pos;
  scaleProportion;
  functionality;
  name;
  image;
  direction; // a donde señala la flecha

  text = "  ";
  box;

  /**
   * 
   * @param {Data} object Conjunto de info. del objeto obtenida de data.js
   * @param {Scene} e escena en la que está el objeto
   */
  constructor(object, e){
    this.route = object.sprite; 
    let x = object.x;
    let y = object.y;
    this.pos = {x, y};
    this.scaleProportion = object.scale;
    this.name = object.name;
    this.scene = e;
  }

  assignFunctionality(func) {
    this.functionality = func;
  }

  assignDir(d){
    this.direction = d;
  }
  
  llamaGM(){
    this.scene.GameManager.metodo();
  }

  recogerObjeto(img, obj) { // Lo manda al inventario
    //clicada = true;
    // NO FUNCIONA this.GameManager.moveImage(this, this.buscarObjeto(this.nombre), this.buscarObjeto(this.nombre).dirImagen);
    this.scene.GameManager.moveImage(this.scene, img, obj.dirImagen, this.escala);
  }

  esClicada(){
    return clicada;
  }


  guardarTexto(text)
  {
    texto = text;
  }


  cargarDialogo(obj)
  {
    this.scene.load.image('box', './assets/images/box.png');

    this.box = this.scene.add.image(this.scene.cameras.main.width / 2, 700, 'box');  
    this.box.setScale(this.scene.scale/1.35).setScrollFactor(0);
   
    //var textConfig={fontSize:'25px',color:'#000000',fontFamily: 'Arial'};  
    //this.add.text(this.cameras.main.width/3.5, 480, texto, textConfig);

    let text = this.scene.add.text(this.scene.cameras.main.width/3.5, 480, texto, 
      { fontSize:'25px',color:'#000000',fontFamily: 'initialFont'});

    this.box.setInteractive();
    this.box.on('pointerdown', function(f){
      this.obj.quitarDialogo(this.box, text);
    }, this);

    //this.box.on('pointerdown',text.destroy, this);
  }

  quitarDialogo(img, dialogo)
  {
    img.destroy();
    dialogo.destroy();
  }
}