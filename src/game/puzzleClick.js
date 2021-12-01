/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
 import EscenaPuzzle from './escenaPuzzle.js'

 export default class PuzzleClick extends EscenaPuzzle {

    scene;

    winImage = {name: 'winImage', route: './assets/images/puzzles/win.png', pos = {x:0, y:0}, scaleProportion: 5, LoadScene};
    loseImage = {name: 'lossImage', route: './assets/images/puzzles/lose.png', pos = {x:0, y:0}, scaleProportion: 5, LoadScene};

   constructor(data) {
 
     super(data);
     {
     };

 
   }

   //pruebas
   option1 = {name: 'zone1', route: './assets/images/puzzles/redButton.png', pos = {x:0, y:250}, scaleProportion: 5, Win};
   option2 = {name: 'zone2', route: './assets/images/puzzles/blueButton.png', pos = {x:500, y:250}, scaleProportion: 5, Lose};

   //


//a la hora de hacer el create en las escenas heredadas añadir un super para que se cargen ambos recursos
preload()
{
    this.loadImage(this.winImage);
    this.loadImage(this.loseImage);

    this.loadImage(this.option1);
    this.loadImage(this.option2);
}

create()
{
   this.spawnImage(this.option1);
   this.spawnImage(thuis.option2);
}


//key de la escena donde se inciia el puzle
AssignScene(scene)
{
    this.scene = scene;
}

LoadScene()
{
    //se le pueden pasar valores para cambiar al personaje
    this.scene.start(scene);
}

Win()
{
    this.spawnImage(this.winImage);
}

Lose()
{
    this.spawnImage(this.loseImage);
}

   
}

