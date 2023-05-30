//objeto con datos
const players = [
  {
    firstName: "Samantha",
    lastName: "Levis",
    country: "Finland",
    score: 85,
    date: new Date(),
  },
];

//date format
console.log(players[0].date.toLocaleDateString("en-GB"));
const themonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const themonth = themonths[players[0].date.getMonth()]
  .toUpperCase()
  .slice(0, 3);
console.log(themonth);

const theday = players[0].date.getDate();
console.log(theday);

const theyear = players[0].date.getFullYear();
console.log(theyear);

const thehour = players[0].date.getHours();
console.log(thehour);

const theminutes = players[0].date.getMinutes();
console.log(theminutes);

const dateFormat = `${themonth} ${theday}, ${theyear} ${thehour}:${theminutes}`;
console.log(dateFormat);

//agarramos los elementos y le asigno contenido según el objeto
let name_data = document.querySelector(".name");
let date_data = document.querySelector(".date");
let country_data = document.querySelector(".country");
let score_data = document.querySelector(".score");

name_data.textContent = players[0].firstName.toUpperCase();
date_data.textContent = dateFormat;
country_data.textContent = players[0].country.toUpperCase();
score_data.textContent = players[0].score;

const add_btn = document.querySelector(".container_input-btn");
let fistname_input = document.querySelector(".firstname_input");
let lastname_input = document.querySelector(".lastname_input");
let country_input = document.querySelector(".country_input");
let score_input = document.querySelector(".score_input");

add_btn.addEventListener("click", function () {
  players.push({
    firstName: fistname_input.value,
    lastName: lastname_input,
    country: country_input.value,
    score: score_input.value,
    date: new Date(),
  });
  console.log(players);
  display_player();
});

console.log(players);

const dolly = document.querySelector(".player");
const playerContainer = document.querySelector(".players-container");
function display_player() {
  const clonado = dolly.cloneNode(true);
  playerContainer.appendChild(clonado);
}
