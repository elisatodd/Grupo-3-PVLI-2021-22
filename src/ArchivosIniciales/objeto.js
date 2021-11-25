
let texto = "  ";
let box;

export default class OBJETO{
 
  clicada = false;
  escena;
  route;
  pos;
  scaleProportion;
  functionality;
  name;

  constructor(sprite, x, y, esc, func, nom, e){
       
    this.route = sprite;
    this.pos = {x,y};
    this.scaleProportion = esc;
    this.functionality = func;
    this.name = nom;
    this.escena = e;
    
  }
  
  llamaGM(){
    this.escena.GameManager.metodo();
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
    this.escena.GameManager.moveImage(this.escena, img, obj.dirImagen, this.escala);
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
    this.escena.load.image('box', './assets/images/box.png');

    this.box = this.escena.add.image(this.escena.cameras.main.width / 2, 500, 'box');  
    this.box.setScale(this.escena.scale/1.35).setScrollFactor(0);
   
    //var textConfig={fontSize:'25px',color:'#000000',fontFamily: 'Arial'};  
    //this.add.text(this.cameras.main.width/3.5, 480, texto, textConfig);

    let text = this.escena.add.text(this.escena.cameras.main.width/3.5, 480, texto, 
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