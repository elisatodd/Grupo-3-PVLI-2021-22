
//no se necesitan todas las escenas en el game manager, si no solo los nombres
//Meto todas las escenas en el GM
// import Casa from "../game/GameScenes/casa.js"
// import Bosque from "../game/GameScenes/bosque.js"
// import Calle from "../game/GameScenes/calle.js"
// import CasaEspejo from "../game/GameScenes/casaEspejos.js"
// import CasetaFeria from "../game/GameScenes/casetaFeria.js"
// import Feria from "../game/GameScenes/feria.js"
// import Mercado from "../game/GameScenes/mercado.js"
// import Parque from "../game/GameScenes/parque.js"
// import Plaza from "../game/GameScenes/plaza.js"
// import Sombrereria from "../game/GameScenes/sombrereria.js"


export default class GAMEMANAGER extends Phaser.Scene{

    // Contenedores de GameObjects
    inventario = []; // Array que guarda los objetos que se han recolectado

    //variable donde se almacena que datos han sido usados
    //Raúl
    inventarioID = [];
    //referencia a game
    game = '';

    objetosEnInventario = 0;
    //Asigno directamente las escenas en sus posiciones en el array, con las casillas vacías correspondientes

    
    //  escenas = [null, CasaEspejo, Feria, CasetaFeria,
    //             Parque, Sombrereria, Bosque, null,
    //             Mercado, Calle, Plaza, Casa]


    //Necesito una matriz de salas, en la que hay posiciones que no tienen salas y entonces no son accesibles
    //
    escenas;

    constructor(game){

        super({ key: 'GameManager' });
        {
        };
        // this.escenas = 
        // [
        //     [null, CasaEspejo, Feria, CasetaFeria,],
        //     [Parque, Sombrereria, Bosque, null,],
        //     [Mercado, Calle, Plaza, Casa]
        // ];
       
        this.game = game;

      
    }

    preload()
    {
        this.loadElements();
        this.showElements();
    }

    testing(){
        console.log("probando asignar funciones");
    }

    loadElements()
    {
        //cargamos los elementos almacenados
        
        if('inventario' in this.game)
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
        //this.inventarioID[i] = true;

        //se actualiza el inventario global con estos datos
         this.game['inventario'] = { 
             inventario: this.inventario,
             inventarioID: this.inventarioID };
        
        
    }

    //método que muestra que funciona la acción del almacenar datos
    showElements()
    {
        console.log(this.game['inventario'].inventario[0]);
    }

    moveImage(objeto){ // sirve para, cuando recojas un objeto, se mueva al inventario
        
        console.log(objeto.dirImagen);
        objeto.image.destroy();

        // La altura a la que se coloca el objeto va aumentando con la cantidad de objetos en el imventario
       
       //escena.RemoveObject(dirImagen); -> ACTIVAR ESTO CUANDO USEMOS LAS ESCENAS DE VERDAD

       
        this.objetosEnInventario++;
        this.inventario.push(dirImagen); // Por ahora el array Inventario va a guardar la dirección de la imagen del objeto
        this.saveObject();
        this.showElements();
    }
    //A ver si aquí va lo de la flecha
    //Método que cambia de escena
    changeScene(direction)
    //Aquí tengo que meter las condiciones para que el cambio de escena dependa de la flecha y la escena
    {
        console.log("changing scene...");
        
        this.scene.start('plaza');
        if(posFlecha=='Izq' && this.nextScene(escenaIni,'Izq') != null){

            this.scene.start(this.escenas[0][1]);
        }
        else if(posFlecha=='Dcha'&& this.nextScene(escenaIni,'Dcha') != null){

            this.scene.start(this.escenas[0][1]);
        }
        else if(posFlecha=='Abj'&& this.nextScene(escenaIni,'Abj') != null){

            this.scene.start(this.escenas[0][1]);
        }
        else if(posFlecha=='Arr'&& this.nextScene(escenaIni,'Arr') != null){

            this.scene.start(this.escenas[0][1]);
        }
    }


    // //Método para ver que escena va a continuación
     nextScene(escena, posFlecha)
     {
        //A parte de estar en la matriz, cada escena guardará en que posición de la matriz está
        if(posFlecha=='dcha'){
            return escena.i+1;
        }
        return null;
     }
}








