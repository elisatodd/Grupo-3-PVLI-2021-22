/**
 * Intentando hacer una escena
 * @extends Phaser.Scene
 */
export default class Puzzle extends Phaser.Scene {

  constructor() {
    // Nombre de la escena para el SceneManager
    super({ key: 'puzzleScene' });
    console.log("puzleIniciado");
  }

  // Métodos init, preload, create, update
  preload() {
    console.log("puzleCargado");
    this.load.image('wallpaperPuzzle', './assets/images/puzle.png');
  }

  create() { // Crea los cuatro puntos del puzzle
    console.log("puzleCreado");
    this.add.image(this.cameras.main.width / 2, this.cameras.main.height / 2, 'wallpaperPuzzle');

    var textConfig = { fontSize: '80px', color: '#ff0000', fontFamily: 'Arial' };

    let option1 = this.add.text(0, this.cameras.main.height / 2, '1', textConfig);
    option1.setInteractive();
    let option2 = this.add.text(this.cameras.main.width / 2, 0, '2', textConfig);
    option2.setInteractive();
    let option3 = this.add.text(this.cameras.main.width - 100, this.cameras.main.height / 2, '3', textConfig);
    option3.setInteractive();
    let option4 = this.add.text(this.cameras.main.width / 2 - 40, this.cameras.main.height - 80, '4', textConfig);
    option4.setInteractive();

    //lo primero marca que tipo de input

    option1.on('pointerdown', () => {
      console.log('no es este');
      this.scene.start('gameScene', '0'); //resultao : '
    }
    );
    option2.on('pointerdown', () => {
      console.log('no es este');
      this.scene.start('gameScene', '0')
    }
    );
    option3.on('pointerdown', () => {
      console.log('no es este');
      this.scene.start('gameScene', '0')
    }
    );
    option4.on('pointerdown', () => {
      console.log('este');
      this.scene.start('gameScene', '1')
    }
    );
  }
}






