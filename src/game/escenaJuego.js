/**
 * Intentando hacer una escena
 * @extends escena
 */
 import Escena from './escena.js' 
 import GAMEMANAGER from '../ArchivosIniciales/gameManager.js';

 export default class EscenaJuego extends Escena {
    gameManager;
    
    characters = [];
    objects = [];

    escenArriba = false;
    escenAbajo = false;
    escenIzq = false;
    escenDcha = false;
 
    gameManager;
   constructor() {
        super({ key: 'GameScene' });
        {
        };
        this.gameManager = new GAMEMANAGER();
    }

   
   preload() { // Cargas las flechas que son comunes a todas las escenas de juego
     
    this.load.image('flechaDcha','./assets/images/flechaDcha.png');
    this.load.image('flechaIzq','./assets/images/flechaIzq.png');
    this.load.image('flechaAbj','./assets/images/flechaAbj.png');
    this.load.image('flechaArr','./assets/images/flechaArr.png');
  }

   create()
   {
    //    let object = function prueba(){console.log("objeto");};
       
    // for(let i = 0; i < 3; i++)
    // {
    //     this.AddObject(object);
    // }

    // this.CreateObjects([true, false, true]);

    
       
   }

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