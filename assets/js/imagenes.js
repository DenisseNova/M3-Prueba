import Animales from "./consulta.js";

const images = document.getElementById("animal");

images.addEventListener('change', async () => {
  const {animales} = await Animales.getData();
  const animal = animales.find((a) => a.name == images.value);
  const img = `url("/assets/imgs/${animal.imagen}")`
  document.getElementById('preview').style.backgroundImage = img
});