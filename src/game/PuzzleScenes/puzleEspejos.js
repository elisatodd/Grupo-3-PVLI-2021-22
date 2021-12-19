import PuzzleClick from '../puzzleClick.js';
import Data from '../../data.js'


export default class PuzzleEspejos extends PuzzleClick {

  
  option1 = {name: 'zone1', route: './assets/images/puzzles/optionA.png', pos : {x:400, y:450}, scaleProportion: 10, image : '', functionality : this.Lose};
  option2 = {name: 'zone2', route: './assets/images/puzzles/optionB.png', pos : {x:725, y:780}, scaleProportion: 10, image : '', functionality : this.Win};
  option3 = {name: 'zone3', route: './assets/images/puzzles/optionC.png', pos : {x:1080, y:450}, scaleProportion: 10, image : '', functionality : this.Lose};
  option4 = {name: 'zone4', route: './assets/images/puzzles/optionD.png', pos : {x:725, y:100}, scaleProportion: 10, image: '', functionality : this.Lose};
  
  text = Data.puzlesObjects.textAcertijo;
  acertijo = Data.puzlesObjects.acertijo;

  constructor() {

    super({ key: 'puzzleEspejos' });
    {
    };
  }

  preload()
  {

    super.preload();

    this.AssignScene('casaEspejos');
    
    this.loadImage(this.text);
    this.loadImage(this.acertijo);

    this.loadImage(this.option1);
    this.loadImage(this.option2);
    this.loadImage(this.option3);
    this.loadImage(this.option4);
    
   
  }


  create()
  { 
   super.create();

   this.CreateClickPuzzleButton(this.option1);
   this.CreateClickPuzzleButton(this.option2);
   this.CreateClickPuzzleButton(this.option3);
   this.CreateClickPuzzleButton(this.option4);

   this.spawnImage(this.text);
   this.spawnImage(this.acertijo);
  
  }
}