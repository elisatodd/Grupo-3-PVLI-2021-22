/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
 
 import GAMEMANAGER from '../ArchivosIniciales/gameManager.js';
 export default class Escena extends Phaser.Scene {

    _wallpaper;
    
    gameManager;

    arrowLeft;
    arrowRight;
    arrowDown;
    arrowUp;
    arrows = [this.arrowLeft = false, this.arrowRight = false, this.arrowDown = false, this.arrowUp = false];

    constructor(data) {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super(data);       
      {
         
      }; 
      this.gameManager = new GAMEMANAGER();
     
    }

   

    loadImage(info)
    {
        this.load.image(info.name, info.route);
    }

    spawnWallpaper(info)
    {
        let container = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, info.name);
        this.assignScale(container);       
        return container;
    }

    spawnImage(info)
    {
        info.image = this.add.image(info.pos.x, info.pos.y, info.name);
        info.image.setScale(this.scale/info.scaleProportion).setScrollFactor(0);  
        
    }

    //hay que pasarle el wallpaper que debe ser una imagen
    assignScale(container)
    {
        let scaleX = this.cameras.main.width / container.width;
        let scaleY = this.cameras.main.height / container.height;
        this.scale = Math.max(scaleX, scaleY);
    }

    //añadir funcionalidad
    addBottom(info) {
        //debemos usar estos nombres al crear el objeto
        this.spawnImage(info);    
        info.image.setInteractive();
        info.image.on('pointerdown', function (f){
            let s = info.functionality;
            let scene = info.scene;
            scene.gameManager[s]();
        } );    
      
    }
}
