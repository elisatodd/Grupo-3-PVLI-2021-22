import PuzzleInput from '../puzzleInput.js'

export default class CartaPuzle extends PuzzleInput {

    texto = {name: 'cartaNovia', route: './assets/images/puzzles/LaCarta.jpg', pos:{x : 400,y : 250}, image : '', scaleProportion : 0.9};

  constructor() {

    super({ key: 'cartaPuzle' });
    {
      console.log("CartaPuzle");
    };

   
  }

  preload()
  {
    this.solution = "ayuda";
    this.textInput = "Cual es el mensaje?";
    this.sceneToLoad = 'sombrereria';
    this.actionWin = this.LoadScene;

    this._wallpaper = {name: 'cartaPuzle', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    this.loadImage(this.texto);
    
  }
  create()
  {
      //this.add.image(500, 500, this.texto.name)
      this.spawnWallpaper(this._wallpaper);
      this.spawnImage(this.texto);
    this.CreateTextEnter({x:0, y:500}, this, '¿Cuál es mensaje?');
  }


  

}