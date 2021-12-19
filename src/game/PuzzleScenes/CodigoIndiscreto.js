import PuzzleInput from '../puzzleInput.js'
import Data from '../../Data.js'

export default class CodigoIndscreto extends PuzzleInput {

  puzzle = Data.puzlesObjects.puzzleCI;

  constructor() {

    super({ key: 'codigoIndiscreto' });
    {
    };


  }

  preload() {
    this.solution = "537";
    this.textInput = "Las palomitas se han derramado formando un misterioso código de números... ¿podrías descifrarlo?";
    this.sceneToLoad = 'feria';
    this.actionWin = this.LoadScene;

    this._wallpaper = { name: 'fondo', route: './assets/images/puzzles/telefonoWallpaper.jpg' };
    this.loadImage(this._wallpaper);
    this.loadImage(this.puzzle);

  }
  create() {
    super.create();
    this.spawnImage(this.puzzle);
    this.CreateTextEnter({ x: 0, y: 25 }, this, this.textInput);
  }




}