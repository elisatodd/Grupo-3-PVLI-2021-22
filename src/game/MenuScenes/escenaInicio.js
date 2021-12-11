/**
 * Escena inicial que muestra por pantalla un texto con la historia del personaje
 * @extends Escena
 */

import Escena from "../escena.js";

export default class EscenaInicio extends Escena {

    //texto que tiene que mostrar en pantalla
    texto = "El chiste del pan que habla xD";
    
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
        
        this.spawnText();

        this.timedEvent=this.time.delayedCall(3000, this.spawnText(), [], this)
    }
    update(){
        
    }
    assignText(story){
        this.texto= story;
    }

    spawnText(){
        let text = this.add.text(370, 150, this.texto, 
            { fontSize:'30px',color:'#4E342E',fontFamily: 'Arial'});
    }


    
}