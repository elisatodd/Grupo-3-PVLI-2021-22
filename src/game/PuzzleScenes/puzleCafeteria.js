import PuzzleClick from '../puzzleClick.js';

export default class PuzzleCafeteria extends PuzzleClick {

  
  option1 = {name: 'zone1', route: './assets/images/puzzles/optionA.png', pos : {x:1010, y:575}, scaleProportion: 10, image : '', functionality : this.Win};
  option2 = {name: 'zone2', route: './assets/images/puzzles/optionB.png', pos : {x:1200, y:575}, scaleProportion: 10, image : '', functionality : this.Lose};
  option3 = {name: 'zone3', route: './assets/images/puzzles/optionC.png', pos : {x:1400, y:575}, scaleProportion: 10, image : '', functionality : this.Lose};
  
  enigma = {name: 'enigma', route: './assets/images/puzzles/cafeteriaPuzzle.png', pos : {x:500, y:300}, scaleProportion: 0.7};
  acertijo = {name: 'acertijoCaferia', route: './assets/images/puzzles/opcionesCafeteria.png', pos : {x:1200, y:450}, scaleProportion: 0.7};

  constructor() {

    super({ key: 'puzzleCafeteria' });
    {
    };
  }

  preload()
  {

    super.preload();

    this.AssignScene('plaza');
    
    this.loadImage(this.enigma);
    this.loadImage(this.acertijo);

    this.loadImage(this.option1);
    this.loadImage(this.option2);
    this.loadImage(this.option3);    
   
  }


  create()
  { 
   super.create();

   this.CreateClickPuzzleButton(this.option1);
   this.CreateClickPuzzleButton(this.option2);
   this.CreateClickPuzzleButton(this.option3);

   this.spawnImage(this.enigma);
   this.spawnImage(this.acertijo);
  
  }
}