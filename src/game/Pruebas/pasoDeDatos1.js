/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
 export default class Datos1 extends Phaser.Scene {

    //GameManager = new GAMEMANAGER(); // Referencia al GM

    image;

    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'Datos1' });       
      {
      }; 
            
    }

      preload() {
        this.image = 'win';
        this.load.image(this.image, '../assets/sprites/winLogo.png');
        this.game['image'] = { image: this.image };
      }

      create()
      {
        console.log('saiendo escena');
        this.scene.start('Datos2');
      }
       
     
      
    }




