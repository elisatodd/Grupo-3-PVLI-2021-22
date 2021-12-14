import PuzzleClick from '../puzzleClick.js';

export default class PuzzleCarniceria extends PuzzleClick {

  
  option1 = {name: 'zone1', route: './assets/images/puzzles/optionA.png', pos : {x:920, y:530}, scaleProportion: 10, functionality : this.Lose};
  option2 = {name: 'zone2', route: './assets/images/puzzles/optionB.png', pos : {x:1040, y:530}, scaleProportion: 10, functionality : this.Lose};
  option3 = {name: 'zone3', route: './assets/images/puzzles/optionC.png', pos : {x:1160, y:530}, scaleProportion: 10, functionality : this.Lose};
  option4 = {name: 'zone4', route: './assets/images/puzzles/optionD.png', pos : {x:1280, y:530}, scaleProportion: 10, functionality : this.Win};
  
  text = {name: 'text', route: './assets/images/puzzles/puzleCarniceria.PNG', pos : {x:400, y:300}, scaleProportion: 0.7};
  imageNinios = {name: 'ninios', route: './assets/images/puzzles/ninios.png', pos : {x:1100, y:300}, scaleProportion: 1};

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
    
    this.loadImage(this.text);
    this.loadImage(this.imageNinios);
  }


  create()
  { 
   super.create();

   this.addSpecialButton(this.option1);
   this.addSpecialButton(this.option2);
   this.addSpecialButton(this.option3);
   this.addSpecialButton(this.option4);

   this.spawnImage(this.text);
   this.spawnImage(this.imageNinios);
  
  }
}