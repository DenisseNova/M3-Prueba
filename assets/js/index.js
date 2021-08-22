import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/zoo.js";
import Animales from "./consulta.js";

let registar = []

document.getElementById('btnRegistrar').addEventListener('click', async () => {
  let nombre = document.getElementById('animal');
  let edad = document.getElementById('edad');
  let comentarios = document.getElementById('comentarios');

  const {animales} = await Animales.getData();
  const animalSelec = animales.find((a) => a.name == nombre.value);
  let nuevoAnimal = null
  switch(animalSelec.name){
    case 'Leon': nuevoAnimal = new Leon(nombre.value, edad.value, animalSelec.imagen, comentarios, animalSelec.sonido); break;
    case 'Lobo': nuevoAnimal = new Lobo(nombre.value, edad.value, animalSelec.imagen, comentarios, animalSelec.sonido); break;
    case 'Oso': nuevoAnimal = new Oso(nombre.value, edad.value, animalSelec.imagen, comentarios, animalSelec.sonido); break;
    case 'Serpiente': nuevoAnimal = new Serpiente(nombre.value, edad.value, animalSelec.imagen, comentarios, animalSelec.sonido);  break;
    case 'Aguila': nuevoAnimal = new Aguila(nombre.value, edad.value, animalSelec.imagen, comentarios, animalSelec.sonido); break;
  }
  registar.push(nuevoAnimal)

  let resultados = "" 
  for(let item of registar){
    console.log('animal', item)
    resultados += ` 
        <div class="card micard">
          <img src="${item.Imagenes}" class="card-img-top" alt="...">
          <div class="card-body">
            <i class="fas fa-volume-up"></i>
          </div>
        </div>
    `
  }

  document.getElementById('Animales').innerHTML = resultados

})