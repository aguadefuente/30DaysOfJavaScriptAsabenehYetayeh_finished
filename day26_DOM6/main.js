const countries_length = countries.length;

//TITLES - getting elements and defining its content
const tittle = document.querySelector("h1");
const subtitle = document.querySelector("h3");
subtitle.textContent = `Total number of countries: ${countries_length}`;

const message = document.createElement("p");
message.after(subtitle);
message.textContent = `Countries ${"***"}: ${"**"} are ${"**"}`;
subtitle.insertAdjacentElement("afterend", message);

//STATE-CONTROL -> especificamos el estado de nuestras variables al hacer click en los botones
const buttons = document.querySelectorAll("button");
let state = 0;
console.log(state);

buttons[0].addEventListener("click", function () {
  state = 1;
  this.style.backgroundColor = "#04034a";
  buttons[1].style.backgroundColor = "#603ab7";
  console.log("btn 1", state);
});

buttons[1].addEventListener("click", function () {
  state = 2;
  this.style.backgroundColor = "#04034a";
  buttons[0].style.backgroundColor = "#603ab7";

  console.log("btn 2", state);
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
});

//LOS DATOS y FUNCIONES para filtrar los datos
const country_container = document.querySelector(".countries-section");

function create(x) {
  country_container.innerHTML = ""; //esto refresca la pantalla al
  x.forEach((elem) => {
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

textInput.addEventListener("input", function () {
  if (this.value.length === 0) {
    create(countries);
  } else {
    if (state === 1) {
      create(startFilter(this.value));
    }
    if (state === 2) {
      create(containtFilter(this.value));
    }
  }
});

//sort
/*
const copyArr = [...countries];
console.log(copyArr.reverse());
console.log(copyArr.sort());

function sortCountries(arr) {
  if (switchOrder === "a-z") {
    arr.sort();
  }
  if (switchOrder === "z-a") {
    arr.reverse();
  }
}
*/

const parentDiv = document.getElementById("parentList");
const childrens = parentDiv.children;
console.log(parentDiv);
console.log(childrens);

const primerPais = childrens[0];
console.log(primerPais);

const newArr = [];
for (let i = 0; i < childrens.length; i++) {
  const current = childrens[i];
  newArr.push(current.textContent);
}
console.log(newArr);
