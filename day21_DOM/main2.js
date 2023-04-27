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
  //PASO UNO
  //agarro elementos para tenerlos mas definidos
  const body = document.querySelector("body");
  const theWrapper = document.querySelector(".wrapper");
  const title = document.querySelector("h1");
  const subtitle = document.querySelector("h2");
  const ul = document.querySelector("ul");
  const items = document.querySelectorAll("li");

  //PASO DOS - HACER QUE 2020 CAMBIE DE COLOR CADA SEGUNDO
  //agarramos el <span> que está dentro de h1 para estilizarlo
  const veinteveinte = document.querySelector("h1 span");
  console.log(veinteveinte.innerHTML);
  //veinteveinte.style.color = "red";

  //hacemos que cambie de color cada un segundo
  ////de este modo hacemos que cambie a dos colores - VER QUE CON EL BACKGROUND DE LA FECHA USÉ OTRO MODO
  const theColors = ["Coral", "DarkSlateBlue"];
  let i = 0;
  function changeColor() {
    veinteveinte.style.color = theColors[i];
    i++; //i suma 1 cada vez que es llamado por setInterval

    if (i > theColors.length - 1) {
      i = 0;
    } //cuando i llegó al último elemento del array vuelve a cero y cada vez que es llamado por setInterval sumará 1
  }
  setInterval(changeColor, 1000);

  //PASO TRES - DATE CAMBIA DE LOS SEGUNDOS Y EL BACKGROUND COLOR CADA SEGUNDO
  //creo un paragrap tag para ubicar allí la fecha
  const dateparagraph = document.createElement("p");
  theWrapper.insertBefore(dateparagraph, ul); //ubico el elemento creado antes de ul. Hay que agarrar al padre de ambos

  //vamos a crear al objeto Date() y formatearlo como nos gustaría que aparezca - mes dia, año hh:mm:ss (los segundos van cambiando)
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
  ]; //creamos este array para que poder darle formato a la fecha como me gustaría que aparezca

  //vamos a crear la fución para que los segundos cambien a tiempo real
  everySecond(); //llamamos a la función antes de setInterval() para que se cargue primero
  setInterval(everySecond, 1000); //callback que se ejecuta cada 1000 milisegundos = un segundo
  function everySecond() {
    //creamos el objeto Date()
    const today = new Date();
    //le damos formato a la fecha con distindos Date-Get-Methods
    let month = months[today.getMonth()]; //.getMonth() me da los meses del 0 al 11 - por lo que determinaría nuestro index 0-11 y nos return el mes con nombre ej: Febrero, Marzo...
    let day = today.getDate(); //returns the day of a date as a number (1-31)
    let year = today.getFullYear(); //returns the year of a date as a four digit number
    let hour = today.toLocaleTimeString(); //returns the time portion as a string, using locale conventions hh/mm/ss Nota>podríamos definir de que lugar queremos la convención ej ("en-US") nos agrega PM o AM, ("en-UK"), ("ko-KR") corea "오후 12:00:00"...

    dateparagraph.innerHTML = `${month} ${day}, ${year} ${hour}`; //definimos el innerhtml de dateparagraph

    //para cambiar el color cada segundo - usamos randoms de rgb-color
    let random1 = Math.floor(Math.random() * 255) + 1; //1-255
    let random2 = Math.floor(Math.random() * 255) + 1;
    let random3 = Math.floor(Math.random() * 255) + 1;
    color = `rgb(${random1},${random2},${random3}, 30%)`; //con 40% de opacidad
    dateparagraph.style.backgroundColor = color;
  }

  //PASO CUATRO -
  //cada Challenge tiene un background distinto según /completed,ongoing,coming
  items.forEach((item) => {
    item.style.listStyle = "none";
    item.style.margin = "3px auto";
    item.style.width = "650px";
    item.style.height = "40px";

    item.style.display = "flex";
    item.style.justifyContent = "center";
    item.style.alignItems = "center";

    if (item.textContent.includes("Done")) {
      item.style.backgroundColor = "rgb(0 128 0 / 70%)"; //green
    }
    if (item.textContent.includes("Ongoing")) {
      item.style.backgroundColor = "rgb(255 255 0 / 70%)"; //yellow
    }
    if (item.textContent.includes("Coming")) {
      item.style.backgroundColor = "rgb(255 0 0 / 70%)"; //red
    }
  });

  //fin del Tutorial

  //Ahora le voy a dar formato al body y demás elementos para que se vea mejor
  body.style.textAlign = "center";
  body.style.fontFamily = "sans-serif";

  veinteveinte.style.fontSize = "6rem";
  veinteveinte.style.fontWeight = "lighter";

  subtitle.style.textDecoration = "underline";

  dateparagraph.style.width = "350px";
  dateparagraph.style.padding = "10px";
  dateparagraph.style.margin = "0 auto";
});
