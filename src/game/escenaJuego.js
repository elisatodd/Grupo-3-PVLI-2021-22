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
        // Cuando se añade un objeto, se debe definir qué pasa al clicarlo
        this.object.on('pointerdown', this.object.recogerObjeto, this);
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

   // Dibuja un objeto de esta escena en el inventario, lo llama el GM
   MoverAlInventario(xPosition, yPosition, itemScale){ 
    // Las posiciones dependen de cuantos objetos haya en el inventario
    this.imgprueba = this.add.image(xPosition, yPosition, this.objetoprueba.dameImagen()); 
    this.imgprueba.setScale(this.scale/itemScale).setScrollFactor(0);
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