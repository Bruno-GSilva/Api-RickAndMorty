const lista = document.getElementById("lista");
const btnL = document.getElementById("btnL")
const btnR = document.getElementById("btnR")
let value = 1

async function getCharacters() {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${value}`
    );
    const data = await response.json();
    
    data.results.forEach((element, key) => {
      let { name, id, status, species, type, gender, image, ...rest } = data.results[key];
      let cor = "black";
      lista.innerHTML += `
        <div class="card">
        <img src="${image}">
        <h3>${name}</h3>
        <li><p style="font-size: 23px; color:${
          status == "Alive" ? (cor = "green") : (cor = "red")
        };">${status}</p></li>
        <li><p>Specie: ${species}</p></li>
        <li><p>Tipo: ${type ? type : "Desconhecido"}</p></li>
        <li><p>Genero: ${gender}</p></li>
        </div>
        `;
      });
    } catch (err) {
      console.log(err);
    }
}
getCharacters();

btnL.addEventListener('click',() => {
  value === 0? value = 0:(
    value--,
    lista.innerHTML = " ",
    getCharacters()
  )
  console.log(value)
})

btnR.addEventListener('click',() => {
  value === 19? value = 0:(
    value++,
    lista.innerHTML = " ",
    getCharacters()
  )
  console.log(value)
})