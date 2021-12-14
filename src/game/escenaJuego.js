/**
 * Intentando hacer una escena
 * @extends escena
 */
 import Escena from "./escena.js";
 import OBJETO from "./Objects/objeto.js";
 import Data from "../data.js";

 export default class EscenaJuego extends Escena {
    
    
    first = true;
    
    pause;
    bpause;
    bmute;
    bunmute;

    characters = [];
    objects = [];
 
   constructor(data) {
        super(data);
        {
        };
    }

    preload(){        
        if (-1 !== this.registry.get('scenesIni').indexOf(this.scene.key)){
            this.bmute = new OBJETO(Data.buttons.buttonMute, this);
            this.bunmute = new OBJETO(Data.buttons.buttonUnMute, this);
            this.bpause = new OBJETO(Data.buttons.buttonPause, this);
            this.bunpause = new OBJETO(Data.buttons.hsButton, this);
            this.breturn = new OBJETO(Data.buttons.playButton, this);
        }
        this.loadImage(this._wallpaper);

        this.loadObjects(this.objects);
        this.loadObjects(this.characters);
        this.loadObjects([this.bpause, this.bmute, this.bunmute, this.bunpause, this.breturn]);

        this.createArrows();
        this.loadArrows();
    }

    create(){
        super.create();
        this.gameManager.loadElements();

        this.assignArrows();
        this.spawnArrows();
        
        let scenesIni = this.registry.get('scenesIni');
        if (scenesIni.indexOf(this.scene.key) !== -1){
            
          this.bmute.assignFunctionality('mute');
          this.bunmute.assignFunctionality('mute');
          this.bpause.assignFunctionality('pause');
          this.bunpause.assignFunctionality('deletePause');
          this.breturn.assignFunctionality('returnMenu');
  
          scenesIni[scenesIni.indexOf(this.scene.key)] = null;
          this.registry.set('scenesIni', scenesIni);
          
        }
        this.spawnObjects(this.objects);
        this.spawnObjects(this.characters);
        this.spawnObjects([this.bpause, this.bmute]);
       
    }

    /**
    * 
    * @param 
    */
    createArrows(){
        for(let i = 0; i < this.arrows.length; i++){
            if(this.arrows[i]) 
            {
                switch(i)
                {
                    case 0:
                        this.arrows[i] = new OBJETO(Data.arrows.left, this)
                        break;
                    case 1:
                        this.arrows[i] = new OBJETO(Data.arrows.rigth, this)
                        break;
                    case 2:
                        this.arrows[i] = new OBJETO(Data.arrows.down, this)
                        break;
                    case 3:
                        this.arrows[i] = new OBJETO(Data.arrows.up, this)
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
                this.addBottomArrows(this.arrows[i]);
    }

   loadObjects(container){
        for(let i = 0; i < container.length; i++)
            this.loadImage(container[i]);
    }

   assignObjects(container, funct){
        for(let i = 0; i < container.length; i++)
            container[i].assignFunctionality(funct);
   }

   assignArrows(){
        for(let i = 0; i < this.arrows.length; i++){
            let dir;
            if (this.arrows[i] != false){
                switch(i)
                {
                    case 0:
                        dir = 'left';
                        break;
                    case 1:
                        dir = 'right';
                        break;
                    case 2:
                        dir = 'down';
                        break;
                    case 3:
                        dir = 'up';
                        break;
                }
                this.arrows[i].assignFunctionality('changeScene');
                this.arrows[i].assignDir(dir);
            }
        }
    }
   
   spawnObjects(container){
        for(let i = 0; i < container.length; i++)
        {
            this.addBottom(container[i]);
        }
    }


   AddObject(object){       
        this.objects.push(object);
    }

   AddCharacter(character){
       this.characters.push(character);
    }

   //actives es un array donde se ven que objectos siguen estado activados, recogido del gameManager
   CreateCharacters(actives){
        let i = 0;
        for (let character of this.characters) {
            if(actives[i] == true)
            {
                //character();
            }    
            i++;   
        }
   }

   CreateObjects(actives){
        let i = 0;
        for (let object of this.objects) {
            if(actives[i] == true)
            {
                //object();
            }  
            i++;
        }
   }

   moverAlInventario(posInv, obj, xPosition, yPosition, itemScale){ // Pone un objeto de esta escena en el inventario
        // Las posiciones dependen de cuantos objetos haya en el inventario
        let inv1 = this.add.image(xPosition, yPosition, obj); 
        inv1.setScale(this.scale/itemScale).setScrollFactor(0);
   }

   buscarObjeto(name){ // UN FOR RECORRIENDO EL ARRAY DE OBJETOS HASTA QUE ENCUENTRA EL NOMBRE
        for (i = 0 ; i < this.objects.length ; ++i){
            if (objects[i].dameNombre() == name ){
                return objects[i].dameNombre();
            }
        }
    }

   // El GM llama a este método cuando se pasa un objeto al inventario, para que desaparezca de la escena
   RemoveObject(obj){
       //Forma de borrar un elemento concreto de un vector
        let indice = array.indexOf(obj);
        if (indice !== -1) {
            this.objects.splice(indice, 1);
        }
   }

}