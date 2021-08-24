const urlApp = 'http://127.0.0.1:5502';

class Animales {
  constructor (nombre, edad, img, comentarios, sonidos){
    let Nombre = nombre;
    let Edad = edad;
    let Imagenes = img;
    let Comentarios = comentarios;
    let Sonido = sonidos;

    this.getNombre = () => Nombre;
    this.getEdad = () => Edad;
    this.getImg = () => Imagenes;
    this.getComentarios = () => Comentarios;
    this.setComentarios = (nuevoComentarios) => Comentarios = nuevoComentarios;
    this.getSonido = () => Sonido;
  }
  get Nombre(){
    return this.getNombre();
  }
  get Edad(){
    return this.getEdad();
  }
  get Imagenes(){
    return `${urlApp}/assets/imgs/${this.getImg()}`
  }
  get Sonido(){
    return this.getSonido();
  }
  get Comentarios(){
    return this.getComentarios()
  }
  set Comentarios (nuevoComentarios){
    return this.setComentarios(nuevoComentarios);
  }
}

export default Animales;