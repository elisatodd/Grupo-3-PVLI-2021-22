/**
 * Escena de la plaza
 * @extends EscenaJuego
 */

  import EscenaJuego from "../escenaJuego.js";
  import OBJETO from "../Objects/objeto.js";
 
  export default class Plaza extends EscenaJuego {

    escenIzq = true;

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'plaza' });
      {
      };

    }
  
    preload(){

      //this.GameManager.loadElements();

      this.AddCharacter(new OBJETO('./assets/images/policia.png', 400, this.cameras.main.height - 300, 1, "cargarDialogo", 'policia', this)); // Más tarde desaparecerá
      this.AddObject(new OBJETO('./assets/images/moneda.png', 200, this.cameras.main.height - 70, 14, "moverAlInventario", 'moneda', this));
      this.AddObject(new OBJETO('./assets/images/cafeteria.png', 600, this.cameras.main.height - 200, 3, "cargarDialogo", 'cafeteria', this)); // Primero estará cerrada

      for (let i = 0; i < this.objects.length ; i++){
        this.loadImage(this.objects[i]);
      }
      for (let i = 0; i < this.characters.length ; i++){
        this.loadImage(this.characters[i]);
      }
      //Carga de las flechas, personajes, fondos y los objetos
      //this.loadImage(this.policia);
      // this.load.image('flechaDcha','./assets/images/flechaDcha.png');
      // this.load.image('flechaIzq','./assets/images/flechaIzq.png');
      // this.load.image('flechaArr','./assets/images/flechaArr.png');
      // this.load.image('wallpaper', './assets/images/pueblo.jpg');
      // this.load.image('moneda', './assets/images/moneda.png');
      // this.load.image('policia', './assets/images/policia.png');
      // this.load.image('cafeteria','./assets/images/cafeteria.png');
    }
  
    create(){
  
      console.log("Escena Plaza");
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
          this.scene.start('casa');
      }, this);
      this.imgFlechaIzq.on('pointerdown',function (f){
          this.GameManager.changeScene('Izq', null, this);
          //this.scene.start('calle');
      }, this);
      this.imgFlechaArr.on('pointerdown',function (f){
          this.GameManager.changeScene('Arr', null, this);
          //this.scene.start('bosque');
      }, this);
  
      this.policia = new OBJETO('policia', 400, this.cameras.main.height - 300, 1, "a", 'policiaImg');
      this.policia.guardarEscena(this);
      this.policiaImg = this.add.image(this.policia.damePosicion().x, this.policia.damePosicion().y, this.policia.dameImagen());
      this.policiaImg.setScale(this.scale/this.policia.dameEscala()).setScrollFactor(0);

      // La cafeteria se comporta como un personaje
      this.cafeteria = new OBJETO('cafeteria', 600, this.cameras.main.height - 200, 3, "a", 'cafeteriaImg');
      this.cafeteria.guardarEscena(this);
      this.cafeteriaImg = this.add.image(this.cafeteria.damePosicion().x, this.cafeteria.damePosicion().y, this.cafeteria.dameImagen());
      this.cafeteriaImg.setScale(this.scale/this.cafeteria.dameEscala()).setScrollFactor(0);
           
      this.characters = [this.policia, this.cafeteria];
      this.charactersImg = [this.policiaImg, this.cafeteriaImg];
  
      this.moneda = new OBJETO('moneda', 200, this.cameras.main.height - 70, 14, "a", 'monedaImg');
      this.moneda.guardarEscena(this);
      this.monedaImg = this.add.image(this.moneda.damePosicion().x, this.moneda.damePosicion().y, this.moneda.dameImagen());
      this.monedaImg.setScale(this.scale/this.moneda.dameEscala()).setScrollFactor(0);
      
      this.objects = [this.moneda];
      this.objectsImg = [this.monedaImg];

      this.objectsImg[0].setInteractive();
      this.objectsImg[0].on('pointerdown', function (f){
        this.objects[0].recogerObjeto(this.objectsImg[0], this.objects[0]);
      }, this);
  
      this.characters[0].guardarTexto("No puedes pasar por aquí. \nHa habido un accidente.");
      this.charactersImg[0].setInteractive();
      this.charactersImg[0].on('pointerdown', function (f){
        this.characters[0].cargarDialogo(this.charactersImg[0]);
      }, this)
      this.characters[1].guardarTexto("Parece que todavía no ha abierto.");
      this.charactersImg[1].setInteractive();
      this.charactersImg[1].on('pointerdown', function (f){
        this.characters[1].cargarDialogo(this.charactersImg[1]);
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