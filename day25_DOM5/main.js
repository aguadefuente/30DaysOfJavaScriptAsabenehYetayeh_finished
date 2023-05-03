//Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)
console.info("World Countries Data");

////TITULOS
const subtitle = document.querySelector(".subtitle");
subtitle.innerHTML = `Currently, we have <span id="subtitle_num">${countries_data.length}</span> countries`;
const subtitle_num = document.querySelector("#subtitle_num");
subtitle_num.style.fontWeight = "600";

const message = document.createElement("h3");
const buttondiv = document.querySelector(".graph-buttons");
buttondiv.insertAdjacentElement("afterend", message);
message.textContent = "Press any key";

///////////DATOS DEL STAT - que luego aparecen al apretar el botón
const graph_background = document.querySelector(".graph_background");
const statWrapper = document.querySelector(".graphs-stat");

const statName = document.querySelector(".graph-stat--name");

const statbar = document.querySelector(".graph-stat--bar");
const statNum = document.querySelector(".graph-stat--number");

//getting world population
let worldPopulation = 0;
countries_data.forEach((elem) => (worldPopulation += elem.population));
console.log("world population today is :", worldPopulation);

//getting how many languages are in our object
const worldLanguages = new Set();

for (let i = 0; i < countries_data.length; i++) {
  let current = countries_data[i];
  for (let j = 0; j < current.languages.length; j++) {
    worldLanguages.add(current.languages[j]);
  }
}
console.log(worldLanguages);
console.log("Languages in the world are: ", worldLanguages.size);

//getting ten most populated countries -  vamos a crear un objeto nuevo con sólo los datos que queremos
const copy = [...countries_data]; //hacemos una copia para que no se modifique nuestro objeto principal
function mostPopulatedCountries(arr, n) {
  return arr
    .map((country) => ({
      //para que me return un objeto {} tengo que abrir primero () sino no funciona, lo toma como otra función
      name: country.name, //debo especificar la key:value - un objeto siempre tiene key:value
      population: country.population,
    }))
    .sort((a, b) => {
      //descending sort
      if (a.population < b.population) return 1;
      if (a.population > b.population) return -1;
      return 0;
    })
    .slice(0, 10);
}
const result = mostPopulatedCountries(copy, 10);
console.log(result);
//copy es un array de objetos [{name:value, population:value},...]
const prueba = copy[0].name;
console.log(prueba);

///getting 10 most spoken languages
/*
let countriesObjectcopy = [...countriesObjArr];

let contando = {};
for (let i = 0; i < countriesObjectcopy.length; i++) {
  const current = countriesObjectcopy[i];

  for (let j = 0; j < current.languages.length; j++) {
    let idioma = current.languages[j];
    if (!contando.hasOwnProperty(idioma)) {
      contando[idioma] = 1;
    } else {
      contando[idioma]++;
    }
  }
}
//console.log("el contando", contando);

function mostSpokenLanguages(arr, n) {
  let languagearr = [];
  Object.entries(arr).map(function (elem) {
    languagearr.push({ language: elem[0], count: elem[1] });
  });

  return languagearr
    .sort((a, b) => {
      //descending sort
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      return 0;
    })
    .slice(0, n);
}

console.log("los 10 idiomas mas hablados", mostSpokenLanguages(contando, 10));


*/

///////////////  EVENT LISTENERS -- BOTONES
//agarramos los botones y títulos que aparecerán al apretar el botón
const population_btn = document.querySelector(".population");
const language_btn = document.querySelector(".languages");
const feedback_title = document.querySelector(".feedback");
feedback_title.innerHTML = `10 Most <span id="feedback_span"></span> in the world`;
feedback_title.style.display = "none";
const feedback_span = document.querySelector("#feedback_span");
feedback_span.textContent = "";

let clone;
let flag = true;
//agregamos el addEventListener con event "click"
population_btn.addEventListener("click", function () {
  feedback_span.textContent = "Populated Countries";
  message.style.display = "none";
  feedback_title.style.display = "inline";

  if (flag) {
    statName.textContent = "Mundo";
    statNum.textContent = Intl.NumberFormat("en-US").format(worldPopulation); //para formatear el número con separador de miles. Se le coloca el país que querés usar como convención - acá utilicé ingles de USA - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
    statbar.style.background =
      "linear-gradient(to right, rgb(255 77 15) 100%,#ffffff 100%)";

    flag = false;
    for (let i = 0; i < result.length; i++) {
      clone = statWrapper.cloneNode(true);
      statWrapper.before(clone);

      statName.textContent = result[i].name;
      statNum.textContent = Intl.NumberFormat("en-US").format(
        result[i].population
      );
      statbar.style.background = `linear-gradient(to right, rgb(255 77 15) ${
        (result[i].population * 100) / worldPopulation
      }%,#ffffff ${(result[i].population * 100) / worldPopulation}%)`;
    }
  }
});

language_btn.addEventListener("click", function () {
  feedback_span.textContent = "Spoken Languages";
  message.style.display = "none";
  feedback_title.style.display = "inline";
});
