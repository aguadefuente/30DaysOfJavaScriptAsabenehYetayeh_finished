const str = document.getElementById("str");
document.body.appendChild(str);
str.innerHTML = "30 Days Of JavaScript: 27 Day - Asabeneh Yetayeh";

//función para <span> cada letra de str
function span_it(string) {
  return string
    .split("")
    .map((letter) => "<span>" + letter + "</span>")
    .join("");
}
str.innerHTML = span_it(str.innerHTML);

/*
//función para Random-Color
let color;

function randomColor() {
  const color1 = Math.floor(Math.random() * 256);
  const color2 = Math.floor(Math.random() * 256);
  const color3 = Math.floor(Math.random() * 256);
  color = `rgb(${color1},${color2},${color3})`;
  return color;
}
//setInterval(randomColor, 1000);
//randomColorColor();
//console.log(color);

function animatedChar(element) {
  let spanElem = element.querySelectorAll("span");

  for (let i = 0; i < spanElem.length; i++) {
    let current = spanElem[i];

    let randomDuration = 0.2 + Math.random() * 1;
    current.style.setProperty("--duration", randomDuration + "s"); //en la animación de css ponemos => animation-duration: var(--duration);
  }

  setInitialRandomColor(spanElem);

  str.addEventListener("animationiteration", changeColor, true);
}
animatedChar(str);

function setInitialRandomColor(elements) {
  for (let i = 0; i < elements.length; i++) {
    const current = elements[i];
    current.style.setProperty("--color-A", randomColor());
    current.style.setProperty("--color-B", randomColor());
  }
}

function changeColor(event) {
  let spanElem = event.target;
  let spanstyle = getComputedStyle(spanElem);
  let finalColor = spanstyle.getPropertyValue("--color-B");

  spanElem.style.setProperty("--color-A", finalColor);
  spanElem.style.setProperty("--color-B", randomColor());
}
*/

//random fontSize
function generateRandomFontSize() {
  let sizes = ["normal", "bold", "lighter"];
  let randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  return randomSize;
}

//random Color
function generateRandomColor() {
  let colors = ["deeppink", "steelblue", "yellowgreen", "orangered", "purple"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  return randomColor;
}

//random Family
function generateRandomFamily() {
  let families = ["verdana", "sans-serif", "cursive", "monospace"];
  let randomfamily = families[Math.floor(Math.random() * families.length)];
  return randomfamily;
}

//Función que agrega los estilos a cada letra de los spanes
function randomizeText() {
  let spans = document.querySelectorAll("span");
  //each letter
  spans.forEach((span) => (span.style.fontWeight = generateRandomFontSize()));
  spans.forEach((span) => (span.style.color = generateRandomColor()));
  str.style.fontFamily = generateRandomFamily();
}

function appear() {
  str.style.visibility = "visible";
}

function desappear() {
  str.style.visibility = "hidden";
}

randomizeText(setInterval(randomizeText, 5500));

//setInterval(appear, 1000);
//setInterval(desappear, 5000);
