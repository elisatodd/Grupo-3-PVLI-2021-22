/**
 * Intentando hacer una escena
 * @extends escena
 */
 import Escena from './escena.js' 
 import OBJETO from "./Objects/objeto.js";
 import GAMEMANAGER from '../ArchivosIniciales/gameManager.js';

 export default class EscenaJuego extends Escena {
    gameManager;
    
    characters = [];
    objects = [];

    arrows = [arrowLeft = false, arrowRight = false, arrowDown = false, arrowUp = false];
 
   constructor() {
        super({ key: 'GameScene' });
        {
        };
        this.gameManager = new GAMEMANAGER();
    }

   
   preload() { // Cargas las flechas que son comunes a todas las escenas de juego
     
    this.loadObjects(this.arrows);
  }

   createArrows()
   {
    
    for(let i = 0; i < this.arrows.length; i++)
    if(arrows[i]) 
    {
        switch(i)
        {
            case 0:
                arrows[i] = new OBJETO('./assets/images/moneda.png', 200, this.cameras.main.height - 70, 14, 'moneda', this)
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
        }
    }
   }


   loadObjects(container)
   {
         for(let i = 0; i < container.length; i++)
            this.loadImage(container[i]);
   }

   spawnObjects(container)
   {
         for(let i = 0; i < container.length; i++)
            this.addBottom(container[i]);
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