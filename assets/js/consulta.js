const urlApp = 'http://127.0.0.1:5502';

let animales = ( () => {
  const getData = async () =>{
    const res = await fetch(urlApp);
    const data = await res.json();
    return data;
  }
  return {getData}
} )()

export default animales


/*const urlApp = 'http://127.0.0.1:5502';

class Prueba {
  constructor(name, image, sound) {
    this.name = name;
    this.image = image;
    this.sound = sound;
  }

  get getSound() {
    return `${urlApp}/assets/sounds/${this.sound}`;
  }
}

const getAnimals = async () => {
  const response = await fetch(`${urlApp}/animales.json`);
  if (!response.ok) return alert('No fue posible obtener la lista de animales');
  const data = await response.json();
  const mappedData = data.animales.map((animal) => new Prueba(animal.name, animal.imagen, animal.sonido))

  return mappedData;
}

const playSound = async (animal) => {
  document.querySelector('#myAudio').setAttribute('src', animal.getSound);
}

(async function load() {
  const data = await getAnimals()
  const selectedAnimal = data[1];
  playSound(selectedAnimal)
})() */
