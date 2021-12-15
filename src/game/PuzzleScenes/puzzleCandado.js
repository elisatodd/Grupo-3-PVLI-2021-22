import PuzzleInput from '../puzzleInput.js'

export default class PuzzleCandado extends PuzzleInput {

    puzzle = {name: 'candadosimbolo', route: './assets/images/puzzles/candadosimbolos.png', pos:{x : 1000,y : 450}, image : '', scaleProportion : 2
};

  constructor() {

    super({ key: 'puzzleCandado' });
    {
    };

   
  }

  preload()
  {
    this.solution = "76";
    this.textInput = "¿Qué número representa cada símbolo?";
    this.sceneToLoad = 'parque';
    this.actionWin = this.LoadScene;

    this._wallpaper = {name: 'candadoPuzzle', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    this.loadImage(this.puzzle);
    
  }
  create()
  {
    super.create();
    this.spawnImage(this.puzzle);
    this.CreateTextEnter({x:50, y:100}, this, '¿Qué número representa cada símbolo?');
  }


}