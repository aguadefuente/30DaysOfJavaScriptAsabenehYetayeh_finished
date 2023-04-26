//LEVEL 3
/*
- The year color is changing every 1 second
- The date and time background color is changing every on seconds
- Completed challenge has background green
- Ongoing challenge has background yellow
- Coming challenges have background red
*/
console.log("hola");

document.addEventListener("DOMContentLoaded", function (event) {
  //agarro elementos que tengo en el index2.html
  const body = document.querySelector("body");
  const theWrapper = document.querySelector(".wrapper");
  const title = document.querySelector("h1");
  const subtitle = document.querySelector("h2");
  const ul = document.querySelector("ul");
  const item = document.querySelectorAll("li");

  //creo un paragrap tag para ubicar allí la fecha
  const dateparagraph = document.createElement("p");
  // body.appendChild(dateparagraph);
  theWrapper.insertBefore(dateparagraph, ul);

  const months = [
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
  everySecond(); //la llamamos antes de setInterval() para que se cargue primero
  setInterval(everySecond, 1000);
  function everySecond() {
    const today = new Date();

    let month = months[today.getMonth()];
    let day = today.getDate();
    let year = today.getFullYear();
    let hour = today.toLocaleTimeString();

    dateparagraph.innerHTML = `${month} ${day}, ${year} ${hour}`;
  }

  //THE END
});
