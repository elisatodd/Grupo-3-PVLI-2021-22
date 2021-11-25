/**
 * Intentando hacer una escena
 * @extends escena
 */
 import Escena from './escena.js' 
 import OBJETO from "./Objects/objeto.js";

 export default class EscenaJuego extends Escena {
    
    characters = [];
    objects = [];

 
   constructor(data) {
        super(data);
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
                this.addBottomArrows(this.arrows[i]);
    }

   
   preload() { // Cargas las flechas que son comunes a todas las escenas de juego
        this.loadObjects(this.arrows);
   }

   loadObjects(container)
   {
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
   
   spawnObjects(container)
   {
        for(let i = 0; i < container.length; i++)
        {
            this.addBottom(container[i]);
        }

   }


   AddObject(object)
   {       
        this.objects.push(object);
      
   }

   AddCharacter(character)
   {
       this.characters.push(character);
   }

   //actives es un array donde se ven que objectos siguen estado activados, recogido del gameManager
   CreateCharacters(actives)
   {
        let i = 0;
        for (let character of this.characters) {
            if(actives[i] == true)
            {
                //character();
            }    
            i++;   
        }
   }

   CreateObjects(actives)
   {
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