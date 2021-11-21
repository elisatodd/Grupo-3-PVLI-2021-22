/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
 import OBJETO from "./Objects/objeto.js";

 export default class Escena extends Phaser.Scene {

    _wallpaper;
    //GameManager = new GAMEMANAGER(); // Referencia al GM

    arrowLeft;
    arrowRight;
    arrowDown;
    arrowUp;
    arrows = [this.arrowLeft = true, this.arrowRight = true, this.arrowDown = false, this.arrowUp = true];

    constructor() {
      // Nombre de la escena para el SceneManager, es deci, al cargar la escena desde algún lado debes usar este nombre
      super({ key: 'Escena' });       
      {
      }; 
     
    }

    createArrows()
    {
        for(let i = 0; i < this.arrows.length; i++){
            if(this.arrows[i]) 
            {
                switch(i)
                {
                    case 0:
                        this.arrows[i] = new OBJETO('./assets/images/flechaIzq.png', 50, this.cameras.main.height / 2 , 10, 'arrowLeft', this)
                        break;
                    case 1:
                        this.arrows[i] = new OBJETO('./assets/images/flechaDcha.png', 750, this.cameras.main.height / 2, 10, 'arrowRight', this)
                        break;
                    case 2:
                        this.arrows[i] = new OBJETO('./assets/images/flechaAbj.png', this.cameras.main.width / 2, 550, 10, 'arrowDown', this)
                        break;
                    case 3:
                        this.arrows[i] = new OBJETO('./assets/images/flechaArr.png', this.cameras.main.width / 2, 50, 10, 'arrowUp', this)
                        break;
                }
            }
        }
    }
     

    loadArrows(){
        for(let i = 0; i < this.arrows.length; i++)
            if (this.arrows[i] != false)
                this.loadImage(this.arrows[i]);
    }

    spawnArrows(){
        for(let i = 0; i < this.arrows.length; i++)
            if (this.arrows[i] != false)
                this.addBottom(this.arrows[i]);
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
        info.image.on('pointerdown', () =>  info.functionality());    
      
      }
}
