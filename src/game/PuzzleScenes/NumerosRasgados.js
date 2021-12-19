
import PuzzleInput from '../puzzleInput.js'
import Data from '../../data.js'

export default class NumerosRasgados extends PuzzleInput {

  carta = Data.puzlesObjects.NumerosPuzle;

  constructor() {

    super({ key: 'NumerosRasgados' });
    {
    };


  }

  preload() {
    super.preload();

    this.solution = "978564231";
    this.textInput = "¿Cual es el número?";
    this.sceneToLoad = 'casa';
    this.actionWin = this.LoadScene;

  }
  create() {
    super.create();
    this.spawnImage(this.carta);
    this.CreateTextEnter({ x: 50, y: 100 }, this, '¿Cuál es el número?');
  }


}