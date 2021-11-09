/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
import EscenaPuzzle from '../escenaPuzzle.js'

 export default class Puzzle1 extends EscenaPuzzle {
   constructor() {
 
 
     super({ key: 'Puzzle1' });
     {
     };

     this._sceneReference = this;
 
   }

  
   _point =
   {
       name : 'winButtton',
       imageRute : '../assets/sprites/character1.png',
       position : 
       {
        x : 150,
        y : 450
       },
       scaleProportion : 1
      ,
       align :
       {
        x : 0,
        y : 0
       },
       functionality : this.ResolvePuzzle
       ,
       //guardamos el componente escena para que se pueda acceder a ella desde callbacks(onclick)
       scene : this
       ,
       //almacenar e objeto creado
       botton : ''
   }

   _point2 =
   {
       name : 'loseButton',
       imageRute : '../assets/sprites/character2.png',
       position :
       {
        x :600,
        y : 375
       },
       scaleProportion : 1
      ,
      align :
      {
       x : 1,
       y : 1
      },
      functionality : this.FailPuzze
      ,
      scene : this
    }

   preload()
   {
     super.loadImage('wallpaper', '../assets/images/pueblo.jpg');
     super.loadImage(this._point.name, this._point.imageRute);
     super.loadImage(this._point2.name, this._point2.imageRute);
     super.loadImage('win', '../assets/sprites/winLogo.png');
     super.loadImage('lose', '../assets/sprites/loseLogo.png');
   }
   

   create()
   {
    this._wallpaper = this.spawnWallpaper('wallpaper');
    this._point.botton = super.addBottom(this._point);
    super.addBottom(this._point2);
   }

   ResolvePuzzle()
   {   
      this.botton.setActive(false).setVisible(false);
      //guardamos la scene para la llamada callback el objeto guarde referencia a la escena
     this.scene.spawnImage('win', {x : 100, y : 100}, {x:0.5, y:0.5}, 2);
   }
   FailPuzze()
   {
       this.scene.spawnImage('lose', {x : 100, y : 100}, {x:0.5, y:0.5}, 2);
   }
}




