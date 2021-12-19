import PuzzleInput from '../puzzleInput.js'
import Data from '../../data.js'

export default class CartaPuzle extends PuzzleInput {

  carta = Data.puzlesObjects.carta;

  constructor() {

    super({ key: 'cartaPuzle' });
    {
    };


  }

  preload() {
    super.preload();
    
    this.solution = "AYUDA";
    this.textInput = "¿Cual es el mensaje oculto?";
    this.sceneToLoad = 'sombrereria';
    this.actionWin = this.LoadScene;

  }
  create() {
    super.create();

    this.spawnImage(this.carta);
    this.CreateTextEnter({ x: 50, y: 100 }, this, '¿Cuál es mensaje oculto?');

  }
}