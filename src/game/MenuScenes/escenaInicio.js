/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Escena
 */

import Escena from "../escena.js";
import Object from "../Objects/objeto.js"
import Data from "../../data.js"

export default class EscenaInicio extends Escena {

    //texto que tiene que mostrar en pantalla
    texto = " ";
    i ;
    posX ;
    posY ;
    timedEvent;
    playButton;
    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'escenaInicio' });
        {
            
        };
    }

    
    
    preload(){
        this._wallpaper = {name: 'initialScene', route: './assets/images/fondoInicio.jpg'};
        this.playButton = new Object(Data.buttons.secondaryPlayButton, this);
        this.loadImage(this._wallpaper);
        this.loadFont("initialFont", "/assets/fonts/SpaceMono-Italic.ttf");
        this.loadImage(this.playButton);
        
        //reseteo el texto
        this.i=0;
        this.posX=350;
        this.posY=120;
    }
    
    create(){        
        //No se si necesito gm en esta escena
        this.createGameManager(this.game, this);
        this._wallpaper = this.spawnWallpaper(this._wallpaper);
        this.assignText (Data.cinematics.initialText.string);
        
        this.timedEvent = this.time.addEvent({ delay: 15, callback: this.onEvent, callbackScope: this, loop: true });
        
        this.playButton.assignFunctionality('startGame');
        this.addBottom(this.playButton);

    }
    
    onEvent(){
        this.spawnText(this.texto[this.i]);
    }
    spawnText(letra){
        //Salto de linea
        if (letra==='='){
            this.posY+=40;
            this.posX=350;
        }
        else{
            this.add.text(this.posX, this.posY, letra, { fontSize:'30px',color:'#4E342E',fontFamily: 'initialFont'});

            this.posX+=15;
        }
            this.i++;
        if(this.i===this.texto.length){
          this.timedEvent.remove(false);
        }
        
    }
    assignText(story){
        this.texto= story;
    }

    //Sacado de la documentación de clase literalmente
    loadFont(name, url) {
    let newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}


    
}