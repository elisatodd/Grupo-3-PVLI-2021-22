import PuzzleInput from '../puzzleInput.js'

export default class CodigoIndscreto extends PuzzleInput {

    //carta = {name: 'nota', route: './assets/images/puzzles/telefono.jpg', pos:{x : 600,y : 300}, image : '', scaleProportion : 0.9};

  constructor() {

    super({ key: 'codigoIndiscreto' });
    {
      console.log("CodigoIndscreto");
    };

   
  }

  preload()
  {
    this.solution = "571";
    this.textInput = "Cual es el código?";
    this.sceneToLoad = 'feria';
    this.actionWin = this.LoadScene;

    this._wallpaper = {name: 'fondo', route: './assets/images/puzzles/CodigoIndiscreto.jpg'};
    this.loadImage(this._wallpaper);
    //this.loadImage(this.carta);
    
  }
  create()
  {
      //this.add.image(500, 500, this.carta.name)
      this.spawnWallpaper(this._wallpaper);
      //this.spawnImage(this.carta);
    this.CreateTextEnter({x:0, y:500}, this, '¿Cuál es código?');
  }


  

}