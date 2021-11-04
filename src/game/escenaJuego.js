/**
 * Intentando hacer una escena
 * @extends escena
 */
 import Escena from './escena.js'

 export default class EscenaJuego extends Escena {
 
    characters = [];
    objects = [];
 
   constructor() {
 
 
     super({ key: 'GameScene' });
     {
     };
 
   }

   /*create()
   {
       let object = function prueba(){console.log("objeto");};
       
    for(let i = 0; i < 3; i++)
    {
        this.AddObject(object);
    }

    this.CreateObjects([true, false, true]);
       
   }*/

   AddObject(object)
   {       
        this.objects.push(object);
   }

   AddCharacter(character)
   {
       this.characters = 
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
}