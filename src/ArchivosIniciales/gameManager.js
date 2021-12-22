/**
 * Escena gameManager que lleva a cabo las acciones de juego, como cambiar de escena, controlar el inventario, dar comienzo y fin a la partida.
 * 
 */

export default class GAMEMANAGER extends Phaser.Scene {

    // Array que guarda los objetos que se han recolectado
    inventario = [];
    scene = '';
    //Puntos del jugador
    points = 0;
    // cantidad de objetos en el inventario
    itemsInInventory = 0;
    // tiempo que dura una partida
    gameDuration = 900000; // = 900000 SEGUNDOS = 15 minutos
    // cantidad máxima de puntos que puede conseguir
    MAX_POINTS = 15;
    // Puntos necesarios para obtener el final bueno
    points_to_win = 8;
    // determina si la zona desbloqueable de la plaza es accesible o no. 
    zoneUnlocked = false;


    // Matriz de salas, en la que hay posiciones que no tienen salas y entonces no son accesibles
    // Asigno directamente las escenas en sus posiciones en el array, con las casillas vacías correspondientes
    escenas = [
        null, 'casaEspejos', 'feria', 'casetaFeria',
        'parque', 'sombrereria', 'bosque', null,
        'mercado', 'calle', 'plaza', 'casa'
    ];

    constructor(scene, points, unlocked) {

        super({ key: 'GameManager' });
        {
        };
        this.scene = scene;
        this.points = points;
        this.zoneUnlocked = unlocked;

        // Representa el highscore de la partida
        if (!this.scene.registry.get('puntuation'))
            this.scene.registry.set('puntuation', 0);
    }


    preload() {
        this.loadElements();
    }

    /**
     * @param {Object} info Objeto que da comienzo al juego al ser clicado
     * Inicia el juego dando los valores por defecto a las escenas, items... 
     * Así como al tiempo y los puntos
     */
    startGame(info) {
        this.saveTime(this.gameDuration); // le paso el tiempo que quiero que dure la partida

        this.scene.registry.set('points', 0);
        this.scene.registry.set('scenesIni', this.escenas);
        this.scene.registry.set('inventario', []);
        this.scene.registry.set('unlocked', false);
        info.scene.scene.start('plaza');

    }

    /**
     * Da comienzo a la escena de introducción
     */
    startIntroduction(info) {
        info.scene.scene.start('escenaInicio')
    }

    /**
     * Llamado cuando acabe el temporizador de la partida o se consiga el nº máximo de puntos. 
     * Acaba el juego y guarda la puntuación en caso de ser mejor hasta ahora.
     */
    endGame() {

        if (this.scene.registry.get('puntuation') < this.points) {
            this.scene.registry.set('puntuation', this.points);
        }
        // Según los puntos del jugador comenzará un final u otro.
        if (this.points < this.points_to_win) {
            console.log("FIN MALO");
            this.scene.scene.start('escenaFinalMal');
        }
        else if (this.points >= this.MAX_POINTS) {
            console.log("FIN BUENO");
            this.scene.scene.start('escenaFinalBueno');
        }
        else {
            console.log("FIN NORMAL");
            this.scene.scene.start('escenaFinalNormal');
        }
        console.log("¡FIN DE LA PARTIDA!");
    }

    /**
     * Muestra el tablón de puntuaciones
     * @param {Object} info Objeto que enseña la tabla de puntuación al ser clicado
     */
    showHighScore(info) {
        info.scene.addButton(info.scene.hsBoard);
        let texto = "Best points: " + this.scene.registry.get('puntuation');
        info.scene.text = info.scene.add.text(this.scene.cameras.main.width / 2 - 190, this.scene.cameras.main.height / 2 - 100, texto,
            { fontSize: '50px', color: '#000000', fontFamily: 'initialFont' });

    }


    /**
     * Borra el panel de HighScore, cuando el jugador haya decidido dejar de verlo.
     * @param {Object} info 
     */
    deleteHighScore(info) {
        info.image.destroy();
        info.scene.text.destroy();
    }

    /**
     * Borra la imagen correspondiente a un objeto
     * @param {Object} info Objeto cuya imagen se quiere borrar
     */
    deleteImage(info) {
        info.image.destroy();
    }

    /**
     * Cancela la pausa
     * @param {Object} info Objeto del panel de pausa que despausa
     */
    deletePause(info) {
        info.image.destroy();
        info.scene.breturn.image.destroy();
        info.scene.timedEvent.paused = false;
    }

    /**
     * Inicia la pausa
     * @param {Object} info Boton de Pausa en la escena
     */
    pause(info) {
        info.scene.addButton(info.scene.bunpause);
        info.scene.addButton(info.scene.breturn);
        info.scene.timedEvent.paused = true;
    }

