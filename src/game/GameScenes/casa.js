/**
 * Escena de la casa
 * @extends Phaser.Scene
 */

 import EscenaJuego from "../escenaJuego.js"
 import Item from "../Objects/item.js";
  import NPC from "../Objects/NPC.js";

  export default class Casa extends EscenaJuego {  

    first = true;

    constructor(){
      // Nombre de la escena para el SceneManager
      super({ key: 'casa' });
      {
      
      };
      this.arrows = [true, false, false, false];
      this.arrowsDirs = ['plaza', false, false, false];
    }

    preload(){
      this._wallpaper = {name: 'casa', route: './assets/images/pueblo.jpg'};
      this.loadImage(this._wallpaper);

      this.load.image('box', './assets/images/box.png');

      if (this.first){

        this.AddCharacter(new NPC('./assets/images/primo.png', 600, this.cameras.main.height - 250, 2.15, 'primo', this, 'telefono'," Ayudame a conseguir \n este número", " Gracias por haberme \n ayudado primo"));
        this.AddObject(new Item('./assets/images/Carta.png', 150, this.cameras.main.height - 70, 7.5, 'carta', this));
        this.AddObject(new Item('./assets/images/sombrero.png', 250, this.cameras.main.height - 400, 6, 'sombrero', this));
      }
      this.loadObjects(this.objects);
      this.loadObjects(this.characters);

      this.createArrows();
      this.loadArrows();
    }

    create(){
    
      console.log("Escena Casa");
      this._wallpaper = this.spawnWallpaper(this._wallpaper);

      this.createGameManager(this.game, this);
      this.gameManager.loadElements();
      
      this.assignArrows();
      this.spawnArrows();

      if (this.first){

        this.assignObjects(this.objects, 'moveToInventory');
        this.assignObjects(this.characters, 'cargarDialogo');
        
        this.first = false;

      }
      this.spawnObjects(this.objects);
      this.spawnObjects(this.characters);
      
     
    }

    

  }