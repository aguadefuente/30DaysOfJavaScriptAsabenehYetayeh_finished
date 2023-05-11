const str = document.getElementById("str");
//document.body.appendChild(str);
str.innerHTML = "30 Days Of JavaScript: 27 Day - Asabeneh Yetayeh";

//función para <span> cada letra de str
function span_it(string) {
  return string
    .split("")
    .map((letter) => "<span>" + letter + "</span>")
    .join("");
}
str.innerHTML = span_it(str.innerHTML);
str2.innerHTML = span_it(str.innerHTML);

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
