/**
 * Escena de la casa
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import Plaza from './plaza.js';
 import OBJETO from "../../ArchivosIniciales/objeto.js"; 
 import GAMEMANAGER from "../../ArchivosIniciales/gameManager.js";

 export default class Casa extends Phaser.Scene { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

  GameManager;
  //determinan que flechas hay que dibujar en la escena
  escenArriba = false;
  escenAbajo = false;
  escenIzq = true;
  escenDcha = false;

  primo;
  primoImg;
  carta;
  cartaImg;
  sombrero;
  sombreroImg;
  characters = [];
  charactersImg = [];
  objects = [];
  objectsImg = [];

  constructor(){
    // Nombre de la escena para el SceneManager
    super({ key: 'casa' });
    {

    };

  }

preload(){
    console.log("Escena creada");
    //Carga de las flechas y el fondo
    this.load.image('flechaIzq','./assets/images/flechaIzq.png');
    this.load.image('wallpaper', './assets/images/pueblo.jpg');
    this.load.image('sombrero', './assets/images/sobrero.png');
    this.load.image('carta', './asstes/images/carta.png');
    this.load.image('primo', './asstes/images/primo.png');
  }

  create(){
    console.log("Escena Casa");
    let wallpaper =  this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'wallpaper');
    
    //obtiene el tamaño de la cámara
    let scaleX = this.cameras.main.width / wallpaper.width;
    let scaleY = this.cameras.main.height / wallpaper.height;
    this.scale = Math.max(scaleX, scaleY);

    //lo escala a esta        
    wallpaper.setScale(this.scale).setScrollFactor(0);
      
    //Coloco las flechas
    //izquierda
    if(this.escenIzq){
      
      this.flechaIzquierda= new OBJETO('flechaIzq',50,this.cameras.main.height / 2 , 10,"flechaIzq",'imgFlechaIzq');
      this.imgFlechaIzq=this.add.image(this.flechaIzquierda.damePosicion().x, this.flechaIzquierda.damePosicion().y, this.flechaIzquierda.dameImagen());
      this.imgFlechaIzq.setScale(this.scale/this.flechaIzquierda.dameEscala()).setScrollFactor(0);
      this.flechaIzquierda.guardarEscena(this);

      this.imgFlechaIzq.setInteractive();
      
      this.imgFlechaIzq.on('pointerdown',function (f){
      this.GameManager.changeScene('Izq', null, this);
      //this.scene.start('casa');
      }, this);
    }

    this.primo = new OBJETO('primo', 200, this.cameras.main.height - 200, 1, "a", 'primoImg');
    this.primo.guardarEscena(this);
    this.primoImg = this.add.image(this.primo.damePosicion().x, this.primo.damePosicion().y, this.primo.dameImagen());
    this.primoImg.setScale(this.scale/this.primo.dameEscala()).setScrollFactor(0);

    this.characters = [this.primo];
    this.charactersImg = [this.primoImg];

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


    this.characters[0].guardarTexto("He perdido a mi gato :( miau");
    this.charactersImg[0].setInteractive();
    this.charactersImg[0].on('pointerdown', function (f){
      this.characters[0].cargarDialogo(this.charactersImg[0]);
    }, this)

  }

}