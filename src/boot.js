
import Data from "./data.js";

export default class Boot extends Phaser.Scene {
    
    constructor() {
      super({ key: 'boot' });
    }
  
    
    preload() {
        
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
        
        this.LoadImages(Data.arrows);
        this.LoadImages(Data.buttons);
        this.LoadImages(Data.items);
        this.LoadImages(Data.npc);

        this.LoadSounds();
       
    }  

    LoadImages(file)
    {
        for (const value of Object.values(file)) {
            this.load.image(value.name, value.sprite);
          }
    }

    LoadSounds()
    {
        for (const value of Object.values(Data.sound)) {
            this.load.audio(value.name, value.route);
          }
    }
}