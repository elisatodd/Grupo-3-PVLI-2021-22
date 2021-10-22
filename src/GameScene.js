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
      super({ key: 'gameScene' });       
      {
      }; 
      
    }

    
    
  
    // Métodos init, preload, create, update
    preload() {
        this.load.image('wallpaper', './assets/images/pueblo.jpg');
        this.load.image('personaje', './assets/images/chica.png');
        this.load.image('box', './assets/images/box.png');
      }
      
    create(data) {
        let wallpaper = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'wallpaper');

        //obtiene el tamaño de la cámara
        let scaleX = this.cameras.main.width / wallpaper.width;
        let scaleY = this.cameras.main.height / wallpaper.height;
        this.scale = Math.max(scaleX, scaleY);

        //lo escala a esta        
        wallpaper.setScale(this.scale).setScrollFactor(0);
        let character = this.add.image(200, 400, 'personaje');
        character.setScale(this.scale/2.5).setScrollFactor(0);

        character.setInteractive();

       
        character.on('pointerdown', this.callEvents, this);

        
        console.log(data);
        if(data === '0'|| data === '1') 
         this.actualiceEvents(data);
       // this.input.on('gameobjectdown', this.callDialogue, this);
        }
     
        actualiceEvents(data)
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

        callEvents()
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
  
            this.sceneMoment++;
          }           
         
        }

        callDialogue () {
         
          console.log("cuadro");        
         let box = this.add.image(this.cameras.main.width / 2, 500, 'box');  
          box.setScale(this.scale/1.35).setScrollFactor(0);

          box.setInteractive();  
          box.on('pointerdown', this.callEvents, this);
       }

       callInfo(sentence)
       {
        console.log("info");        
        var textConfig={fontSize:'25px',color:'#000000',fontFamily: 'Arial'};       
        this.add.text(this.cameras.main.width/3.5, 480, sentence, textConfig);
        
       }

       callPuzzle()
       {         
         this.scene.start('puzzleScene');
       }

   

   
  }  

  