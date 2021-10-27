/**
 * Intentando hacer una escena
 * @extends escena
 */
 import escena from './escena.js'

 export default class escenaJuego extends escena {
 
  characters = [];
  objects = [];
 
   constructor() {
 
 
     super({ key: 'menuScene' });
     {
     };
 
   }

   AddObject(object)
   {
        objects = objects.push(object);
   }

   AddCharacter(character)
   {
       characters = this.characters.push(character);
   }

   //actives es un array donde se ven que objectos siguen estado activados, recogido del gameManager
   CreateObjects(actives)
   {
       let i = 0;
    for (let character of this.characters) {
        if(actives[i] == true)
        {
            //como se cree el personaje segun sus atributos
        }    
        i++;   
      }
   }

   CreateCharacters(actives)
   {
    let i = 0;
    for (let object of this.objects) {
        if(actives[i] == true)
        {
            //como se cree el personaje segun sus atributos
        }  
        i++;
      }
   }
}