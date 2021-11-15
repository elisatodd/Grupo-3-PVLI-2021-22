export default class Datos2 extends Phaser.Scene {

    
    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'Datos2' });       
      {
      }; 
      console.log('en nueva escena');
      
    }
  
    create()
    {
      let image = this.game['image'];
      console.log(image);
    }
  }