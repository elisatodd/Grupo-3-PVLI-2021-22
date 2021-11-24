//no se necesitan todas las escenas en el game manager, si no solo los nombres

export default class GAMEMANAGER extends Phaser.Scene{

    // Contenedores de GameObjects
    inventario = []; // Array que guarda los objetos que se han recolectado

    //variable donde se almacena que datos han sido usados
    //Raúl
    inventarioID = [];
    //referencia a game
    game = '';

    itemsInInventory = 0;
    //Asigno directamente las escenas en sus posiciones en el array, con las casillas vacías correspondientes

    
    escenas = [null, 'casaEspejos', 'feria', 'casetaFeria',
                'parque', 'sombrereria', 'bosque', null,
                'mercado', 'calle', 'plaza', 'Casa'];


    //Necesito una matriz de salas, en la que hay posiciones que no tienen salas y entonces no son accesibles
    //

    constructor(game){

        super({ key: 'GameManager' });
        {
        };
        
       
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

    moveToInventory(obj){ // mete el obj en el inventario: se debe guardar entre escenas y además controlar que no se cargue en la escena x de nuevo
        this.itemsInInventory++;
        this.inventario.push(obj);
        //this.saveObject();
        //this.showElements();


        // La altura a la que se coloca el objeto va aumentando con la cantidad de objetos en el inventario
       
       // escena.RemoveObject(dirImagen); -> ACTIVAR ESTO CUANDO USEMOS LAS ESCENAS DE VERDAD
        obj.scene.moveToInv(obj);
       

    }

    getInventoryPosition(){
        // El primer dígito es para el tamaño del objeto y el segundo para la separación entre objetos
        return ((this.itemsInInventory-1) * 80 + 50);
    }

    //A ver si aquí va lo de la flecha
    //Método que cambia de escena
    changeScene(iniScene, direction)
    //Aquí tengo que meter las condiciones para que el cambio de escena dependa de la flecha y la escena
    {
        console.log("changing scene...");

        let scenePosition = this.escenas.indexOf(iniScene.arrowsDirs[0]);
        let nextScene = scenePosition;
        if(direction==='left'){
            nextScene -= 1;
            //iniScene.scene.start(this.escenas[scenePosition-1]);
        }
        else if(direction==='right'){

            iniScene.scene.start(this.escenas[scenePosition+1]);
        }
        else if(direction==='up'){

            iniScene.scene.start(this.escenas[scenePosition+4]);
        }
        else if(direction==='down'){

            iniScene.scene.start(this.escenas[scenePosition-4]);
        }

        iniScene.scene.start(this.escenas[nextScene]);
        //this.scene.start('plaza');
    }


    
}








