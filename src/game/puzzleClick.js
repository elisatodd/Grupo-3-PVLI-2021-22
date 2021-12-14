/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
 import EscenaPuzzle from './escenaPuzzle.js'

 export default class PuzzleClick extends EscenaPuzzle {
    
    puzzle = this;
    sceneGame = '';

    buttons = [];

    winImage = {name: 'winImage', route: './assets/images/puzzles/win.png', pos : {x : 825, y : 412}, scaleProportion: 0.3, functionality : this.LoadScene};
    loseImage = {name: 'lossImage', route: './assets/images/puzzles/lose.png', pos : {x:825, y:412}, scaleProportion: 0.8, functionality : this.LoadScene};

   constructor(data) {
 
     super(data);
     {
     };

 
   }

   //pruebas
   //option1 = {name: 'zone1', route: './assets/images/puzzles/opcionA.png', pos : {x:200, y:250}, scaleProportion: 10, functionality : this.Win};
   //option2 = {name: 'zone2', route: './assets/images/puzzles/opcionB.png', pos : {x:400, y:250}, scaleProportion: 10, functionality : this.Lose};
   //option3 = {name: 'zone3', route: './assets/images/puzzles/opcionC.png', pos : {x:600, y:250}, scaleProportion: 10, functionality : this.Lose};
   //option4 = {name: 'zone4', route: './assets/images/puzzles/opcionD.png', pos : {x:800, y:250}, scaleProportion: 10, functionality : this.Lose};
   //


//a la hora de hacer el create en las escenas heredadas añadir un super para que se cargen ambos recursos
preload()
{
    this._wallpaper = {name: 'cartaPuzle', route: './assets/images/puzzles/bluewallpaper.jpg'};
    this.loadImage(this._wallpaper);

    this.loadImage(this.winImage);
    this.loadImage(this.loseImage);

    //this.loadImage(this.option1);
    //this.loadImage(this.option2);
}

create()
{

    super.create();    

   //this.addSpecialButton(this.option1);
   //this.addSpecialButton(this.option2);
}


/**
 * Asignación de la escena ligada a este puzle para poder ser cargada a la finalización de este
 * @param {string} scene: variable con el nombre de la escena
 */
AssignScene(scene)
{
    this.sceneGame = scene;
    
}

/**
 * Carga de la escena de juego asociada al puzle
 */
LoadScene()
{    
    this.scene.scene.start(this.scene.sceneGame);
  
}

/**
 * Crea un botón y lo almacena para ser desacivado una vez s ehaya seleccionado la opción
 * @param {Datos} info parámetros del  botón a crear
 */
CreateClickPuzzleButton(info)
{
   this.addSpecialButton(info);
   this.buttons.push(info.image);
}

/**
 * Elimina los botones almacenados en el contendor d ela escena para no permitir
 *  seleccionar otras opcioens una vez picada la primera
 */
EliminateButtons()
{
    for(let i = 0; i< this.buttons.length; i++)
    {
        this.buttons[i].destroy();
    }
}

/**
 * Elimina los demás botones y muestra la imagen asociada a solucionar del puzle como botón, 
 * dando feedback y permitiendo salir al jugador de la escena
 */
Win()
{      
    let scene = this.scene;
    scene.addSpecialButton(scene.winImage);
    scene.EliminateButtons();
    
}


/**
 * Elimina los demás botones y muestra el botón asociado a fallar la solución del puzle como botón,
 *  dando feedback y permitiendo salir al jugador de la escena
 */
Lose()
{
    let scene = this.scene;
    scene.EliminateButtons();    
    scene.addSpecialButton(scene.loseImage);
}

   
}

