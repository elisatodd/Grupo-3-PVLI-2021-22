import PuzzleClick from '../puzzleClick.js';
import Data from '../../data.js'

export default class PuzzleCarniceria extends PuzzleClick {


  option1 = { name: 'zone1', pos: { x: 920, y: 530 }, scaleProportion: 10, image: '', functionality: this.Lose };
  option2 = { name: 'zone2', pos: { x: 1040, y: 530 }, scaleProportion: 10, image: '', functionality: this.Win };
  option3 = { name: 'zone3', pos: { x: 1160, y: 530 }, scaleProportion: 10, image: '', functionality: this.Lose };
  option4 = { name: 'zone4', pos: { x: 1280, y: 530 }, scaleProportion: 10, image: '', functionality: this.Lose };

  textNinios = Data.puzlesObjects.textNinios;
  imageNinios = Data.puzlesObjects.imageNinios;

  constructor() {

    super({ key: 'puzzleCarniceria' });
    {
    };
  }

  preload() {

    super.preload();

    this.AssignScene('mercado');
  }


  create() {
    super.create();

    this.CreateClickPuzzleButton(this.option1);
    this.CreateClickPuzzleButton(this.option2);
    this.CreateClickPuzzleButton(this.option3);
    this.CreateClickPuzzleButton(this.option4);

    this.spawnImage(this.textNinios);
    this.spawnImage(this.imageNinios);

  }
}