
import Data from "./data.js";

export default class Boot extends Phaser.Scene {
    
    constructor() {
      super({ key: 'boot' });
    }
  
    /**
     * Carga de todos los assets
     */
    preload() {
        
     this.Load();
       
    }

    /**
     * Inicio de la escena menu
     */
    create() {
        this.scene.start('menuPrincipal');
    }


    Load()
    {
        
        this.LoadImages(Data.arrows);
        this.LoadImages(Data.buttons);
        this.LoadImages(Data.items);
        this.LoadImages(Data.npc);
       
    }  

    LoadImages(file)
    {
        for (const value of Object.values(file)) {
            this.load.image(value.name, value.sprite);
          }
    }
}