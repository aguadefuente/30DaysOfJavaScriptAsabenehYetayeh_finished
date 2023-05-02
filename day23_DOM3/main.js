console.info("EVENT-LISTENERS");
//addEventListener() method takes two arguments: an event listener (event type)/ a callback function.
//a third optional argument -> useCapture - whether to use event bubbling or event capturing
//syntax:
/*
selectedElement.addEventListener('eventlistner', function(e) {})
or
selectedElement.addEventListener('eventlistner', e => {})
*/

/*ejemplo:
HTML PARA EJEMPLO
<!DOCTYPE html>
<html>
<head>
<title>Document Object Model</title>
</head>

<body>
<button onclick="clickMe()">Click Me</button>
<script>
//agarramos el elemento al que queremos poner el eventlistener
    const button = document.querySelector('button')
//le ponemos el addEventListener a button - "click" es el event-type y luego viene la callback-fuction
    button.addEventListener("click", (e) => {
    console.log("e gives the event listener object:", e); //PointerEvent {isTrusted: true, pointerId: 0, width: 1, height: 1, pressure: 0, …}
    console.log("e.target gives the selected element: ", e.target); //<button onclick=​"clickMe()​">​Click Me​</button>​
    console.log(
    "e.target.textContent gives content of selected element: ",
     e.target.textContent);//Click Me
}); 
</script>
</body>
</html>
*/

//Can be also attached directly to the HTML element as inline script.
/*
 <body>
    <button onclick="clickMe()">Click Me</button>
    <script>
      const clickMe = () => {
        alert('We can attach event on HTML element')
      }
    </script>
  </body>
*/

//GETTING VALUE from an IMPUT
/*
const mass = document.querySelector('#mass')
const height = document.querySelector('#height')
const button = document.querySelector('button')

let bmi
button.addEventListener('click', () => {
bmi = mass.value / height.value ** 2
alert(`your bmi is ${bmi.toFixed(2)}`)
console.log(bmi)
})
*/
// if we want to get value without click the button:
//We can use the change or input event type to get data right away from the input field when the field is on focus
/*
const input = document.querySelector('input')
const p = document.querySelector('p')

input.addEventListener('input', e => {
p.textContent = e.target.value
})
*/

//EJERCICIO 1: NUMBER GENERATOR CON EVENTLISTENER - Generating numbers and marking events, odds and prime numbers with three different colors
//the Body
document.body.style.textAlign = "center";
document.body.style.fontFamily = "sans-Serif";

//Titulos
const mainTitle = document.querySelector("h1");
const subTitle = document.querySelector("h2");
const author = document.querySelector("h3");

mainTitle.style.color = "rgb(0 187 0)";
mainTitle.style.fontSize = "30px";
mainTitle.style.margin = "1px auto";

subTitle.style.fontSize = "18px";
subTitle.style.fontWeight = "200";
subTitle.style.margin = "8px auto 1px";

author.style.fontSize = "16px";
author.style.color = "grey";
author.style.margin = "3px auto 20px";
author.style.fontWeight = "200";

//the container number Div
const theContainer = document.querySelector(".wrapper");

theContainer.style.margin = "10px auto";
theContainer.style.backgroundColor = "linen";
theContainer.style.display = "flex";
theContainer.style.justifyContent = "center";
theContainer.style.alignContent = "center";
theContainer.style.flexWrap = "wrap";

//agarramos el input y el botón
const theInput = document.querySelector("#divNumber");

theInput.style.width = "250px";
theInput.style.padding = "10px";
theInput.style.border = "1px solid black";
theInput.style.margin = "4px";

theInput.addEventListener("focus", function () {
  this.style.border = "2px solid rgb(0 187 0)";
  this.style.outline = "none";
});

const btn = document.querySelector("#btn");

btn.style.backgroundColor = "rgb(0 187 0)";
btn.style.border = "none";
btn.style.color = "white";
btn.style.padding = "12px 12px";
btn.style.fontSize = "11px";

const alert = document.createElement("p");
document.body.insertBefore(alert, theInput);
//agregamos el evento click y sus methods .value
let pattern = /\D/g; //regex para lo que no es dígito
btn.addEventListener("click", function () {
  const quantity = theInput.value; //agarramos el valor del input y como el input type es text lo parseamos - y nos dará un número o NaN si ingresamos una letra
  theContainer.innerHTML = ""; //está vacío hasta que se creen los números
  if (pattern.test(quantity)) {
    alert.textContent = "You have to enter a number";
    alert.style.color = "red";
    alert.style.fontSize = "12px";
  } else {
    Number.parseInt(quantity);
    alert.textContent = "";
    //hacemos un for-loop para crear los div en la cantidad que hayamos ingresado en el input
    for (let i = 0; i < quantity; i++) {
      const numDiv = document.createElement("div");
      //numDiv.className = "container_item";
      theContainer.appendChild(numDiv);

      numDiv.style.width = "100px";
      numDiv.style.height = "100px";
      numDiv.style.margin = "10px";
      numDiv.style.padding = "10px";
      numDiv.style.fontSize = "40px";

      numDiv.innerHTML = i;

      numDiv.style.display = "flex";
      numDiv.style.alignItems = "center";
      numDiv.style.justifyContent = "center";

      //even numbers
      if (i % 2 === 0) {
        numDiv.style.backgroundColor = "rgb(0 128 0 / 68%)";
      }

      //odd numbers
      if (i % 2 !== 0) {
        numDiv.style.backgroundColor = "yellow";
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
          numDiv.style.border = "4px solid red";
        }
      }
    }
  }
});
