const countries_length = countries.length;

//TITLES - getting elements and defining its content
const tittle = document.querySelector("h1");
const subtitle = document.querySelector("h3");
subtitle.textContent = `Total number of countries: ${countries_length}`;

const message = document.createElement("p");

//STATE-CONTROL -> especificamos el estado de nuestras variables al hacer click en los botones
const buttons = document.querySelectorAll("button");
let state = 0;
console.log(state);

buttons[0].addEventListener("click", function () {
  state = 1;
  this.style.backgroundColor = "#04034a";
  buttons[1].style.backgroundColor = "#603ab7";
  console.log("btn 1", state);
  create();
});

buttons[1].addEventListener("click", function () {
  state = 2;
  this.style.backgroundColor = "#04034a";
  buttons[0].style.backgroundColor = "#603ab7";

  console.log("btn 2", state);
  create();
});

let switchOrder = "a-z";
let switchImage = document.querySelector("img");
buttons[2].addEventListener("click", function () {
  switchOrder = switchOrder === "z-a" ? "a-z" : "z-a"; //reassign ternary operator - si switchOrder es z-a cambiar a a-z caso contrario es z-a
  console.log(switchOrder);
  //para cambiar la src attribute de la image
  if (switchOrder === "a-z") {
    switchImage.src = "/day26_DOM6/images/icons8-sort-alpha-down-48.png";
  }
  if (switchOrder === "z-a") {
    switchImage.src = "/day26_DOM6/images/icons8-sort-alpha-up-48.png";
  }
  create();
});

//LOS DATOS y FUNCIONES para filtrar los datos
const country_container = document.querySelector(".countries-section");

//Se crean los elementos
function create() {
  country_container.innerHTML = ""; //esto refresca la pantalla al ingresar un nuevo dato en el input
  let filtered = [...countries]; //hago una copia para no modificar el array original
  let filterText = "";

  //antes de crear los elementos me fijo que botón está apretado
  if (state === 1) {
    filtered = startFilter(textInput.value); //llama a la función startFilter() así filtered [] será el array con los elementos que inicien con tal/es letra/as
    filterText = "start with";
  } else if (state === 2) {
    filtered = containtFilter(textInput.value); //llama a la función containFilter() así filtered [] será el array con los elementos que contengan con tal/es letra/as
    filterText = "contianing";
  }

  //se fija si el botón de sort es de a-z o de z-a y filtered [] será ordenado ascendente o descendiente
  if (switchOrder === "z-a") {
    filtered.reverse();
  }

  //luego de fijarse qué botón está apretado y agregar los elementos en el filtered array - lo recorremos para crear los div de los países
  filtered.forEach((elem) => {
    const country_div = document.createElement("div");
    country_div.className = "country_div";
    country_container.appendChild(country_div);

    country_div.style.width = "15rem";
    country_div.style.height = "15rem";
    country_div.style.display = "flex";
    country_div.style.alignItems = "center";
    country_div.style.justifyContent = "center";
    country_div.style.width = "15rem";
    country_div.style.padding = "2rem";
    country_div.style.textAlign = "center";
    country_div.style.color = "white";
    country_div.style.fontWeight = "bold";

    country_div.style.backgroundImage =
      "linear-gradient(to right bottom, rgb(32 117 183 / 65%), rgb(2 10 14 / 61%)),url(/day26_DOM6/images/map_image.jpg)";
    country_div.style.backgroundRepeat = "no-repeat";
    country_div.style.backgroundPosition = "center"; //Center the image
    country_div.style.backgroundSize = "cover"; //Resize the background image to cover the entire container

    country_div.textContent = elem.toUpperCase();

    if (textInput.value.length !== 0) {
      subtitle.insertAdjacentElement("afterend", message);
      message.innerHTML = `Countries ${filterText}: <span>${textInput.value.toUpperCase()}</span> are <span>${
        filtered.length
      }</span>`;
    } else {
      message.innerHTML = "";
    }
  });
}

//llamaremos a la función en el EventListener del input

const startFilter = function (letter) {
  const theArr = countries.filter((country) =>
    country.toUpperCase().startsWith(letter.toUpperCase())
  );
  return theArr;
};

//Testing startFilter()
//console.log("startFilter", startFilter("Ar"));
//console.log("startFilter", startFilter("ar"));
//console.log("startFilter", startFilter("aR"));
//console.log("startFilter", startFilter("a"));
//console.log("startFilter", startFilter("A"));

const containtFilter = function (letter) {
  const theArr = countries.filter((country) =>
    country.toUpperCase().includes(letter.toUpperCase())
  );
  return theArr;
};

//testing
//console.log("contain", containtFilter("dia"));
//console.log("contain", containtFilter("Dia"));

//THE INPUT en relación al control de estado de los botones
const textInput = document.querySelector("input");

create(countries); //para que se creen los paises al iniciar la página

textInput.addEventListener("input", create);
//  function () {
//   if (this.value.length === 0) {
//     create(countries);
//     console.log("nuevo arr 1", childrens, childrens.length);
//   } else {
//     if (state === 1) {
//       create(startFilter(this.value));
//       //console.log("nuevo arr 2", childrens, childrens.length);

//       for (let i = 0; i < childrens.length; i++) {
//         const current = childrens[i];
//         arrprueba.push(current.textContent);
//         //console.log("arrPrueba 1", arrprueba);
//       }
//       console.log("arrPrueba 1", arrprueba);
//     }

//     if (state === 2) {
//       create(containtFilter(this.value));
//       console.log("nuevo arr 3", childrens, childrens.length);
//     }
//   }
// });
