
import Data from "./data.js";

export default class Boot extends Phaser.Scene {
    
    wallpaper;
    constructor() {
      super({ key: 'boot' });
    }
  
    
    preload() {
        
        this.text = this.add.text(10, 10, 'Cargando Juego ...', { font: '40px Courier', fill: '#FF0000' });
        
        this.Load();
    }

    /**
     * Inicio de la escena menu
     */
    create() {
        this.scene.start('menuPrincipal');
    }

    /**
     * Carga de todos los assets 
     */
    Load()
    {
        this.load.image('box', './assets/images/testing.png');
        
        this.loadFont("initialFont", "./assets/fonts/SpaceMono-Italic.ttf");

        this.LoadImages(Data.arrows);
        this.LoadImages(Data.buttons);
        this.LoadImages(Data.items);
        this.LoadImages(Data.npc);
        this.LoadImages(Data.wallpapers);
        this.LoadImages(Data.puzlesObjects);

        this.LoadWallpapers();

        this.LoadSounds();
       
    }  

    LoadImages(file)
    {
        for (const value of Object.values(file)) {
            this.load.image(value.name, value.sprite);
        }
    }

    LoadWallpapers()
    {
        for (const value of Object.values(Data.wallpapers)) {
            this.load.image(value.name, value.route);
        }
    }

    LoadSounds()
    {
        for (const value of Object.values(Data.sound)) {
            this.load.audio(value.name, value.route);
        }
    }

    //Sacado de la documentación de clase literalmente
    loadFont(name, url) {
        let newFont = new FontFace(name, `url(${url})`);
        
        newFont.load().then(function (loaded) {
            document.fonts.add(loaded);
        }).catch(function (error) {
            return error;
        });
    }
}