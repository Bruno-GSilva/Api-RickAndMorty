const ul = document.getElementById("ul");

async function getCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/?page=19");
    const data = await response.json();
    
    data.results.forEach((element, key) => {
      let { name, id, status, species, type, gender,image, ...rest } =
        data.results[key];
        
        ul.innerHTML += `
        <div class="slide">
        <img src="${image}">
        <h3>${name}</h3>
        <li>Status: ${status}</li>
        <li>Specie: ${species}</li>
        <li>Tipo: ${type ? type : "Desconhecido"}</li>
        <li>Genero: ${gender}</li>
        </div>
        `;
      });
  } catch (err) {
    console.log(err);
  }
}
getCharacters();