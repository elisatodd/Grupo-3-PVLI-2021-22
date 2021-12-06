/**
 * Intentando hacer una escena
 * @extends EscenaPuzzle
 */
 import EscenaPuzzle from './escenaPuzzle.js'

 export default class PuzzleInput extends EscenaPuzzle {

    solution = '';
    currentInput = '';

    actionWin = '';
    
   

   constructor(data) {
 
 
     super(data);
     {
     };

     
 
   }


create()
{
//this.CreateTextEnter({x:100, y:100}, this);
}

ResolvePuzzle()
{
    return this.currentInput === this.solution;
}

CheckInput()
{
if(this.currentInput.length === this.solution.length)
{
    if(this.ResolvePuzzle())
    {
        console.log("aciertito");
        //función que deba de realizar
        this.actionWin();
    }
   
    else this.currentInput = '';
}
}

CreateTextEnter(pos, scene, textInput)
{
    //material sacado de: https://phaser.io/examples/v3/view/input/keyboard/text-entry

    this.add.text(pos.x+50, pos.y+100, textInput, { font: '52px Courier', fill: '#000000' });

    var textEntry = this.add.text(pos.x+70, pos.y+200, '', { font: '50px Courier', fill: '#000000' });

    this.input.keyboard.on('keydown', function (event) {

    if (event.keyCode === Phaser.Input.Keyboard.KeyCodes.ENTER) {
           scene.CheckInput();
           textEntry.text = '';
        }
    else
        {
        if (event.keyCode === 8 && textEntry.text.length > 0)
        {
            textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
        }
        else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
        {
            textEntry.text += event.key;
        }     
    }
    scene.currentInput = textEntry.text;

    });

}

   
}

