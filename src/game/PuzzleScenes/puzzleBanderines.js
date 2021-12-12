/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
 import EscenaPuzzle from './../escenaPuzzle.js'

 export default class PuzzleBanderines extends EscenaPuzzle {
    
   
    sceneGame = '';

    lastClicked = '';
    
    //combination = [2,5,1,6,3,4];
   
    //para saber si esta bien todo for y que id == position

    band1 = {name: 'band1', route: './assets/images/puzzles/b4.png', pos : {x : 0, y : 300}, scaleProportion: 4, functionality : this.Change, image : '', position: 3, id: 1};
    band2 = {name: 'band2', route: './assets/images/puzzles/bx.png', pos : {x : 0, y : 300}, scaleProportion: 4, functionality : this.Change, image : '', position: 1, id: 2};
    band3 = {name: 'band3', route: './assets/images/puzzles/b3.png', pos : {x : 0, y : 300}, scaleProportion: 4, functionality : this.Change, image : '', position: 5, id: 3};
    band4 = {name: 'band4', route: './assets/images/puzzles/b=.png', pos : {x : 0, y : 300}, scaleProportion: 4, functionality : this.Change, image : '', position: 6, id: 4};
    band5 = {name: 'band5', route: './assets/images/puzzles/b1.png', pos : {x : 0, y : 300}, scaleProportion: 4, functionality : this.Change, image : '', position: 2, id: 5};
    band6 = {name: 'band6', route: './assets/images/puzzles/b2.png', pos : {x : 0, y : 300}, scaleProportion: 4, functionality : this.Change, image : '', position: 4, id: 6};
    bands = [this.band1, this.band2, this.band3, this.band4, this.band5, this.band6];
    
    button = {name: 'button', route: './assets/images/puzzles/blueButton.png', pos : {x : 730, y : 600}, scaleProportion: 8, functionality : this.CheckWin, image : ''};
    
    
   constructor() {
 
    super("banderines");
    {
    };

 
   }

  


//a la hora de hacer el create en las escenas heredadas añadir un super para que se cargen ambos recursos
preload()
{
    this._wallpaper = {name: 'cartaPuzle', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    this.loadImage(this.button);

   for(let i = 0; i < this.bands.length; i++)
       this.loadImage(this.bands[i]);
   

   
}

create()
{
    super.create();
    
    this.addSpecialButton(this.button);

    for(let i = 0; i < this.bands.length; i++)
    {
        this.GetXObject(this.bands[i]);
        this.addSpecialButton(this.bands[i]);
    }
 
}

CheckWin()
{
    let win = true;

    for(let i = 0; i < this.scene.bands.length; i++)
    {
        if(this.scene.bands[i].id !== this.scene.bands[i].position)
        {
            win = false;
            break;
        }
    }
    
    if(win === true)
    {
        console.log("completado");
        this.scene.start(sceneGame);
    }

}

Change()
{
    let object = this.scene.GetObject(this);

    if(this.scene.lastClicked === '')
    {
        this.scene.lastClicked = object;
    }
    else if(this.scene.lastClicked.pos.x !== object.pos.x)
    {
        
      
       let aux = object.position;
       let scene = this.scene;

        object.position = this.scene.lastClicked.position;
        scene.lastClicked.position = aux;

       scene.RecolocateObject(object);
       scene.RecolocateObject(scene.lastClicked);

        scene.lastClicked = '';
        
        //scene.CheckWin();
    }
}

RecolocateObject(object)
{
    object.image.destroy();
   this.GetXObject(object);
this.addSpecialButton(object);
}

GetXObject(object)
{
    object.pos.x = this.sys.game.config.width/8 * object.position;
}

GetObject(clicked)
{
    let object = '';

    for(let i = 0; i < clicked.scene.bands.length; i++)
    {
        //console.log("clciked x: " + clicked.x + " band[i]: + clicked.s)
      if(clicked.x === clicked.scene.bands[i].pos.x)
      {
          object = clicked.scene.bands[i];
          break;
      }
    }

    return object;
}


   
}
