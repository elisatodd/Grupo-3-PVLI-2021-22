
import PuzzleInput from '../puzzleInput.js'

export default class NumerosRasgados extends PuzzleInput {

    carta = {name: 'rasgados', route: './assets/images/puzzles/telefono.jpg', pos:{x : 1000,y : 400}, image : '', scaleProportion : 0.7
};

  constructor() {

    super({ key: 'NumerosRasgados' });
    {
    };

   
  }

  preload()
  {
    this.solution = "978564231";
    this.textInput = "¿Cual es el número?";
    this.sceneToLoad = 'casa';
    this.actionWin = this.LoadScene;

    this._wallpaper = {name: 'numRasg', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    this.loadImage(this.carta);
    
  }
  create()
  {
    this.createGameManager(this.game, this);

    this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });

    this.gameManager.points = this.game['gamePoints'].gamePoints;
    //this.add.image(500, 500, this.carta.name)
    this.spawnWallpaper(this._wallpaper);
    this.spawnImage(this.carta);
    this.CreateTextEnter({x:50, y:100}, this, '¿Cuál es el número?');
  }


}