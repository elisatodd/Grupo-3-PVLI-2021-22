import PuzzleClick from '../puzzleClick.js';

export default class PuzzleCarniceria extends PuzzleClick {

    puzzle = {name: 'cartaNovia', route: './assets/images/puzzles/ninios.png', pos:{x : 1000,y : 410}, image : '', scaleProportion : 2};

  constructor() {

    super({ key: 'puzzleCarniceria' });
    {
    };

   
  }

  preload()
  {
    this.solution = "AYUDA";
    this.textInput = "¿Cual es el mensaje oculto?";
    this.sceneToLoad = 'sombrereria';
    this.actionWin = this.LoadScene;

    this._wallpaper = {name: 'cartaPuzle', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    this.loadImage(this.puzzle);
    
  }
  create()
  {
    this.spawnWallpaper(this._wallpaper);
    super.create();
   

    this.spawnImage(this.puzzle);
    
  }


  

}