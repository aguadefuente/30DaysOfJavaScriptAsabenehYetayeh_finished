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

//THE INPUT en relación al control de estado de los botones
const textInput = document.querySelector("input");

textInput.addEventListener("input", function () {
  textInput.value.toUpperCase();
  if (state === 1) {
    console.log("mayuscula", textInput.value.toUpperCase());
  }
  if (state === 2) {
    console.log("array", textInput.value.split(""));
  }
});

//LOS DATOS
function showCountry(n) {
  countries.forEach((elem) => {
    const showCountry = document.createElement("p");
    document.body.appendChild(showCountry);
    if (elem.toUpperCase().startsWith(n)) {
      showCountry.textContent = elem;
    }
  });
}
console.log(showCountry("Z"));
