export default class OBJETO {

  clicked = false;
  scene;
  route;
  pos;
  scaleProportion;
  functionality;
  name;
  image;
  direction; // a donde señala la flecha

  text = "  ";
  box;

  /**
   * 
   * @param {Data} object Conjunto de info. del objeto obtenida de data.js
   * @param {Scene} e escena en la que está el objeto
   */
  constructor(object, e) {
    this.route = object.sprite;
    let x = object.x;
    let y = object.y;
    this.pos = { x, y };
    this.scaleProportion = object.scale;
    this.name = object.name;
    this.scene = e;
  }

  /**
   * Nombre del metodo del GameManager al que se va llamar con este objeto
   * @param {String} func Metodo al que se va a llamar
   */
  assignFunctionality(func) {
    this.functionality = func;
  }

  /**
   * Asignacion de la direccion del objeto (flechas)
   * @param {String} d Dirección a la que se dirige la flecha
   */
  assignDir(d) {
    this.direction = d;
  }
}