
import EscenaCasa from "../game/GameScenes/casa.js"

export default class GAMEMANAGER extends Phaser.Scene{

    // Contenedores de GameObjects
    inventario = []; // Array que guarda los objetos que se han recolectado

    //variable donde se almacena que datos han sido usados
    //Raúl
    inventarioID = [];

    objetosEnInventario = 0;
    escenas=[,];

    //Necesito una matriz de salas, en la que hay posiciones que no tienen salas y entonces no son accesibles
    //

    constructor(){

        super({ key: 'GameManager' });
        {
        };

        console.log("prueba de la clase GameManager");

        this.loadElements();
    }

    loadElements()
    {
        //cargamos los elementos almacenados
        if(this.game['inventario'] !== undefined)
        {
            this.inventario = this.game['inventario'].inventario;
            this.inventarioID = this.game['inventario'].inventarioID;
            
            //bucle que recorre el inventario
            for(let i = 0; i < this.inventarioID.length; i++)
            {
                if(this.inventarioID === true)
                {
                    //coloca la escena en el inventario
                    escena.moverAlInventario(this.objetosEnInventario, inventario[i].dirImagen, 725, 100 + (this.objetosEnInventario*100), escala*2 );
                    this.objetosEnInventario++;
                }
            }
        }
    }

    saveObject()
    {
        //codigo a explicar sobre almacenamiento de datos(Raúl)
        
        //id del objeto en el inventario(a implementar) se pasa a true pues esta recogido
        this.inventarioID[i] = true;

        //se actualiza el inventario global con estos datos
         this.game['inventario'] = { 
             inventario: this.inventario,
             inventarioID: this.inventarioID };
        
        
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
        escenaIni.scene.start(escenaFin);
    }


    // //Método para ver que escena va a continuación
    // nextScene(escena, posFlecha)
    // {
    //     if(posFlecha=='dcha')

    // }
}








