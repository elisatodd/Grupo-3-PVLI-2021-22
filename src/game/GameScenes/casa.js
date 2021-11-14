/**
 * Escena de la casa
 * @extends Phaser.Scene
 */
 import EscenaJuego from '../escenaJuego.js';
 import OBJETO from "../../ArchivosIniciales/objeto.js";

 export default class Casa extends Phaser.Scene { // DEBERIA HEREDAR DE GAMESCENE EN EL FUTURO

    constructor(){
        // Nombre de la escena para el SceneManager
        super({ key: 'casa' });
        {

        };

    }

    preload(){
        console.log("Escena creada");
        //Carga de las flechas y el fondo
        this.load.image('flechaDcha','./assets/images/flechaDcha.png');
        this.load.image('flechaIzq','./assets/images/flechaIzq.png');
        this.load.image('flechaAbj','./assets/images/flechaAbj.png');
        this.load.image('flechaArr','./assets/images/flechaArr.png');
      this.load.image('wallpaper', './assets/images/pueblo.jpg');
        //this.load.image('fondoEscena','./assets/images/fondoPocho.jpg');
    }

    create(){
        console.log("Escena Casa");
        let wallpaper =  this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'wallpaper');
        
        //obtiene el tamaño de la cámara
        let scaleX = this.cameras.main.width / wallpaper.width;
        let scaleY = this.cameras.main.height / wallpaper.height;
        this.scale = Math.max(scaleX, scaleY);

        //lo escala a esta        
        wallpaper.setScale(this.scale).setScrollFactor(0);
         
        //Coloco las flechas
        //Derecha
        this.flechaDerecha= new OBJETO('flechaDcha',750,this.cameras.main.height / 2, 10,"flechaDcha",'imgFlechaDch');
        console.log("Funciona por favor");
        this.imgFlechaDch=this.add.image(this.flechaDerecha.damePosicion().x, this.flechaDerecha.damePosicion().y, this.flechaDerecha.dameImagen());
        this.imgFlechaDch.setScale(this.scale/this.flechaDerecha.dameEscala()).setScrollFactor(0);
        this.flechaDerecha.guardarEscena(this);

        this.imgFlechaDch.setInteractive();

        //izquierda
        this.flechaIzquierda= new OBJETO('flechaIzq',50,this.cameras.main.height / 2 , 10,"flechaIzq",'imgFlechaIzq');
        this.imgFlechaIzq=this.add.image(this.flechaIzquierda.damePosicion().x, this.flechaIzquierda.damePosicion().y, this.flechaIzquierda.dameImagen());
        this.imgFlechaIzq.setScale(this.scale/this.flechaIzquierda.dameEscala()).setScrollFactor(0);
        this.flechaIzquierda.guardarEscena(this);

        this.imgFlechaIzq.setInteractive();

        //Abajo
        this.flechaAbajo= new OBJETO('flechaAbj',this.cameras.main.width / 2,550,10,"flechaAbj",'imgFlechaAbj');
        this.imgFlechaAbj=this.add.image(this.flechaAbajo.damePosicion().x, this.flechaAbajo.damePosicion().y, this.flechaAbajo.dameImagen());
        this.imgFlechaAbj.setScale(this.scale/this.flechaAbajo.dameEscala()).setScrollFactor(0);
        this.flechaAbajo.guardarEscena(this);

        this.imgFlechaAbj.setInteractive();

        //Arriba
        this.flechaArriba= new OBJETO('flechaArr',this.cameras.main.width / 2,50,10,"flechaArr",'imgFlechaArr');
        this.imgFlechaArr=this.add.image(this.flechaArriba.damePosicion().x, this.flechaArriba.damePosicion().y, this.flechaArriba.dameImagen());
        this.imgFlechaArr.setScale(this.scale/this.flechaArriba.dameEscala()).setScrollFactor(0);
        this.flechaArriba.guardarEscena(this);


        this.imgFlechaArr.setInteractive();
    }

}