import GameZone from './GameScene.js';
import Puzzle from './PuzzleScene.js';
import GAMEMANAGER from './gameManager.js';


export default class OBJETO{

 
  GameManager = new GAMEMANAGER();
 
    clicada = false;
    escena = null;

  constructor(sprite, x, y, esc, func, nombre){ // necesitaría el sprite, y su posicion inicial, ESCALA, nombre de la funcion a la que llama dentro del GM
    console.log("prueba de la clase objetoooo: " + sprite);  
    
    this.dirImagen = sprite;
    this.pos = {x,y};
    this.escala = esc;
    this.metodo = func;

    
  }
  
  dameImagen(){ // Devuelve la dirección de la imagen del objeto
    console.log(this.dirImagen);
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

  guardarEscena(e){ // No es necesaria
    this.escena = e;
  }

  recogerObjeto() { // Lo manda al inventario
    //clicada = true;
    this.objetoprueba.GameManager.moveImage(this, this.imgprueba, this.objetoprueba.dirImagen);
  }

  esClicada(){
    return clicada;
  }

}

