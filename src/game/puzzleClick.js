/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
 import EscenaPuzzle from './escenaPuzzle.js'

 export default class PuzzleClick extends EscenaPuzzle {
    
    puzzle = this;
    sceneGame;
    

    winImage = {name: 'winImage', route: './assets/images/puzzles/win.png', pos : {x : 400, y : 300}, scaleProportion: 1, functionality : this.LoadScene};
    loseImage = {name: 'lossImage', route: './assets/images/puzzles/lose.png', pos : {x:400, y:300}, scaleProportion: 1, functionality : this.LoadScene};

   constructor(data) {
 
     super(data);
     {
     };

 
   }

   //pruebas
   option1 = {name: 'zone1', route: './assets/images/puzzles/redButton.png', pos : {x:200, y:250}, scaleProportion: 10, functionality : this.Win};
   option2 = {name: 'zone2', route: './assets/images/puzzles/blueButton.png', pos : {x:600, y:250}, scaleProportion: 10, functionality : this.Lose};

   //


//a la hora de hacer el create en las escenas heredadas añadir un super para que se cargen ambos recursos
preload()
{
    this._wallpaper = {name: 'cartaPuzle', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);

    this.loadImage(this.winImage);
    this.loadImage(this.loseImage);

    this.loadImage(this.option1);
    this.loadImage(this.option2);
}

create()
{

    this.spawnWallpaper(this._wallpaper);

   this.addSpecialButton(this.option1);
   this.addSpecialButton(this.option2);
}


//key de la escena donde se inciia el puzle
AssignScene(scene)
{
    this.sceneGame = scene;
}

LoadScene()
{
    //se le pueden pasar valores para cambiar al personaje
    this.scene.start(sceneGame);
}

Win()
{
    this.scene.spawnWallpaper(this.scene._wallpaper);
    this.scene.addSpecialButton(this.scene.winImage);
}

Lose()
{
    this.scene.spawnWallpaper(this.scene._wallpaper);
    this.scene.addSpecialButton(this.scene.loseImage);
}

   
}

