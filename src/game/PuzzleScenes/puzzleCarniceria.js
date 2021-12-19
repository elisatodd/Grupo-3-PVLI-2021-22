import PuzzleClick from '../puzzleClick.js';
import Data from '../../data.js'

export default class PuzzleCarniceria extends PuzzleClick {

  
  option1 = {name: 'zone1', route: './assets/images/puzzles/optionA.png', pos : {x:920, y:530}, scaleProportion: 10, image : '', functionality : this.Lose};
  option2 = {name: 'zone2', route: './assets/images/puzzles/optionB.png', pos : {x:1040, y:530}, scaleProportion: 10, image : '', functionality : this.Win};
  option3 = {name: 'zone3', route: './assets/images/puzzles/optionC.png', pos : {x:1160, y:530}, scaleProportion: 10, image : '', functionality : this.Lose};
  option4 = {name: 'zone4', route: './assets/images/puzzles/optionD.png', pos : {x:1280, y:530}, scaleProportion: 10, image: '', functionality : this.Lose};
  
  textNinios = Data.puzlesObjects.textNinios;
  imageNinios = Data.puzlesObjects.imageNinios;

  constructor() {

    super({ key: 'puzzleCarniceria' });
    {
    };
  }

  preload()
  {

    super.preload();

    this.AssignScene('mercado');

    this.loadImage(this.option1);
    this.loadImage(this.option2);
    this.loadImage(this.option3);
    this.loadImage(this.option4);
    
    this.loadImage(this.textNinios);
    this.loadImage(this.imageNinios);
  }


  create()
  { 
   super.create();

   this.CreateClickPuzzleButton(this.option1);
   this.CreateClickPuzzleButton(this.option2);
   this.CreateClickPuzzleButton(this.option3);
   this.CreateClickPuzzleButton(this.option4);

   this.spawnImage(this.textNinios);
   this.spawnImage(this.imageNinios);
  
  }
}