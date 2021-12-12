import PuzzleInput from '../puzzleInput.js'

export default class CodigoIndscreto extends PuzzleInput {

  puzzle = {name: 'nota', route: './assets/images/puzzles/palomitasIndiscreto.png', pos:{x : 1000,y : 500}, image : '', scaleProportion : 0.9};

  constructor() {

    super({ key: 'codigoIndiscreto' });
    {
    };

   
  }

  preload()
  {
    this.solution = "537";
    this.textInput = "Las palomitas se han derramado formando un misterioso código de números... ¿podrías descifrarlo?";
    this.sceneToLoad = 'feria';
    this.actionWin = this.LoadScene;

    this._wallpaper = {name: 'fondo', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    this.loadImage(this.puzzle);
    
  }
  create()
  {
    this.createGameManager(this.game, this);
    
    this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });
    this.gameManager.points = this.game['gamePoints'].gamePoints;

    this.add.image(500, 500, this.puzzle.name)
    this.spawnWallpaper(this._wallpaper);
    this.spawnImage(this.puzzle);
    this.CreateTextEnter({x:0, y:25}, this, this.textInput);
  }


  

}