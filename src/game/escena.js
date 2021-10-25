/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
 export default class escena extends Phaser.Scene {

    _wallpaper;
    

    constructor(wallpaper) {

        //asignación del wallpaper a la escena
        this._wallpaper = wallpaper;

      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'escena' });       
      {
      }; 
      
    }

    preload() {
        //carga el archivo de wallpaper
       this.loadWallpaper();
      }
    

    loadWallpaper()
    {
        this.load.image('wallpaper', this._wallpaper);
    }

    create()
    {
        this.assignScale();

       _wallpaper = this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'wallpaper');
       _wallpaper.setScale(this.scale).setScrollFactor(0);
            
    }


    assignScale()
    {
        let scaleX = this.cameras.main.width / wallpaper.width;
        let scaleY = this.cameras.main.height / wallpaper.height;
        this.scale = Math.max(scaleX, scaleY);
    }
}
