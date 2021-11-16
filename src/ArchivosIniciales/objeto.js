import GameZone from './GameScene.js';
import Puzzle from './PuzzleScene.js';
import GAMEMANAGER from './gameManager.js';
import Casa from '../game/GameScenes/calle.js';


let texto = "  ";
let box;

export default class OBJETO{
 
    clicada = false;
    escena = null;
    

  constructor(sprite, x, y, esc, func, nom){ // necesitaría el sprite, y su posicion inicial, ESCALA, nombre de la funcion a la que llama dentro del GM
       
    this.dirImagen = sprite;
    this.pos = {x,y};
    this.escala = esc;
    this.metodo = func;
    this.nombre = nom;
    
  }
  
  
  dameImagen(){ // Devuelve la dirección de la imagen del objeto
    //console.log(this.dirImagen);
    return this.dirImagen;
  }

  damePosicion(){  // Devuelve la posición que lleva el objeto
    return this.pos;
  }
  
  dameEscala(){ // devuelve la escala del item
    return this.escala;
  }
  
  dameFuncion(){ // funcion que pasa en el GM cuando se clickee
    return this.metodo;
  }
  
  dameNombre(){
    return this.nombre;
  }

  guardarEscena(e){ // No es necesaria
    this.escena = e;
  }

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
      this.escena.obj.quitarDialogo(this.box, text);
    }, this);
    
  }

  quitarDialogo(img, umpa)
  {
    img.destroy();
    umpa.destroy();
  }



}

