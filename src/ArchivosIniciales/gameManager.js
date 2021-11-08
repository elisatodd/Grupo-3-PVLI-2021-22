export default class GAMEMANAGER extends Phaser.Scene{

    constructor(){

        super({ key: 'GameManager' });
        {
        };

        console.log("prueba de la clase GameManager");  
        let objetosEnInventario = 0;
        let arrayInventario;
    }


    moveImage(escena, imagen, dirImagen){ // sirve para, cuando recojas un objeto, se mueva al inventario
        
        console.log(dirImagen);
        imagen.destroy();

        escena.moverAlInventario(700, 400, 1.8);
        
        //objetosEnInventario++;
        //arrayInventario.push(refObjeto);

    }








}