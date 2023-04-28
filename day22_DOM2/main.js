console.info("Manipulating DOM objects");

//CREATE ELEMENTS - document.createElement('tagname')
/*-- To create multiple elements we should use loop
let title
for (let i = 0; i < 3; i++) {
    title = document.createElement('h1')
    title.className = 'title'
    title.style.fontSize = '24px'
    title.textContent = i
    console.log(title)
}
*/
//APPEND CHILD: document.body.appendChild(title)
//REMOVE CHILD:
/*
const ul = document.querySelector('ul')
const lists = document.querySelectorAll('li')
for (const list of lists) {
    ul.removeChild(list)
} 
//o sin for loop - simplemente > ul.innerHTML = ''
*/

////////////////////////// EJERCICIOS ///////////////////////////////
/*PRIMER EJERCICIO: 
Create a div container on HTML document and create 100 to 100 numbers 
dynamically and append to the container div
- Even numbers background is green
- Odd numbers background is yellow
- Prime numbers background is red
*/
document.addEventListener("DOMContentLoaded", function (event) {
  document.body.style.textAlign = "center";
  document.body.style.fontFamily = "sans-Serif";

  const theFather = document.querySelector(".wrapper");
  //stilizando un poco
  theFather.style.backgroundColor = "linen";
  theFather.style.display = "flex";
  theFather.style.justifyContent = "center";
  theFather.style.alignContent = "center";
  theFather.style.flexWrap = "wrap";

  let howMany = Number.parseInt(prompt("Choose a number form 1 to 101"));

  function numberGenerator(n) {
    let newElement;
    for (let i = 0; i < n; i++) {
      newElement = document.createElement("h1"); //creamos el elemento
      theFather.appendChild(newElement); //lo apendiamos al div padre
      newElement.textContent = i; //agregamos contenido

      //damos un poco de estilo
      newElement.style.width = "100px";
      newElement.style.height = "100px";
      newElement.style.margin = "10px";
      newElement.style.padding = "10px";
      newElement.style.fontSize = "40px";
      newElement.style.display = "flex";
      newElement.style.alignItems = "center";
      newElement.style.justifyContent = "center";
      newElement.style.boxSizing = "border-box";

      //even numbers
      if (i % 2 === 0) {
        newElement.style.backgroundColor = "rgb(0 128 0 / 68%)";
      }
      //odd numbers
      if (i % 2 !== 0) {
        newElement.style.backgroundColor = "yellow";
      }
      //prime numbers
      let isPrime = true;

      if (i === 1) {
        isPrime = false;
      } else if (i > 1) {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            isPrime = false;
            break;
          }
        }

        if (isPrime) {
          newElement.style.border = "4px solid red";
        }
      }
    }
  }

  numberGenerator(howMany);

  //FIN EJERCICIO UNO
});

//SEGUNDO EJERCICIO: ver main2.js

//TERCER EJERCICIO: ver main3.js
