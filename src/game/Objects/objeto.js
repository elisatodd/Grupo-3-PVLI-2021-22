


export default class OBJETO{
 
  clicked = false;
  scene;
  route;
  pos;
  scaleProportion;
  functionality;
  name;
  image;

  text = "  ";
  box;

  constructor(sprite, x, y, esc, nom, e){
       
    this.route = sprite; 
    this.pos = {x,y};
    this.scaleProportion = esc;
    this.name = nom;
    this.scene = e;
    
  }
  
  assignFunctionality(func){
    this.functionality = func;
    this.image.setInteractive();
    this.image.on('pointerdown', function(f){
      GameManager.functionality;
    }, this);
  }

  llamaGM(){
    this.scene.GameManager.metodo();
  }


  // dameImagen(){ // Devuelve la dirección de la imagen del objetoS
  //   return this.route;
  // }

  // damePosicion(){  // Devuelve la posición que lleva el objeto
  //   return this.pos;
  // }
  
  // dameEscala(){ // devuelve la escala del item
  //   return this.escala;
  // }
  
  // dameFuncion(){ // funcion que pasa en el GM cuando se clickee
  //   return this.metodo;
  // }
  
  // dameNombre(){
  //   return this.nombre;
  // }

  // guardarEscena(e){ NO NOS HACE FALTA
  //   this.escena = e;
  // }

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

    this.box = this.scene.add.image(this.scene.cameras.main.width / 2, 500, 'box');  
    this.box.setScale(this.scene.scale/1.35).setScrollFactor(0);
   
    //var textConfig={fontSize:'25px',color:'#000000',fontFamily: 'Arial'};  
    //this.add.text(this.cameras.main.width/3.5, 480, texto, textConfig);

    let text = this.scene.add.text(this.scene.cameras.main.width/3.5, 480, texto, 
      { fontSize:'25px',color:'#000000',fontFamily: 'Arial'});

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