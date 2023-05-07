//Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)
console.info("World Countries Data");

////TITULOS
const subtitle = document.querySelector(".subtitle");
subtitle.innerHTML = `Currently, we have <span id="subtitle_num">${countries_data.length}</span> countries`;
const subtitle_num = document.querySelector("#subtitle_num");
subtitle_num.style.fontWeight = "600";

///TITULOS - main
const message = document.createElement("h3"); //creamos un nuevo h3
const buttondiv = document.querySelector(".graph-buttons"); //agarramos el elemento para luego ubicar al h3 debajo
buttondiv.insertAdjacentElement("afterend", message);
message.textContent = "Press any key";

//TITULOS main - título del graph al apretar los botones
const feedback_title = document.querySelector(".feedback");
feedback_title.innerHTML = `10 Most <span id="feedback_span"></span> in the world`; //el contenido del span se completa al apretar alguno de los botones
feedback_title.style.display = "none"; //no se ve mientras no apretemos algún botón
const feedback_span = document.querySelector("#feedback_span");
feedback_span.textContent = ""; //el contenido del span se crea al apretar los botones

/////////////////////////// SELECCIONANDO LOS DATOS /////////////////////
// 1) Getting world population
let worldPopulation = 0;
countries_data.forEach((elem) => (worldPopulation += elem.population));
console.log("world population today is :", worldPopulation); //7758589152
//se podría hacer con REDUCE() HACER!!!

// 2) Getting how many languages are in our object
const worldLanguages = new Set();
for (let i = 0; i < countries_data.length; i++) {
  let current = countries_data[i];
  for (let j = 0; j < current.languages.length; j++) {
    worldLanguages.add(current.languages[j]);
  }
}
const moreSpoken = worldLanguages.size; //123

// 3) Getting ten most populated countries -  vamos a crear un objeto nuevo con sólo los datos que queremos
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
const result_population = mostPopulatedCountries(copy, 10); //copy es un array de objetos [{name:value, population:value},...]
console.log(result_population);

/// 4) Getting 10 most spoken languages
let copy2 = [...countries_data];
let contando = {}; //hacemos un contador para ver cuántas veces aparece cada idioma
for (let i = 0; i < copy2.length; i++) {
  const current = copy2[i];

  for (let j = 0; j < current.languages.length; j++) {
    let idioma = current.languages[j];
    if (!contando.hasOwnProperty(idioma)) {
      contando[idioma] = 1; //usamos []notation porque dentro ubicamos una variable
    } else {
      contando[idioma]++;
    }
  }
}
console.log("el contando", contando);

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
const result_language = mostSpokenLanguages(contando, 10);
console.log(result_language);

///////////STAT-GRAPH - main - Agarrando Elementos
//population graph
const popWrapper = document.querySelector(".population_graph");
const pop_statWrapper = document.querySelector(".graphs_pop-stat");
const pop_statName = document.querySelector(".graph_pop-stat--name");
const pop_statbar = document.querySelector(".graph_pop-stat--bar");
const pop_statNum = document.querySelector(".graph_pop-stat--number");

//language graph
const langWrapper = document.querySelector(".language_graph");
const lang_statWrapper = document.querySelector(".graphs_lang-stat");
const lang_statName = document.querySelector(".graph_lang-stat--name");
const lang_statbar = document.querySelector(".graph_lang-stat--bar");
const lang_statNum = document.querySelector(".graph_lang-stat--number");

//CLONANDO y poniendo contenido
// >>>>>>>> POBLACIÓN
pop_statName.textContent = "World";
pop_statNum.textContent = Intl.NumberFormat("en-US").format(worldPopulation); //para formatear el número con separador de miles. Se le coloca el país que querés usar como convención - acá utilicé ingles de USA - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
pop_statbar.style.display = "flex";
pop_statbar.style.background =
  "linear-gradient(to right, rgb(255 77 15) 100%,#ffffff 100%)";
pop_statbar.textContent = "100%";

for (let i = 0; i < result_population.length; i++) {
  let clone = pop_statWrapper.cloneNode(true);
  pop_statWrapper.before(clone);

  pop_statName.textContent = result_population[i].name;
  pop_statNum.textContent = Intl.NumberFormat("en-US").format(
    result_population[i].population
  );
  pop_statbar.style.display = "flex";

  pop_statbar.style.background = `linear-gradient(to right, rgb(255 77 15) ${
    (result_population[i].population * 100) / worldPopulation
  }%,#ffffff ${(result_population[i].population * 100) / worldPopulation}%)`;

  pop_statbar.textContent = `${(
    (result_population[i].population * 100) /
    worldPopulation
  ).toFixed(2)}%`;
}

/// >>>>>> IDIOMAS
lang_statName.textContent = "Countries";
const totalcountries = countries_data.length;
lang_statNum.textContent = totalcountries;
lang_statbar.style.display = "flex";
lang_statbar.style.background =
  "linear-gradient(to right, rgb(255 77 15) 100%,#ffffff 100%)";
lang_statbar.textContent = "100%";

for (let j = 0; j < result_language.length; j++) {
  let clone2 = lang_statWrapper.cloneNode(true);
  lang_statWrapper.before(clone2);

  lang_statName.textContent = result_language[j].language;
  lang_statNum.textContent = result_language[j].count;
  lang_statbar.style.display = "flex";

  lang_statbar.style.background = `linear-gradient(to right, rgb(255 77 15) ${
    (result_language[j].count * 100) / totalcountries
  }%,#ffffff ${(result_language[j].count * 100) / totalcountries}%)`;

  lang_statbar.textContent = `${
    (result_language[j].count * 100) / totalcountries
  }%`;
}

///Create a function that shows and hides the population/languages stat-graph
popWrapper.style.display = "none";
langWrapper.style.display = "none";

function showGraph(x) {
  if (x == 1) {
    /* Check what form should be shown */
    popWrapper.style.display = "flex";
    langWrapper.style.display = "none";
  } else if (x == 2) {
    popWrapper.style.display = "none";
    langWrapper.style.display = "flex";
  }
}

/////////////////////////  EVENT LISTENERS -- BOTONES //////////////////
//agarramos elementos botons
const population_btn = document.querySelector(".population");
const language_btn = document.querySelector(".languages");

/// BOTON POPULATION
population_btn.addEventListener("click", function () {
  feedback_span.textContent = "Populated Countries";
  message.style.display = "none";
  feedback_title.style.display = "inline";

  showGraph(1);
});

/// BOTON LANGUAGES
language_btn.addEventListener("click", function () {
  feedback_span.textContent = "Spoken Languages";
  message.style.display = "none";
  feedback_title.style.display = "inline";

  showGraph(2);
});
