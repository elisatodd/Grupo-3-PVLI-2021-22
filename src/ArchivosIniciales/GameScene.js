import Puzzle from "./PuzzleScene.js";
import OBJETO from "./objeto.js";
import GAMEMANAGER from "./gameManager.js";

/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */

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

// USAMOS ESTA ESCENA PARA HACER PRUEBAS
export default class GameZone extends Phaser.Scene {

    sceneMoment = 0;
    puzzleComplete = false;
    imgprueba;
    imgprueba2;
    objetoprueba;
    objetoprueba2;
    GameManager = new GAMEMANAGER();
    


    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'gameScene' });       // Siempre hay que llamar al super para sobreescribir la escena
      {
      }; 
      
    }

    
    
  
    // Métodos init, preload, create, update
    preload() { // Cargas todo lo que vayas a usar
        this.load.image('wallpaper', './assets/images/pueblo.jpg');
        this.load.image('personaje', './assets/images/chica.png');
        this.load.image('box', './assets/images/box.png');
        this.load.image('spritedeprueba', './assets/images/caja.png');
        this.load.image('spritedeprueba2', './assets/images/pez.png');
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
        

        this.objetoprueba = new OBJETO('spritedeprueba', 400, 400, 3, "caja", "imgpru");
        this.objetoprueba2 = new OBJETO('spritedeprueba2', 600, 500, 5, "pez", "imgpru2");

        this.imgprueba = this.add.image(this.objetoprueba.damePosicion().x, this.objetoprueba.damePosicion().y, this.objetoprueba.dameImagen()); 
        this.imgprueba.setScale(this.scale/this.objetoprueba.dameEscala()).setScrollFactor(0);

        this.imgprueba2 = this.add.image(this.objetoprueba2.damePosicion().x, this.objetoprueba2.damePosicion().y, this.objetoprueba2.dameImagen()); 
        this.imgprueba2.setScale(this.scale/this.objetoprueba2.dameEscala()).setScrollFactor(0);

        //this.objetoprueba.guardarEscena(this);
        this.imgprueba.setInteractive();
        this.imgprueba2.setInteractive();
        //this.objetoprueba.guardarTexto("HOLAA");
        this.imgprueba.on('pointerdown', this.objetoprueba.recogerObjeto, this);
        this.imgprueba2.on('pointerdown', this.objetoprueba2.recogerObjeto, this);

        //this.imgprueba = this.physics.add.image(100, 450, 'spritedeprueba');


        
        console.log(data);
        if(data === '0'|| data === '1') // Lo pasa el puzle
         this.actualiceEvents(data);
       // this.input.on('gameobjectdown', this.callDialogue, this);

       //this.physics.enable('spritedeprueba', Phaser.Physics.ARCADE);

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

       moverAlInventario(xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
        // Las posiciones dependen de cuantos objetos haya en el inventario
        this.imgprueba = this.add.image(xPosition, yPosition, this.objetoprueba.dameImagen()); 
        this.imgprueba.setScale(this.scale/itemScale).setScrollFactor(0);
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
        }*/
    
    }

  