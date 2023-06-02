//PLAYERS
let players = [
  /*{
    firstName: "Samantha",
    lastName: "Lewis",
    country: "Finland",
    score: 85,
    date: new Date(),
  },*/
];

//////////////////////
//INPUTS
const add_btn = document.querySelector(".container_input-btn");
let all_inputs = document.querySelectorAll(".container_input-text");
console.log("input", all_inputs);
let firstname_input = document.querySelector(".firstname_input");
let lastname_input = document.querySelector(".lastname_input");
let country_input = document.querySelector(".country_input");
let score_input = document.querySelector(".score_input");

function clearInput() {
  let elements = document.getElementsByTagName("input");
  for (let i = 0; i < elements.length; i++) {
    elements[i].value = "";
  }
}

//agrega jugadores y los ordena de mayor a menor
function addPlayer() {
  players.push({
    firstName: firstname_input.value,
    lastName: lastname_input.value,
    country: country_input.value,
    score: Number.parseInt(score_input.value),
    date: new Date(), //tb va a ser mi id para el botón remove
  });
}

//remueve jugadores según la fecha (que es única por eso sirve de id)
function removePlayer(playerDate) {
  console.log(playerDate.getTime()); //getTime() me da número de milisegundos desde el 1 de enero de 1970
  //hago un filter para que me devuelva sólo los jugadores que no coincidan con el id getTime()
  players = players.filter((p) => p.date.getTime() !== playerDate.getTime());
  render(); //y se renderizan los jugadores que quedan
} //VER EL EVENTLISTENER DEL ROUND-BTN EN LA RENDER() FUNCTION

//función para crear elementos html players div
//PLAYERS DIVS
const players_outer = document.querySelector(".players_outer-container");
const msg = document.querySelector(".msg");
msg.style.display = "none";

function render() {
  players_outer.innerHTML = "";
  clearInput(); //para que los inputs vuelvan a vaciarse así ingresar nuevos datos

  players.sort(function (a, b) {
    return b.score - a.score;
  });

  for (let player of players) {
    const players_inner = document.createElement("div");
    players_inner.className = "players_inner-container";
    players_outer.appendChild(players_inner);

    const player_info = document.createElement("div");
    player_info.className = "player-info item";
    players_inner.appendChild(player_info);

    const name_data = document.createElement("p");
    name_data.className = "name";

    const date_data = document.createElement("p");
    date_data.className = "date";

    player_info.appendChild(name_data);
    player_info.appendChild(date_data);

    const country_data = document.createElement("p");
    country_data.className = "country item";
    const score_data = document.createElement("p");
    score_data.className = "score item";

    players_inner.appendChild(country_data);
    players_inner.appendChild(score_data);

    const players_btn = document.createElement("div");
    players_btn.className = "buttons item";
    players_inner.appendChild(players_btn);

    //ROUND-BTN
    for (let index = 0; index < 3; index++) {
      const round_btn = document.createElement("button");
      round_btn.className = "round-btn";
      players_btn.appendChild(round_btn);
      if (index === 0) {
        //remove round-btn
        round_btn.textContent = "🚮";
        round_btn.addEventListener("click", function () {
          removePlayer(player.date); //aquí paso el argumento que sería el new Date() que me sirve de id
        });
      }
      if (index === 1) {
        round_btn.textContent = "+5";
        round_btn.addEventListener("click", function () {
          player.score = player.score + 5;
          render();
        });
      }
      if (index === 2) {
        round_btn.textContent = "-5";
        round_btn.addEventListener("click", function () {
          player.score = player.score - 5;
          render();
        });
      }
    }

    name_data.textContent =
      player.firstName.toUpperCase() + " " + player.lastName.toUpperCase();

    //date format
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
    const themonth = themonths[player.date.getMonth()]
      .toUpperCase()
      .slice(0, 3);
    //console.log(themonth);

    const theday = player.date.getDate();
    //console.log(theday);

    const theyear = player.date.getFullYear();
    //console.log(theyear);

    const thehour = player.date.getHours();
    //console.log(thehour);

    const theminutes = player.date.getMinutes();
    //console.log(theminutes);

    const dateFormat = `${themonth} ${theday}, ${theyear} ${thehour}:${theminutes}`;
    //console.log(dateFormat);

    date_data.textContent = dateFormat;
    country_data.textContent = player.country.toUpperCase();
    score_data.textContent = player.score;
  }
}

//para checkear inputs
//1 - que esté en foco
function inputFocus() {
  firstname_input.focus();
}
//2 - que se llenen sus campos
const inputarray = [...all_inputs]; //paso el nodeList a array para poder usar otros métodos como .some() y no solo forloop
//console.log(inputarray);

function Emptyvalidation() {
  const algunovacio = inputarray.some((elem) => elem.value.length === 0);
  if (algunovacio) {
    //console.log("si");
    msg.style.display = "block"; //aparece el cartel rojo
  } else {
    //console.log("no");
    msg.style.display = "none"; //desaparece el cartel rojo y se crea el elemento con el jugador
    addPlayer();
    render();
    console.log("players", players);
  }
}

//BOTON
add_btn.addEventListener("click", function () {
  inputFocus(); //para que el cursor siempre esté en el primer input
  Emptyvalidation();
});

////////////////////////// REPASANDO COSAS //////////////////
/* 
//deep copy
- using JSON.stringify()
let p1 = JSON.parse(JSON.stringify(players)); 
//shallow copy:
- using spread ...
let p2 = {
...person
};
- using  Object.assign() method
let p3 = Object.assign({}, person); 
*/
