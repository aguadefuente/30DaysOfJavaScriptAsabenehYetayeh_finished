const str = document.getElementById("str");
//document.body.appendChild(str);
str.innerHTML = asabenehChallenges2020.challengeSubtitle;

//función para <span> cada letra de str
function span_it(string) {
  return string
    .split("")
    .map((letter) => "<span>" + letter + "</span>")
    .join("");
}
str.innerHTML = span_it(str.innerHTML);

//random fontSize
function generateRandomFontSize() {
  let sizes = ["normal", "bold", "lighter"];
  let randomSize = sizes[Math.floor(Math.random() * sizes.length)];
  return randomSize;
}

//random Color
function generateRandomColor() {
  let colors = ["dodgerblue", "firebrick", "yellowgreen", "yellow"];
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
  spans.forEach((span) => (span.style.fontFamily = generateRandomFamily()));
}

randomizeText();
setInterval(randomizeText, 5000);

//paragraph:
const description = document.querySelector("p");
description.innerHTML = asabenehChallenges2020.author.bio;

const author = document.querySelector("h1");
author.innerHTML =
  asabenehChallenges2020.author.firstName +
  asabenehChallenges2020.author.lastName;

//div animated
const movediv = document.querySelector("#move");

const movearr = [
  "Educator",
  "Programmer",
  "Developer",
  "Motivator",
  "Content Creator",
];

const timeOut = 5500;

movediv.textContent = "";
let count = 0;
function titlemove() {
  for (let i = 0; i < movearr.length; i++) {
    count = i;
    setTimeout(() => {
      movediv.textContent = movearr[i];
    }, i * timeOut);
  }
}

titlemove();

setInterval(titlemove, timeOut * movearr.length);
