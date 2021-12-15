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
        this.spawnWallpaper(this._wallpaper);
     
        this.createGameManager(this.game, this);       
        
        let time = this.registry.get('timeLeft');
        if(time !== undefined)
        this.timedEvent = this.time.addEvent({ delay: time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
          
       
    }

    /**
    * Crea un GameManager con acceso a la escena y al juego
    * @param {Phaser.Game} game referencia al juego
    * @param {Phaser.Scene} scene  referencia a la escena
    */
    createGameManager(game, scene)
    {
        this.gameManager = new GAMEMANAGER(game, scene, this.registry.get('points'));
    }

   /**
    * Carga la imagen solicitada
    * @param {Datos} info ruta y nombre de la imagen solicitada
    */
    loadImage(info)
    {
        this.load.image(info.name, info.route);
    }

    /**
     * Instancia en la escena el fondo correspondiente
     * @param {Datos} info parámetros de la imagen a crear: posición, nombre, escala
     * @returns el objeto wallpaper
     */
    spawnWallpaper(info)
    {
        let container = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, info.name);
        this.assignScale(container);       
        return container;
    }

    /**
     * Instancia la imagen correspondiente en la escena
     * @param {Datos} info  parámetros de la imagen a crear: posición, nombre, escala
     */
    spawnImage(info)
    {
        info.image = this.add.image(info.pos.x, info.pos.y, info.name);
        info.image.setScale(this.scale/info.scaleProportion).setScrollFactor(0);  
    }

   /**
    * Asigna la escala a la escena basandose en los datos del wallpaper
    * @param {Datos} container contiene la información de tamaño
    */
    assignScale(container)
    {
        let scaleX = this.cameras.main.width / container.width;
        let scaleY = this.cameras.main.height / container.height;
        this.scale = Math.max(scaleX, scaleY);
    }

   /**
    * Crea una imagen-botón estándar(con relación al game manager)
    * con la funcionalidad y datos correspondientes
    * @param {Datos} info parámetros del botón a crear
    */
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

    /**
     * Crea una imagen-botón estándar(sin relación con el game manager)
    * con la funcionalidad y datos correspondientes
     * @param {Datos} info parámetros del botón a crear
     */
    addSpecialButton(info)
    {
       this.spawnImage(info);   
        info.image.setInteractive();
        info.image.on('pointerdown', info.functionality);
    }

    /**
     * Crea una imagen-botón del tipo flecha, 
     * con la función de cambiar de escena cuandos e clique sobre ella
     * @param {Datos} info parámetros de la flecha a crear
     */
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
