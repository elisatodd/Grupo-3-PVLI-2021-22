/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
 import EscenaPuzzle from './escenaPuzzle.js'

 export default class PuzzleTopoz extends EscenaPuzzle {
    
   
    sceneGame = '';
    inicialize = false;
 
    
    //base grafica que sera usada para todos
    up = { name: 'topoUp', route: './assets/images/puzzles/topoOff.png', pos : {x : "", y : ""}, scaleProportion: 2, image: ""};
    down = { name: 'topoDown', route: './assets/images/puzzles/topoOn.png', pos : {x : "", y : ""}, scaleProportion: 2, image: ""};
    
   //botón
    o1 = button({id: 1, pos : {x:400, y : 150}, functionality : this.Change});
    o2 = button({id: 2, pos : {x:650, y : 150}, functionality : this.Change});
    o3 = button({id: 3, pos : {x:900, y : 150}, functionality : this.Change});
    o4 = button({id: 4, pos : {x:400, y : 400}, functionality : this.Change});
    o5 = button({id: 5, pos : {x:650, y : 400}, functionality : this.Change});
    o6 = button({id: 6, pos : {x:900, y : 400}, functionality : this.Change});
    o7 = button({id: 7, pos : {x:400, y : 650}, functionality : this.Change});
    o8 = button({id: 8, pos : {x:650, y : 650}, functionality : this.Change});
    o9 = button({id: 9, pos : {x:900, y : 650}, functionality : this.Change});




    map = [[this.o1, this.o2, this. o3],
           [this.o4, this.o5, this.o6],
           [this.o7, this.o8, this.o9]];
    
   constructor() {
 
     super("topoz");
     {
     };

 
   }

  


//a la hora de hacer el create en las escenas heredadas añadir un super para que se cargen ambos recursos
preload()
{
    this._wallpaper = {name: 'cartaPuzle', route: './assets/images/puzzles/telefonoWallpaper.jpg'};
    this.loadImage(this._wallpaper);
    //imagen de up
    this.loadImage(this.up);
    //imagen de down
    this.loadImage(this.down);
    //imagen transparente
    this.loadImage({name : "transparent", route: "./assets/images/puzzles/transparent.png"});
   
   
}

create()
{
    this.createGameManager(this.game, this);

    this.timedEvent = this.time.addEvent({ delay: this.game['timeLeft'].time, callback: this.gameManager.endGame, callbackScope: this.gameManager });

    this.gameManager.points = this.game['gamePoints'].gamePoints;

    this.spawnWallpaper(this._wallpaper);
  
    for(let n = 0; n < this.map.length; n++)
    {
        for(let j = 0; j < this.map[n].length; j++)
        {
            this.ChangeObj(this.map[n][j]);
        }
    }
    
    this.inicialize = true;
 
}


Change()
{
    let pos = {x : this.x, y : this.y};
    let obj = this.scene.GetObj(pos);
    this.scene.ChangeObj(obj);

    let indice = this.scene.GetArrayPos(obj.id);

    for(let n = indice.v1+1; n < this.scene.map.length; n++)
        this.scene.ChangeObj(this.scene.map[n][indice.v2]);

    for(let n = indice.v1-1; n >= 0; n--)
        this.scene.ChangeObj(this.scene.map[n][indice.v2]);


    for(let n = indice.v2+1; n < this.scene.map.length; n++)
        this.scene.ChangeObj(this.scene.map[indice.v1][n]);

    for(let n = indice.v2-1; n >= 0; n--)
        this.scene.ChangeObj(this.scene.map[indice.v1][n]);


    this.scene.CheckPuzzle();

}

ChangeObj(obj)
{
    
    if(this.inicialize)
    obj.right = !obj.right;

    console.log("objeto cambiado");

   if(obj.right === true)
   {
    this.up.pos = {x : obj.pos.x, y: obj.pos.y};
    this.spawnImage(this.up);
   
   } 
   else 
   {
    this.down.pos = {x : obj.pos.x, y : obj.pos.y};
    this.spawnImage(this.down);
    
   }
  
 
    this.addSpecialButton(obj);

  
}

GetArrayPos(id)
{
    for(let n = 0; n < this.map.length; n++)
    {
        for(let j = 0; j < this.map[n].length; j++)
        {
            if(this.map[n][j].id === id) 
            {
                let indice = {v1: n, v2 : j};
                return indice;
            }
        }
    }
  
}

GetObj(pos)
{
    for(let n = 0; n < this.map.length; n++)
    {
        for(let j = 0; j < this.map[n].length; j++)
        {
            if(this.map[n][j].pos.x === pos.x && this.map[n][j].pos.y === pos.y  ) 
            {
               
                return this.map[n][j];
            }
        }
    }
   
}

CheckPuzzle()
{
  let allDown = true;
   for(let n = 0; n < this.map.length && allDown === true; n++)
   {
    for(let j = 0; j < this.map[n].length && allDown === true; j++)
    {
        allDown = !this.map[n][j].right;
    }
   }
   


    if(allDown) 
    {
        console.log("completado");
        this.start(sceneGame);
    }
}


}

function button(obj) {

    const template = 
    {
        name : 'transparent',       
       pos : "", 
        scaleProportion: 1,       
        id  : "",
        right : true

    }

    return Object.assign(template, obj);
    
}
