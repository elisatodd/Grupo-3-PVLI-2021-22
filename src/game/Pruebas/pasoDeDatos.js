/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
 export default class Datos1 extends Phaser.Scene {

    
    //GameManager = new GAMEMANAGER(); // Referencia al GM

    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'Escena' });       
      {
      }; 
      
    }


}

export default class Datos2 extends Phaser.Scene {

    
    //GameManager = new GAMEMANAGER(); // Referencia al GM

    image;

    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'Escena' });       
      {
      }; 
      
      preload()
      {
        this.load.image(info.name, info.rute);
      }
       
       this.registry.set('image', this.image);
      
    }

    
}