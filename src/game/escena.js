/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
 
 import GAMEMANAGER from '../ArchivosIniciales/gameManager.js';
 export default class Escena extends Phaser.Scene {

    _wallpaper;
    
    gameManager;

    timedEvent;
    
    arrowLeft;
    arrowRight;
    arrowDown;
    arrowUp;
    arrows = [this.arrowLeft = false, this.arrowRight = false, this.arrowDown = false, this.arrowUp = false];
    arrowsDirs = [false,false,false,false];
    
    constructor(data) {
      super(data);       
      {
         
      }; 
    
    }


    create()
    {
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
     
        this.createGameManager(this.game, this);       
        
        let time = this.registry.get('timeLeft');
        if(time !== undefined)
        this.timedEvent = this.time.addEvent({ delay: time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
          
        this.gameManager.points = this.registry.gamePoints;
    }

    createGameManager(game, scene)
   {
        this.gameManager = new GAMEMANAGER(game, scene);
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
            scene.gameManager[s](info);
        } );   
    }

    addSpecialButton(info)
    {
        this.spawnImage(info);   
        info.image.setInteractive();
        info.image.on('pointerdown', info.functionality);
    }

    addBottomArrows(info) {
        //debemos usar estos nombres al crear el objeto
        this.spawnImage(info);    
        info.image.setInteractive();
        info.image.on('pointerdown', function (f){
            let scene = info.scene;
            let dir = info.direction;
            scene.gameManager.changeScene(scene, dir);
        } );    
    }
}
