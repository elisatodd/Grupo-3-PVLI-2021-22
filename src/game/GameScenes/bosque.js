/**
 * Escena del bosque
 * @extends EscenaJuego
 */
 import EscenaJuego from '../escenaJuego.js';
 import Item from "../Objects/item.js";
 import NPC from "../Objects/NPC.js";
 import NPCItem from "../Objects/NPCItem.js";
 import OBJETO from "../Objects/objeto.js";


 export default class Bosque extends EscenaJuego {
    
    first = true;
    pause;
    bpause;


    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'bosque' }); 
        {

        };
        this.arrows = [false, false, true, true];
        this.arrowsDirs = [false, false, 'plaza', 'feria'];
    }

    preload(){
        this._wallpaper = {name: 'bosque ', route: './assets/images/fondoBosque.jpg'};
        this.loadImage(this._wallpaper);

        if (this.first){
            this.AddCharacter(new NPCItem('./assets/images/policia.png', 800, this.cameras.main.height - 300, 0.75, 'policia', this,  null, "ALTO AHÍ, inspección", "Interesante evidencia...", 'pajarita' ));
            this.AddCharacter(new NPCItem('./assets/images/campesino.png', 200, this.cameras.main.height - 200, 1, 'campesino', this,  null, "Se rompio la carreta", "Gracias justo lo que buscaba", 'caja' ));
            this.AddObject(new Item('./assets/images/pajarita.png', 1000, this.cameras.main.height - 70, 10, 'pajarita', this));
            this.bpause = new OBJETO('./assets/images/botonpausa.png', 50, 50, 8, 'pause', this);
            this.pause = new OBJETO('./assets/images/wallpaperWeb.jpg', this.cameras.main.width/2 - 110, this.cameras.main.height/2, 1, 'text', this);
        }

        this.loadObjects(this.objects);
        this.loadObjects(this.characters);
        this.loadObjects([this.bpause]);
      this.loadObjects([this.pause]);


        this.createArrows();
        this.loadArrows();
    }

    create(){
    
       super.create();

        this.assignArrows();
        this.spawnArrows();
  
        if (this.first){
  
          this.assignObjects(this.objects, 'moveToInventory');
          this.assignObjects(this.characters, 'cargarDialogo');
          
          this.bpause.assignFunctionality('pause');
          this.pause.assignFunctionality('deletePause');

          this.first = false;
  
        }
        this.spawnObjects(this.objects);
        this.spawnObjects(this.characters);
        this.spawnObjects([this.bpause]);
    }

}