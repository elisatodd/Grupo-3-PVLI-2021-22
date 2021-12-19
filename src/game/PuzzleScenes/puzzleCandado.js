import PuzzleInput from '../puzzleInput.js'
import Data from '../../data.js'

export default class PuzzleCandado extends PuzzleInput {

    candado = Data.puzlesObjects.puzzleCandado;


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
    this.loadImage(this.candado);
    
  }
  create()
  {
    super.create();
    this.spawnImage(this.candado);
    this.CreateTextEnter({x:50, y:100}, this, '¿Qué número representa cada símbolo?');
  }


}