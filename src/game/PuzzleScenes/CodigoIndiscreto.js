import PuzzleInput from '../puzzleInput.js'
import Data from '../../data.js'

export default class CodigoIndscreto extends PuzzleInput {

  puzzle = Data.puzlesObjects.puzzleCI;

  constructor() {

    super({ key: 'codigoIndiscreto' });
    {
    };


  }

  preload() {
    super.preload();
    
    this.solution = "537";
    this.textInput = "Las palomitas se han derramado formando un misterioso código de números... ¿podrías descifrarlo?";
    this.sceneToLoad = 'feria';
    this.actionWin = this.LoadScene;
  }
  create() {
    super.create();
    this.spawnImage(this.puzzle);
    this.CreateTextEnter({ x: 0, y: 25 }, this, this.textInput);
  }




}