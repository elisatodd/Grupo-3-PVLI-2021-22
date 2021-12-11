/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Escena
 */

import Escena from "../escena.js";

export default class EscenaInicio extends Escena {

    //texto que tiene que mostrar en pantalla
    texto = "El chiste del pan que habla xD";
    i=0;
    posX=370;
    timedEvent;
    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'escenaInicio' });
        {
            
        };
    }

    
    
    preload(){
        this._wallpaper = {name: 'mainmenu ', route: './assets/images/fondoInicio.jpg'};
        this.loadImage(this._wallpaper);
        //this.load.script('webfont', 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js');
    }
    
    create(){        
        //No se si necesito gm en esta escena
        // //this.createGameManager(this.game, this);

        //Lo de la fuente no es tan importante, eso lo hago cuando tenga el resto solucionado
        // WebFont.load({
        //     google: {
        //         families: [ 'Space Mono']
        //     },
        //     active: function () // se llama a esta función cuando está cargada
        //     {
        //         let nuevoTexto = 
        //             this.add.text(370,400, this.texto,
        //                 { fontFamily: 'Space mono', fontSize: 80, color: '#ffffff' })
                
        //     }
        // });
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
        this.assignText ("El chiste del pan que habla xD");
        
        //this.spawnText();
        
        //this.timedEvent=new Phaser.Time.TimerEvent({delay:10});
        //this.time.addEvent(this.timedEvent);
        this.timedEvent = this.time.addEvent({ delay: 100, callback: this.onEvent, callbackScope: this, loop: true });
    }
    //  update(){
        //   console.log(this.i);
        // }
    onEvent(){
        this.spawnText(this.texto[this.i],this.posX);
    }
    spawnText(letra,posX){
            
            this.add.text(posX, 150, letra, { fontSize:'30px',color:'#4E342E',fontFamily: 'Arial'});
            console.log(this.posX);
            this.i++;
            this.posX+=15;
       if(this.i===this.texto.length){
          this.timedEvent.remove(false);
       }
        
    }
    assignText(story){
        this.texto= story;
    }
    


    
}