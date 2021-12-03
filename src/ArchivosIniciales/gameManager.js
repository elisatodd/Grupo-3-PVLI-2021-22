//no se necesitan todas las escenas en el game manager, si no solo los nombres

export default class GAMEMANAGER extends Phaser.Scene{

    // Contenedores de GameObjects
    inventario = []; // Array que guarda los objetos que se han recolectado

    //variable donde se almacena que datos han sido usados
    //Raúl
   
    //referencia a game
    game = '';
    scene = '';
  
    itemsInInventory = 0;
   
    //Asigno directamente las escenas en sus posiciones en el array, con las casillas vacías correspondientes

    
    escenas = [
                null, 'casaEspejos', 'feria', 'casetaFeria',
                'parque', 'sombrereria', 'bosque', null,
                'mercado', 'calle', 'plaza', 'casa'
            ];


    //Necesito una matriz de salas, en la que hay posiciones que no tienen salas y entonces no son accesibles
    //

    constructor(game, scene){

        super({ key: 'GameManager' });
        {
        };
        
       
        this.game = game;
        this.scene = scene;
      
    }

    preload()
    {
        this.loadElements();
        this.showElements();
    }

    testing(){
        console.log("probando asignar funciones");
    }

    startGame(info){
        info.scene.scene.start('plaza');
    }


    pause(info){
        info.scene.scene.start('menupausa');
    }

    loadElements()
    {
        
        if('inventario' in this.game)
        {
            this.inventario = this.game['inventario'].inventario;
            this.inventarioID = this.game['inventario'].inventarioID;
            
            this.scene.spawnObjects(this.inventario);
            //bucle que recorre el inventario
            for(let i = 0; i < this.inventario.length; i++)
            {
               // if(this.inventarioID === true)
                //{
                    //coloca la escena en el inventario
                    this.itemsInInventory++;
                    this.inventario[i].moveToInv(this.scene);
                   
                //}
            }
            this.showElements();
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
       
            this.showElements();
        
        
    }

    //método que muestra que funciona la acción del almacenar datos
    showElements()
    {
        console.log(this.game['inventario'].inventario.length);
    }

    moveToInventory(obj){ // mete el obj en el inventario: se debe guardar entre escenas y además controlar que no se cargue en la escena x de nuevo
        this.itemsInInventory++;
        this.inventario.push(obj);
        this.saveObject();
        //this.showElements();

        // La altura a la que se coloca el objeto va aumentando con la cantidad de objetos en el inventario
       
       // escena.RemoveObject(dirImagen); -> ACTIVAR ESTO CUANDO USEMOS LAS ESCENAS DE VERDAD
        obj.moveToInv();
    }


    drag(obj)
    {
        obj.startdrag();
    }

    getInventoryPosition(){
        // El primer dígito es para el tamaño del objeto y el segundo para la separación entre objetos
        return ((this.itemsInInventory-1) * 80 + 50);
    }

    cargarDialogo(npc){
        console.log("Soy un NPC");

        if (!npc.solved)
            npc.saveText(npc.first);
        else
            npc.saveText(npc.last);
    }

  


    //Método que cambia de escena
    changeScene(iniScene, direction)
    {
        let scenePosition;
        switch(direction){
            case 'left':
                scenePosition = this.escenas.indexOf(iniScene.arrowsDirs[0]);
                break;
            case 'right':
                scenePosition = this.escenas.indexOf(iniScene.arrowsDirs[1]);
                break;
            case 'up':
                scenePosition = this.escenas.indexOf(iniScene.arrowsDirs[3]);
                break;
            case 'down':
                scenePosition = this.escenas.indexOf(iniScene.arrowsDirs[2]);
                break;
        }

        let next = this.escenas[scenePosition];
        iniScene.scene.start(next);
    }


    
    // Usando la doc. de phaser: https://phaser.io/examples/v2/sprites/overlap-without-physics y 
                            // https://phaser.io/examples/v3/view/geom/intersects/get-rectangle-intersection
    checkOverlap(spriteA, spriteB) {

        let boundsA = spriteA.getBounds();
        let boundsB = spriteB.getBounds();
        let intersection = Phaser.Geom.Intersects.GetRectangleIntersection(boundsA, boundsB);
        return !(intersection.width === 0 && intersection.height === 0);
    }
    
    checkObjects(id)
    {
        for(let i = 0; i < this.scene.characters.length; i++)
        {
            if(this.scene.characters[i].itemName !== undefined && this.scene.characters[i].itemName  === id.name)
            {
                if (this.checkOverlap(this.scene.characters[i].image, id.image)){

                    this.deleteItem(id.name);
                    this.scene.characters[i].solved = true;
                    return true;
                }
            }
        } 

        return false;
    }


    deleteItem(itemName)
    {
        for(let i = 0;i < this.inventario.length; i++)
        {
            if(this.inventario[i].name  === itemName)
            {     
                this.inventario.splice(i, 1);            
            }
        } 
    }

    
}








