
import PuzzleInput from '../puzzleInput.js'

export default class Telefono extends PuzzleInput {

    carta = {name: 'nota', route: './assets/images/puzzles/telefono.jpg', pos:{x : 600,y : 300}, image : '', scaleProportion : 0.9};

  constructor() {

    super({ key: 'telefono' });
    {
      console.log("telefono");
    };

   
  }

  preload()
  {
    this.solution = "82135";
    this.textInput = "Cual es el número?";
    this.sceneToLoad = 'casa';
    this.actionWin = this.LoadScene;

    this._wallpaper = {name: 'fondo', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    this.loadImage(this.carta);
    
  }
  create()
  {
      //this.add.image(500, 500, this.carta.name)
      this.spawnWallpaper(this._wallpaper);
      this.spawnImage(this.carta);
    this.CreateTextEnter({x:0, y:500}, this, '¿Cuál es el número?');
  }


  

}