/**
 * Intentando hacer una escena
 * @extends EscenaMenu
 *
 */
import EscenaJuego from '../escenaJuego'

 export default class Zona1 extends EscenaJuego {
   constructor() {
 
 
     super({ key: 'Zona1' });
     {
     };
 
   }

    _character1 = {
        name = "tirador",
        rutaImagen = "../assets/images/tirador.jpg",
        function: loadDialogue(),
        text =  "Ójala poder llegar a esos pajaros"  
    };

    _character2;

    _object1;

   
   preload()
   {
    _wallpaper = super.loadImage("name", rute);
    //falta función de personajes que genere todo lo suyo
    
   }
}

//y esto alomejor debe ser creado pen escena Juego
function loadDialogue()
{

}