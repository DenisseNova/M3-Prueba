import {Leon, Lobo, Oso, Serpiente, Aguila} from "./clases/zoo.js";
import Animales from "./consulta.js";

let registar = []

function mostrarModal(posicionAnimal){
  const detalleAnimal = document.getElementById('detalleAnimal');
  detalleAnimal.innerHTML = '';

  const ImagenSeleccionada = registar[posicionAnimal];

  detalleAnimal.innerHTML = `
  <div class="card">
  <img src="${ImagenSeleccionada.Imagenes}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">${ImagenSeleccionada.Edad}</p>
    <p class="card-text">Comentarios</p>
    <p class="card-text">${ImagenSeleccionada.Comentarios}</p>
  </div>
</div>
  `
  $('#exampleModal').modal({  })
}

window.mostrarModal = mostrarModal;

function reproducirSonido(posicionAnimal){
  const animalSeleccionado = registar[posicionAnimal]
  switch(animalSeleccionado.Nombre){
    case 'Leon': animalSeleccionado.Rugir(); break;
    case 'Lobo': animalSeleccionado.Aullar(); break;
    case 'Oso': animalSeleccionado.Grunir(); break;
    case 'Serpiente': animalSeleccionado.Sisear(); break;
    case 'Aguila': animalSeleccionado.Chillar(); break;
  }
}
window.reproducirSonido = reproducirSonido;


document.getElementById('btnRegistrar').addEventListener('click', async () => {
  let nombre = document.getElementById('animal');
  let edad = document.getElementById('edad');
  let comentarios = document.getElementById('comentarios');
  if(!nombre.value || !edad.value || !comentarios.value) return alert('Debe completar los campos requeridos');  // validacion 

  const {animales} = await Animales.getData();
  const animalSelec = animales.find((a) => a.name == nombre.value);
  let nuevoAnimal = null

  switch(animalSelec.name){
    case 'Leon': nuevoAnimal = new Leon(nombre.value, edad.value, animalSelec.imagen, comentarios.value, animalSelec.sonido); break;
    case 'Lobo': nuevoAnimal = new Lobo(nombre.value, edad.value, animalSelec.imagen, comentarios.value, animalSelec.sonido); break;
    case 'Oso': nuevoAnimal = new Oso(nombre.value, edad.value, animalSelec.imagen, comentarios.value, animalSelec.sonido); break;
    case 'Serpiente': nuevoAnimal = new Serpiente(nombre.value, edad.value, animalSelec.imagen, comentarios.value, animalSelec.sonido);  break;
    case 'Aguila': nuevoAnimal = new Aguila(nombre.value, edad.value, animalSelec.imagen, comentarios.value, animalSelec.sonido); break;
  }
  
  registar.push(nuevoAnimal)

  let resultados = "" 
  for(let i = 0; i < registar.length; i++){
    resultados += ` 
        <div class="card micard">
          <img src="${registar[i].Imagenes}" class="card-img-top imgfijo" alt="..." onclick='mostrarModal(${i})'>
          <div class="card-body">
            <i class="fas fa-volume-up" id="volumen" onclick='reproducirSonido(${i})'></i>
          </div>
        </div>
    `
  }


  document.getElementById('Animales').innerHTML = resultados

  nombre.value = "";
  edad.value = "";
  comentarios.value = "";
  document.getElementById('preview').style.removeProperty('background-image')
})

//document.getElementById('exampleModal').addEventListener('click', mostrarModal)

//document.getElementById('exampleModal').addEventListener('click', () => {})
