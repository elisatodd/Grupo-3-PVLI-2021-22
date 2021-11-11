import Puzzle from "./PuzzleScene.js";
import OBJETO from "./objeto.js";
import GAMEMANAGER from "./gameManager.js";

/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */



// USAMOS ESTA ESCENA PARA HACER PRUEBAS
export default class GameZone extends Phaser.Scene {

    sceneMoment = 0;
    puzzleComplete = false;
    imgprueba;
    imgprueba2;
    imgprueba3;
    objetoprueba;
    objetoprueba2;
    objetoprueba3;
    GameManager = new GAMEMANAGER();
    
    


    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'gameScene' });       // Siempre hay que llamar al super para sobreescribir la escena
      {
        /*const config = {
          physics: {
              default: 'arcade', // elegir motor
              arcade: { // propiedades del motor
                  gravity: { y: 300 },
                  debug: false // true para ver info
              }
          },
        };
        const game = new Phaser.Game(config);
        */
      };
       
      
    }
    // Métodos init, preload, create, update
    preload() { // Cargas todo lo que vayas a usar
        
        this.load.image('wallpaper', './assets/images/pueblo.jpg');
        this.load.image('personaje', './assets/images/chica.png');
        this.load.image('box', './assets/images/box.png');
        this.load.image('spritedeprueba', './assets/images/caja.png');
        this.load.image('spritedeprueba2', './assets/images/pez.png');
        this.load.image('spritedeprueba3', './assets/images/flor.png');
        this.load.image('flechaDcha','./assets/images/flechaDcha.png');
        this.load.image('flechaIzq','./assets/images/flechaIzq.png');
        this.load.image('flechaAbj','./assets/images/flechaAbj.png');
        this.load.image('flechaArr','./assets/images/flechaArr.png');
      }
      
    create(data) { // "start"
        //Pongo el fondo
        let wallpaper = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'wallpaper');

        //obtiene el tamaño de la cámara
        let scaleX = this.cameras.main.width / wallpaper.width;
        let scaleY = this.cameras.main.height / wallpaper.height;
        this.scale = Math.max(scaleX, scaleY);

        //lo escala a esta        
        wallpaper.setScale(this.scale).setScrollFactor(0);
        let character = this.add.image(200, 400, 'personaje');
        character.setScale(this.scale/2.5).setScrollFactor(0);

        // Quiero una imagen interactuable -> al clicar se lanzan eventos
        character.setInteractive();
        // Cuando se hará el evento, al método al que llamas, y donde está
        character.on('pointerdown', this.callEvents, this);

        // PRUEBAS
        

        this.objetoprueba = new OBJETO('spritedeprueba', 400, 400, 3, "caja", 'imgprueba');
        this.objetoprueba2 = new OBJETO('spritedeprueba2', 600, 500, 5, "pez", 'imgprueba2');
        this.objetoprueba3 = new OBJETO('spritedeprueba3', 400, 500, 5, "flor", 'imgprueba3');

        this.imgprueba = this.add.image(this.objetoprueba.damePosicion().x, this.objetoprueba.damePosicion().y, this.objetoprueba.dameImagen()); 
        this.imgprueba.setScale(this.scale/this.objetoprueba.dameEscala()).setScrollFactor(0);

        this.imgprueba2 = this.add.image(this.objetoprueba2.damePosicion().x, this.objetoprueba2.damePosicion().y, this.objetoprueba2.dameImagen()); 
        this.imgprueba2.setScale(this.scale/this.objetoprueba2.dameEscala()).setScrollFactor(0);

        this.imgprueba3 = this.add.image(this.objetoprueba3.damePosicion().x, this.objetoprueba3.damePosicion().y, this.objetoprueba3.dameImagen()); 
        this.imgprueba3.setScale(this.scale/this.objetoprueba3.dameEscala()).setScrollFactor(0);
        this.objetoprueba.guardarEscena(this);
        this.objetoprueba2.guardarEscena(this);
        this.objetoprueba3.guardarTexto("HAS RECOGIDO LA FLOR");
        this.imgprueba3.setInteractive();
        this.imgprueba3.on('pointerdown',this.objetoprueba3.cargarDialogo, this);


        //Coloco las flechas
        //Derecha
        this.flechaDerecha= new OBJETO('flechaDcha',750,this.cameras.main.height / 2, 10,"flechaDch",'imgFlechaDch');
        this.imgFlechaDch=this.add.image(this.flechaDerecha.damePosicion().x, this.flechaDerecha.damePosicion().y, this.flechaDerecha.dameImagen());
        this.imgFlechaDch.setScale(this.scale/this.flechaDerecha.dameEscala()).setScrollFactor(0);
        this.flechaDerecha.guardarEscena(this);

        this.imgFlechaDch.setInteractive();

        //izquierda
        this.flechaIzquierda= new OBJETO('flechaIzq',50,this.cameras.main.height / 2 , 10,"flechaIzq",'imgFlechaIzq');
        this.imgFlechaIzq=this.add.image(this.flechaIzquierda.damePosicion().x, this.flechaIzquierda.damePosicion().y, this.flechaIzquierda.dameImagen());
        this.imgFlechaIzq.setScale(this.scale/this.flechaIzquierda.dameEscala()).setScrollFactor(0);
        this.flechaIzquierda.guardarEscena(this);

        this.imgFlechaIzq.setInteractive();

        //Abajo
        this.flechaAbajo= new OBJETO('flechaAbj',this.cameras.main.width / 2,550,10,"flechaAbj",'imgFlechaAbj');
        this.imgFlechaAbj=this.add.image(this.flechaAbajo.damePosicion().x, this.flechaAbajo.damePosicion().y, this.flechaAbajo.dameImagen());
        this.imgFlechaAbj.setScale(this.scale/this.flechaAbajo.dameEscala()).setScrollFactor(0);
        this.flechaAbajo.guardarEscena(this);

        this.imgFlechaAbj.setInteractive();

        //Arriba
        this.flechaArriba= new OBJETO('flechaArr',this.cameras.main.width / 2,50,10,"flechaArr",'imgFlechaArr');
        this.imgFlechaArr=this.add.image(this.flechaArriba.damePosicion().x, this.flechaArriba.damePosicion().y, this.flechaArriba.dameImagen());
        this.imgFlechaArr.setScale(this.scale/this.flechaArriba.dameEscala()).setScrollFactor(0);
        this.flechaArriba.guardarEscena(this);


        this.imgFlechaArr.setInteractive();



        this.imgFlechaDch.on('pointerdown',this.GameManager.changeScene, this);
        
        
        this.imgprueba.setInteractive();
        this.imgprueba2.setInteractive();
        
        //this.objetoprueba.guardarTexto("HOLAA");
        // this.imgprueba.on('pointerdown', function(f){
        //   this.objetoprueba.recogerObjeto(this.imgprueba, this.objetoprueba);
        // }, this);
        this.imgprueba2.on('pointerdown', function(a){
          this.objetoprueba2.recogerObjeto(this.imgprueba2, this.objetoprueba2);
        }, this);

        
        console.log(data);
        if(data === '0'|| data === '1') // Lo pasa el puzle
         this.actualiceEvents(data);
       // this.input.on('gameobjectdown', this.callDialogue, this);

       //this.physics.enable('spritedeprueba', Phaser.Physics.ARCADE);
      //this.imgprueba = this.physics.add.image(100, 450, 'spritedeprueba');

        }

        // MÉTODOS
        actualiceEvents(data) // Mezcla de los eventos de abajo
        {
          console.log("actualizando eventos");
          this.sceneMoment = 2;
          this.callDialogue();          
          if(data === '1')
          {
            this.puzzleComplete = true;
            this.callInfo("Gran logro has conseguido");
          }         
          else
          this.callInfo("El enigma debe de ser resuelto");
        }
    

        callEvents() // Cambia un estado al llamarlo
        { 
          if(!this.puzzleComplete)
          {

            if(this.sceneMoment === 0)
            {
              this.callDialogue();
            }
            else if(this.sceneMoment === 1)
            {
              this.callInfo("El enigma debe de ser resuelto");
            }
            else 
            {
              this.callPuzzle();
            }
  
            this.sceneMoment++; // Para que la siguiente llamada sea diferente
          }           
         
        }

        callDialogue () { // spawn imagen del cuadro
         
          console.log("cuadro");        
          let box = this.add.image(this.cameras.main.width / 2, 500, 'box');  
          box.setScale(this.scale/1.35).setScrollFactor(0);

          box.setInteractive();  
          box.on('pointerdown', this.callEvents, this);
       }
       /**
        * 
        * @param {*} metodoParaEscribirTexto 
        */
       callInfo(sentence) // Crea texto
       {
        console.log("info");        
        var textConfig={fontSize:'25px',color:'#000000',fontFamily: 'Arial'};       
        this.add.text(this.cameras.main.width/3.5, 480, sentence, textConfig);
        
       }

       callPuzzle() // Evento final : llama al puzle
       {         // Llamada a la otra escena
         this.scene.start('puzzleScene'); // El nombre de la clase y del identificador de la escena, pueden no ser el mismo
       }

       moverAlInventario(posInv, obj, xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
        // Las posiciones dependen de cuantos objetos haya en el inventario
        let inv1 = this.add.image(xPosition, yPosition, obj); 
        inv1.setScale(this.scale/itemScale).setScrollFactor(0);
       }

       buscarObjeto(name){ // EN REALIDAD HABRÍA QUE HACER UN FOR RECORRIENDO EL ARRAY DE OBJETOS
        if (this.objetoprueba.dameNombre() == name){
          return this.objetoprueba.dameNombre();
        }else{
          return this.objetoprueba2.dameNombre();
        }
      }
        

       /*update() {
        if (this.input.mousePointer.isDown)
        {
           
            this.physics.arcade.moveToPointer(this.imgprueba, 400);
    
           
            if (Phaser.Rectangle.contains(imgprueba.body, this.input.x, this.input.y))
            {
              imgprueba.body.velocity.setTo(0, 0);
            }
        }
        else
        {
          imgprueba.body.velocity.setTo(0, 0);
        }
    
    }*/
  }

  