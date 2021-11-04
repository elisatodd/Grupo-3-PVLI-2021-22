import Puzzle from "./PuzzleScene.js";

/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
export default class GameZone extends Phaser.Scene {

    sceneMoment = 0;
    puzzleComplete = false;
    
    

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

        
        console.log(data);
        if(data === '0'|| data === '1') // Lo pasa el puzle
         this.actualiceEvents(data);
       // this.input.on('gameobjectdown', this.callDialogue, this);
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

   

   
  }  

  