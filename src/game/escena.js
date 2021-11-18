/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
 export default class Escena extends Phaser.Scene {

    _wallpaper;
    //GameManager = new GAMEMANAGER(); // Referencia al GM

    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'Escena' });       
      {
      }; 
      
    }
    

    loadImage(info)
    {
        this.load.image(info.name, info.route);
    }

    spawnWallpaper(name)
    {
        let container = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, name);
        this.assignScale(container);       
        return container;
    }

    spawnImage(name, position, scaleProportion)
    {
        let container = this.add.image(position.x, position.y, name);
        container.setScale(this.scale/scaleProportion).setScrollFactor(0);  
        //container.setOrigin(aling.x, aling.y);   

        return container;

    }


    assignScale(container)
    {
        let scaleX = this.cameras.main.width / container.width;
        let scaleY = this.cameras.main.height / container.height;
        this.scale = Math.max(scaleX, scaleY);
    }
}
