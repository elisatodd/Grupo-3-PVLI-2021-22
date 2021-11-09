export default class GAMEMANAGER extends Phaser.Scene{

    // Contenedores de GameObjects
    inventario = []; // Array que guarda los objetos que se han recolectado
    objetosEnInventario = 0;

    constructor(){

        super({ key: 'GameManager' });
        {
        };

        console.log("prueba de la clase GameManager");
    }


    moveImage(escena, imagen, dirImagen){ // sirve para, cuando recojas un objeto, se mueva al inventario
        
        console.log(dirImagen);
        imagen.destroy();

        // La altura a la que se coloca el objeto va aumentando con la cantidad de objetos en el imventario
        escena.moverAlInventario(725, 100 + (this.objetosEnInventario*75), 5);
       //escena.RemoveObject(dirImagen);


        this.objetosEnInventario++;
        this.inventario.push(dirImagen); // Por ahora el array Inventario va a guardar la dirección de la imagen del objeto

    }








}