    /**
     * Desactiva/Activa el sonido
     * @param {Object} info boton de mutear
     */
    mute(info) {
        info.scene.game.sound.mute = !info.scene.game.sound.mute;
    }

    /**
     * Devuelve al jugador al menú principal desde donde se encuentre
     * @param {Object} info boton de vuelta al menu principal
     */
    returnMenu(info) {
        info.scene.scene.start('menuPrincipal');
    }

    /**
     * Carga todos los elementos que se encuentran almacenados en el inventario a la nueva escena
     */
    loadElements() {
        let saveInventory = this.scene.registry.get('inventario');
        if (saveInventory !== []) {

            this.inventario = saveInventory;
            this.scene.spawnObjects(this.inventario);
            //bucle que recorre el inventario
            for (let i = 0; i < this.inventario.length; i++) {
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

    /**
     * Guarda la lista de objetos del inventario actualizada para poder ser cargada más adelante.
     */
    saveObject() {
        this.scene.registry.set('inventario', this.inventario);
        this.showElements();
    }

    /**
    * Guarda el tiempo que queda para que acabe el juego.
    * @param {Number} info tiempo restante
    */
    saveTime(info) {
        this.scene.registry.set('timeLeft', info);
    }

    /**
    * Guarda la puntuación actual del jugador.
    */
    savePoints() {
        this.scene.registry.set('points', this.points);
    }

    /**
     * Desbloquea una zona al terminar el puzzle de la Carta.
     */
    saveUnlocked() {
        this.zoneUnlocked = true;
        this.scene.registry.set('unlocked', this.zoneUnlocked);
    }

    /**
     * Muestra el número de elementos actuales en el inventario para el debug.
     */
    showElements() {
        console.log(this.inventario.length);
    }

    /**
     * Mete el obj en el inventario: se debe controlar que no se cargue en la escena x de nuevo.
     * @param {Item} obj Item que queremos poner en el inventario
     */
    moveToInventory(obj) {
        this.itemsInInventory++;
        this.inventario.push(obj);
        this.saveObject();
        // Efecto de sonido
        const config = {
            mute: false,
            volume: 0.5,
            loop: false,
            delay: 0,
        };
        let sfx = obj.scene.sound.add("takeItem", config);
        sfx.play();

        obj.moveToInv();
    }

    /**
     * Habilita el arrastre de un objeto del inventario
     * @param {Item} obj Item del inventario a arrastrar
     */
    drag(obj) {
        obj.startdrag();
    }

    /**
     * @returns devuelve la posicion que le corresponde en la pantalla según su posición en el inventario
     */
    getInventoryPosition() {
        // El primer dígito es para el tamaño del objeto y el segundo para la separación entre objetos.
        // No dependen de la pantalla, son los tamaños con los que quedan visualmente bien posicionados.
        return ((this.itemsInInventory - 1) * 98 + 180);
    }

    /**
     * Muestra el texto que tiene asociado un NPC
     * @param {NPC} npc personaje clicado 
     */
    cargarDialogo(npc) {
        //console.log("Soy un NPC");

        if (!npc.solved)
            npc.saveText(npc.first);
        else
            npc.saveText(npc.last);
    }


    /**
     * Cambia de escena
     * @param {Scene} iniScene escena en la que se encuentra actualmente
     * @param {*} direction direccion en la que el usuario se mueve
     */
    changeScene(iniScene, direction) {
        let scenePosition;
        switch (direction) {
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
    checkObjects(id) {
        for (let i = 0; i < this.scene.characters.length; i++) {
            if (this.scene.characters[i].itemName !== undefined && this.scene.characters[i].itemName === id.name) {
                if (this.checkOverlap(this.scene.characters[i].image, id.image)) {

                    this.deleteItem(id.name);
                    if (this.scene.characters[i].esVendedora)
                        this.scene.characters[i].cartaEntregada = true;
                    else {
                        this.scene.characters[i].solved = true;
                        this.addPoints();
                    }

                    // Efecto de sonido
                    const config = {
                        mute: false,
                        volume: 0.5,
                        loop: false,
                        delay: 0,
                    };
                    let sfx = id.scene.sound.add("giveItem", config);
                    sfx.play();

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
    deleteItem(itemName) {
        for (let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i].name === itemName) {
                this.inventario.splice(i, 1);
            }
        }
    }

    /**
     * Suma puntuación cuando se le da el objeto correcto a un npc o se soluciona un puzle
     */
    addPoints() {
        this.points++;
        console.log("Puntos: " + this.points);
    }


}








