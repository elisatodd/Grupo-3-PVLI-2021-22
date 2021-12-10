//no se necesitan todas las escenas en el game manager, si no solo los nombres

export default class GAMEMANAGER extends Phaser.Scene{

    // Contenedores de GameObjects
    inventario = []; // Array que guarda los objetos que se han recolectado

    //variable donde se almacena que datos han sido usados
    //Raúl
   
    //referencia a game
    game = '';
    scene = '';

    //Puntos del jugador
    points = 0;
  
    itemsInInventory = 0;
    gameDuration = 9000000; // = 90000 SEGUNDOS = 15 minutos
    
    //Necesito una matriz de salas, en la que hay posiciones que no tienen salas y entonces no son accesibles
    //Asigno directamente las escenas en sus posiciones en el array, con las casillas vacías correspondientes
    escenas = [
        null, 'casaEspejos', 'feria', 'casetaFeria',
        'parque', 'sombrereria', 'bosque', null,
        'mercado', 'calle', 'plaza', 'casa'
    ];

    constructor(game, scene, points){

        super({ key: 'GameManager' });
        {
        };
        
       
        this.game = game;
        this.scene = scene;
        this.gamePoints=points;
    }

    preload()
    {
        this.loadElements();
        this.showElements();
    }

    testing(){
        console.log("probando asignar funciones");
    }

    /**
     * @param {Object} info Objeto que da comienzo al juego al ser clicado
     */
    startGame(info){
        this.saveTime(this.gameDuration); // le paso el tiempo que quiero que dure la partida
        this.savePoints(0); 
        info.scene.scene.start('plaza');

    }

    /**
     * Llamado cuando acabe el temporizador de la partida. Acaba el juego
     */
    endGame(){
        console.log("FIN DE LA PARTIDA!");
        this.scene.scene.start('menuPrincipal');
    }
    /**
     * Muestra el tablón de puntuaciones
     * @param {Object} info Objeto que enseña la tabla de puntuación al ser clicado
     */
    showHighScore(info){
        info.scene.addBottom(info.scene.hsBoard);
    }

    /**
     * Borra la imagen correspondiente a un objeto
     * @param {Object} info Objeto cuya imagen se quiere borrar
     */
    deleteImage(info){
        info.image.destroy();
    }

    /**
     * 
     * @param {Scene} info 
     */
    pause(info){
        info.scene.addBottom(info.scene.pause);
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
            inventarioID: this.inventarioID 
        };
       
        this.showElements();
    }
/**
 * Guarda el tiempo que queda para que acabe el juego
 * @param {Number} info tiempo restante
 */
    saveTime(info){

        this.game['timeLeft'] = {time: info};
    }

    /**
     * guarda la puntuación actual del jugador
     */
    savePoints(){
        this.game['gamePoints'] = {gamePoints: this.points};
    }
    //método que muestra que funciona la acción del almacenar datos
    showElements()
    {
        console.log(this.game['inventario'].inventario.length);
    }

    /**
     * Mete el obj en el inventario: se debe guardar entre escenas y además controlar que no se cargue en la escena x de nuevo
     * @param {Item} obj Item que queremos poner en el inventario
     */
    moveToInventory(obj){ 
        this.itemsInInventory++;
        this.inventario.push(obj);
        this.saveObject();
        //this.showElements();
        obj.moveToInv();
    }

    /**
     * Habilita el arrastre de un objeto del inventario
     * @param {Item} obj Item del inventario a arrastrar
     */
    drag(obj)
    {
        obj.startdrag();
    }

    getInventoryPosition(){
        // El primer dígito es para el tamaño del objeto y el segundo para la separación entre objetos
        return ((this.itemsInInventory-1) * 98 +180);
    }
    /**
     * Muestra el texto que tiene asociado un NPC
     * @param {NPC} npc personaje clicado 
     */
    cargarDialogo(npc){
        //console.log("Soy un NPC");

        if (!npc.solved)
            npc.saveText(npc.first);
        else
            npc.saveText(npc.last);
    }


    /**
     * Cambia de escena
     * @param {*} iniScene escena en la que se encuentra actualmente
     * @param {*} direction direccion en la que el usuario se mueve
     */
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
        this.saveTime(iniScene.timedEvent.delay - iniScene.timedEvent.getElapsed());
        this.savePoints();
        iniScene.timedEvent.remove(false); // cancelo el timer anterior
        iniScene.scene.start(next);
    }


    
   
    /**
     * Comprueba si dos imágenes se están superponiendo
     * Método hecho con la ayuda de la doc. de phaser: https://phaser.io/examples/v2/sprites/overlap-without-physics y 
     *  https://phaser.io/examples/v3/view/geom/intersects/get-rectangle-intersection
     * @param {*} spriteA Imagen 1 
     * @param {*} spriteB Imagen 2
     * @returns True/False dependiendo de si hay superposicion o no
     */
    checkOverlap(spriteA, spriteB) {

        let boundsA = spriteA.getBounds();
        let boundsB = spriteB.getBounds();
        let intersection = Phaser.Geom.Intersects.GetRectangleIntersection(boundsA, boundsB);
        return !(intersection.width === 0 && intersection.height === 0);
    }
    
    /**
     * Determina si se termina una misión al arrastrar un objeto hasta un lugar
     * Es decir, si se ha entregado el objeto correcto a la persona correcta
     * @param {Item} id Item que se ha arrastrado hasta un punto de la pantalla
     * @returns Devuelve true si el item id se ha colocado en el lugar correcto, false en caso contrario
     */
    checkObjects(id)
    {
        for(let i = 0; i < this.scene.characters.length; i++)
        {
            if(this.scene.characters[i].itemName !== undefined && this.scene.characters[i].itemName  === id.name)
            {
                if (this.checkOverlap(this.scene.characters[i].image, id.image)){

                    this.deleteItem(id.name);
                    if (this.scene.characters[i].esVendedora)
                        this.scene.characters[i].cartaEntregada = true;
                    else {
                        this.scene.characters[i].solved = true;
                        this.addPoints();
                    }
                    return true;
                }
            }
        } 

        return false;
    }

    /**
     * Elimina un objeto del inventario, se llama cuando un objeto es entregado a la persona correcta
     * @param {string} itemName nombre del item que se borra del inventario
     */
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

    /**
     * Suma puntuación cuando se le da el objeto correcto a un npc o se soluciona un puzle
     * @param {int} actualPoints los puntos que ya había acumulados
     */
    addPoints(){
        this.points++;

        console.log("Puntos: " + this.points);
        
    }

    
}








