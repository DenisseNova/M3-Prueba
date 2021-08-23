import Animales from "./classanimals.js";

const urlApp = 'http://127.0.0.1:5502';

const play = (sonido) => {
  document.getElementById('player').innerHTML = `<audio src="${urlApp}/assets/sounds/${sonido}" autoplay></audio>`;
}

export class Leon extends Animales{
  constructor(nombre, edad, img, comentarios, sonidos){
    super(nombre, edad, img, comentarios, sonidos)
  }
  Rugir (){
    //return `<audio src="${urlApp}/assets/sounds/Rugido.mp3" autoplay></audio>`
    play(this.Sonido)
  }
}
export class Lobo extends Animales{
  constructor(nombre, edad, img, comentarios, sonidos){
    super(nombre, edad, img, comentarios, sonidos)
  }
  Aullar (){
    play(this.Sonido)
  }
}
export class Oso extends Animales{
  constructor(nombre, edad, img, comentarios, sonidos){
    super(nombre, edad, img, comentarios, sonidos)
  }
  Grunir (){
    play(this.Sonido)
  }
}
export class Serpiente extends Animales{
  constructor(nombre, edad, img, comentarios, sonidos){
    super(nombre, edad, img, comentarios, sonidos)
  }
  Sisear (){
    play(this.Sonido)
  }
}
export class Aguila extends Animales{
  constructor(nombre, edad, img, comentarios, sonidos){
    super(nombre, edad, img, comentarios, sonidos)
  }
  Chillar (){
    play(this.Sonido)
  }
}