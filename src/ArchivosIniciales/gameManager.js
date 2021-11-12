
import EscenaCasa from "../game/GameScenes/casa.js"

export default class GAMEMANAGER extends Phaser.Scene{

    // Contenedores de GameObjects
    inventario = []; // Array que guarda los objetos que se han recolectado
    objetosEnInventario = 0;

    /*{
        x,6,4,5
        10,8,3,x
        9,7,1,2
    }*/
    //¿?¿?¿?¿?¿?¿?¿?¿??¿?¿?¿?¿?¿?
   //escenas = [3,4];//Matriz con las escenas

    constructor(){

        super({ key: 'GameManager' });
        {
        };

        console.log("prueba de la clase GameManager");
    }


    moveImage(escena, imagen, dirImagen, escala){ // sirve para, cuando recojas un objeto, se mueva al inventario
        
        console.log(dirImagen);
        imagen.destroy();

        // La altura a la que se coloca el objeto va aumentando con la cantidad de objetos en el imventario
        escena.moverAlInventario(this.objetosEnInventario, dirImagen, 725, 100 + (this.objetosEnInventario*100), escala*2 );
       //escena.RemoveObject(dirImagen); -> ACTIVAR ESTO CUANDO USEMOS LAS ESCENAS DE VERDAD

       
        this.objetosEnInventario++;
        this.inventario.push(dirImagen); // Por ahora el array Inventario va a guardar la dirección de la imagen del objeto

    }
    //A ver si aquí va lo de la flecha
    //Método que cambia de escena
    changeScene(posFlecha, escenaFin, escenaIni)
    //Aquí tengo que meter las condiciones para que el cambio de escena dependa de la flecha y la escena
    {
        escenaIni.scene.start('casa');
    }
 








}