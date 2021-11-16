import Puzzle from "../../ArchivosIniciales/PuzzleScene.js";
import Casa from "./casa.js";
import OBJETO from "../../ArchivosIniciales/objeto.js";
import GAMEMANAGER from "../../ArchivosIniciales/gameManager.js";

import EscenaJuego from '../escenaJuego.js';

/**
 * Escena de la calle
 * @extends Phaser.Scene
 */

 export default class Calle extends Phaser.Scene { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

  GameManager;

  mujerGato;
  mujerImg;
  flor;
  florImg;
  characters = [];
  charactersImg = [];
  objects = [];
  objectsImg = [];

  constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'calle' });
      {

      };
  }

  preload(){
      console.log("Escena creada");

      this.GameManager = new GAMEMANAGER(this.game);
      this.GameManager.loadElements();

      //Carga de las flechas, personajes, fondos y los objetos
      this.load.image('flechaDcha','./assets/images/flechaDcha.png');
      this.load.image('flechaIzq','./assets/images/flechaIzq.png');
      this.load.image('flechaArr','./assets/images/flechaArr.png');
      this.load.image('wallpaper', './assets/images/pueblo.jpg');
      this.load.image('flor', './assets/images/flor.png');
      this.load.image('mujerGato', './assets/images/mujerGato.png');

  }

  create(){

    console.log("Escena Calle");
    let wallpaper =  this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'wallpaper');
    
    //obtiene el tamaño de la cámara
    let scaleX = this.cameras.main.width / wallpaper.width;
    let scaleY = this.cameras.main.height / wallpaper.height;
    this.scale = Math.max(scaleX, scaleY);

    //lo escala a esta        
    wallpaper.setScale(this.scale).setScrollFactor(0);
      
    //Coloco las flechas
    //Derecha
    this.flechaDerecha = new OBJETO('flechaDcha',750,this.cameras.main.height / 2, 10,"flechaDcha",'imgFlechaDch');
    this.imgFlechaDch = this.add.image(this.flechaDerecha.damePosicion().x, this.flechaDerecha.damePosicion().y, this.flechaDerecha.dameImagen());
    this.imgFlechaDch.setScale(this.scale/this.flechaDerecha.dameEscala()).setScrollFactor(0);
    this.flechaDerecha.guardarEscena(this);

    this.imgFlechaDch.setInteractive();

    //izquierda
    this.flechaIzquierda = new OBJETO('flechaIzq',50,this.cameras.main.height / 2 , 10,"flechaIzq",'imgFlechaIzq');
    this.imgFlechaIzq = this.add.image(this.flechaIzquierda.damePosicion().x, this.flechaIzquierda.damePosicion().y, this.flechaIzquierda.dameImagen());
    this.imgFlechaIzq.setScale(this.scale/this.flechaIzquierda.dameEscala()).setScrollFactor(0);
    this.flechaIzquierda.guardarEscena(this);

    this.imgFlechaIzq.setInteractive();

    //Arriba
    this.flechaArriba = new OBJETO('flechaArr',this.cameras.main.width / 2,50,10,"flechaArr",'imgFlechaArr');
    this.imgFlechaArr = this.add.image(this.flechaArriba.damePosicion().x, this.flechaArriba.damePosicion().y, this.flechaArriba.dameImagen());
    this.imgFlechaArr.setScale(this.scale/this.flechaArriba.dameEscala()).setScrollFactor(0);
    this.flechaArriba.guardarEscena(this);

    this.imgFlechaArr.setInteractive();

    this.imgFlechaDch.on('pointerdown',function (f){
        this.GameManager.changeScene('Dcha', null, this);
        //this.scene.start('casa');
    }, this);
    this.imgFlechaIzq.on('pointerdown',function (f){
        this.GameManager.changeScene('Izq', null, this);
        //this.scene.start('casa');
    }, this);
    this.imgFlechaArr.on('pointerdown',function (f){
        this.GameManager.changeScene('Arr', null, this);
        //this.scene.start('casa');
    }, this);

    this.mujerGato = new OBJETO('mujerGato', 200, this.cameras.main.height - 200, 1, "a", 'mujerImg');
    this.mujerGato.guardarEscena(this);
    this.mujerImg = this.add.image(this.mujerGato.damePosicion().x, this.mujerGato.damePosicion().y, this.mujerGato.dameImagen());
    this.mujerImg.setScale(this.scale/this.mujerGato.dameEscala()).setScrollFactor(0);

    this.characters = [this.mujerGato];
    this.charactersImg = [this.mujerImg];

    this.flor = new OBJETO('flor', 550, this.cameras.main.height - 70, 7.5, "a", 'florImg');
    this.flor.guardarEscena(this);
    this.florImg = this.add.image(this.flor.damePosicion().x, this.flor.damePosicion().y, this.flor.dameImagen());
    this.florImg.setScale(this.scale/this.flor.dameEscala()).setScrollFactor(0);

    this.objects = [this.flor];
    this.objectsImg = [this.florImg];

    this.objectsImg[0].setInteractive();
    this.objectsImg[0].on('pointerdown', function (f){
      this.objects[0].recogerObjeto(this.objectsImg[0], this.objects[0]);
    }, this);

    this.charactersImg[0].setInteractive();
    this.charactersImg[0].on('pointerdown', function (f){
      this.characters[0].cargarDialogo();
    }, this)
    // LO IDEAL ES HACER UN FOR PARA LO DE ARRIBA
    // let j;
    // for (j = 0; j < this.objects.length; ++j){        
    //   this.objectsImg[j].setInteractive();
    //   this.objectsImg[j].on('pointerdown', function (f, j){
    //     this.objects[j.valueOf()].recogerObjeto(this.objectsImg[j.valueOf()], this.objects[j.valueOf()]);
    //   }, this);
    // }
  }

  moverAlInventario(posInv, obj, xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
    // Las posiciones dependen de cuantos objetos haya en el inventario
    let inv1 = this.add.image(xPosition, yPosition, obj); 
    inv1.setScale(this.scale/itemScale).setScrollFactor(0);
  }

}