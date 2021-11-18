/**
 * Escena de la caseta de feria
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import OBJETO from "../../ArchivosIniciales/objeto.js";
 import GAMEMANAGER from "../../ArchivosIniciales/gameManager.js";

 export default class CasetaFe extends Phaser.Scene { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

  
    GameManager;
    //determinan que flechas hay que dibujar en la escena
    escenArriba = false;
    escenAbajo = false;
    escenIzq = true;
    escenDcha = true;
  
    cirquense;
    cirquenseImg;
    characters = [];
    charactersImg = [];
  
    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'carpadecirco' });
      {
  
      };
  
    }
  
  preload(){
      console.log("Escena creada");
      //Carga de las flechas y el fondo
      this.load.image('flechaIzq','./assets/images/flechaIzq.png');
      this.load.image('flechaDer','./assets/images/flechaDcha.png');
      this.load.image('wallpaper', './assets/images/carpadecirco.jpg');
      this.load.image('cirquense', './asstes/images/cirquense.png');
    }
  
    create(){
      console.log("Escena Carpa de circo");
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

      if (this.escenDcha){
        this.flechaDerecha= new OBJETO('flechaDcha',750,this.cameras.main.height / 2, 10,"flechaDch",'imgFlechaDch');
        this.imgFlechaDch=this.add.image(this.flechaDerecha.damePosicion().x, this.flechaDerecha.damePosicion().y, this.flechaDerecha.dameImagen());
        this.imgFlechaDch.setScale(this.scale/this.flechaDerecha.dameEscala()).setScrollFactor(0);
        this.flechaDerecha.guardarEscena(this);

        this.imgFlechaDch.setInteractive();

        this.imgFlechaIzq.on('pointerdown',function (f){
        this.GameManager.changeScene('Dcha', null, this);}, this);
      }
  
      this.cirquense = new OBJETO('cirquense', 200, this.cameras.main.height - 200, 1, "a", 'cirquenseImg');
      this.cirquense.guardarEscena(this);
      this.cirquenseImg = this.add.image(this.cirquense.damePosicion().x, this.cirquense.damePosicion().y, this.cirquense.dameImagen());
      this.cirquenseImg.setScale(this.scale/this.cirquense.dameEscala()).setScrollFactor(0);
  
      this.characters = [this.cirquense];
      this.charactersImg = [this.cirquenseImg];
  
      this.characters[0].guardarTexto("Ayudame a que todo salga bien!");
      this.charactersImg[0].setInteractive();
      this.charactersImg[0].on('pointerdown', function (f){
        this.characters[0].cargarDialogo(this.charactersImg[0]);
      }, this)
  
    }
  
  }