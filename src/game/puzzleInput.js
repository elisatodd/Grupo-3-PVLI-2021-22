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
    super.create();
//this.CreateTextEnter({x:100, y:100}, this);
}

ResolvePuzzle()
{
    return this.currentInput === this.solution;
}

CheckInput()
{
    if(this.currentInput.length === this.solution.length && this.ResolvePuzzle())
    {
        //función que deba de realizar
        this.actionWin();
    }
    else {
        this.currentInput = '';

        // Efecto de sonido
        const config = {
            mute: false,
            volume: 0.5,
            loop: false,
            delay: 0,
        };
        let sfx = this.scene.scene.sound.add("losePuzzle", config);
        sfx.play();
    }
    
}

CreateTextEnter(pos, scene, textInput)
{
    //material sacado de: https://phaser.io/examples/v3/view/input/keyboard/text-entry
    let text = this.add.text(pos.x+50, pos.y+100, textInput,  { fontSize:'30px',color:'#000000',fontFamily: 'Georgia'});
    text.setStroke('#fff', 10);

    var textEntry = this.add.text(pos.x+70  , pos.y+200, '',  { fontSize:'30px',color:'#000000',fontFamily: 'Georgia'});
    textEntry.setStroke('#fff', 5);

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

