/*
////////////////  CALLBACKS AND ASYNCHRONOUS JavaScript //////////////////
Function sequence: 
JavaScript functions are executed in the sequence they are called. 
Not in the sequence they are defined.
-----------
function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

mySecond();
myfirst();
-------------

Sometimes you would like to have better control over when to execute a function.
Suppose you want to do a calculation, and then display the result.
Using a CALLBACK, you could call the calculator function (myCalculator) with a callback (myCallback), and let the calculator function run the callback after the calculation is finished:
----------
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
-----------

In the example above, myDisplayer is a called a callback function.
It is passed to myCalculator() as an argument.

EL EJEMPLO ANTERIOR ES A MODO EXPLICATIVO Y MUY SIMPLIFICADO. DONDE VEMOS MEJOR 
LOS CALLBACKS ES EN LAS FUNCIONES ASINCRÓNICAS DONDE UNA FUNCIÓN DEBE ESPERAR A OTRA
PARA EJECUTARSE

Callbacks are most often used with asynchronous functions. Ejemplos --->

1 - SETTIMEOUT()
------
setTimeout(myFunction, 3000);
function myFunction() {
  document.getElementById("demo").innerHTML = "I love You !!";
}
------
In the example above, myFunction is used as a callback.
myFunction is passed to setTimeout() as an argument.
3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.

2 - SETINTERVAL()
------
setInterval(myFunction, 1000);
function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
-------
In the example above, myFunction is used as a callback.
myFunction is passed to setInterval() as an argument.
1000 is the number of milliseconds between intervals, so myFunction() will be called every second.

NOTA!!!! 
Asynchronus programmes are difficult to write and difficult to debug.
Most modern asynchronous JavaScript methods DON'T USE CALLBACK!!! 
Instead, is solved using PROMISES!!!

"Producing code" is code that can take some time
"Consuming code" is code that must wait for the result
A PROMISE IS A JSCRIPT OBJECT that links producing code and consuming code

SYNTAX --->
------
let myPromise = new Promise(function(myResolve, myReject) {
//"Producing Code" (May take some time)
  myResolve(); // when successful
  myReject();  // when error
});

//"Consuming Code" (Must wait for a fulfilled Promise) - .then() tiene dos argumentos a callback for success y a callback for error - son optionales. Podemos usar uno y otro o ambos

myPromise.then(
  function(value) { code if successful },
  function(error) { code if some error }
);

//SINO DE ESTE OTRO MODO CON .THEN Y .CATCH
myPromise
.then(result => {
    console.log(result)
  })
.catch(error => console.log(error))

-------
When the producing code obtains the result, it should call one of the two callbacks
myResolve() if success
myReject() if error

The Promise object supports two properties: state and result.
myPromise.state	-->   myPromise.result
"pending"	    -----   undefined
"fulfilled"	  -----   value
"rejected"	  -----   error

ASYNC?AWAIT: make promises easier to write"
- async > makes a function return a Promise
- await > makes a function wait for a Promise
------
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

async function myFunction() {
  return "Hello";
}
myFunction().then(
  function(value) {myDisplayer(value);}
  function(error) {myDisplayer(error);}
);

//Is the same as:

function myFunction() {
  return Promise.resolve("Hello");
}
myFunction().then(
  function(value) {myDisplayer(value);}
  function(error) {myDisplayer(error);}
);

//o en ambos casos podemos usar .then y .catch
myFunction
.then(result => {
    console.log(result)
  })
.catch(error => console.log(error))

------
The AWAIT keyword can only be used inside an async function.
makes the function pause the execution and wait for a resolved promise before

How do we access the value from the promise? To access the value from the promise, we will use the keyword await.

const square = async function (n) {
  return n * n
}
const value = await square(2)
console.log(value)

Async and await go together, one can not exist without the other
-----

FETCH
//con promise
const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
  .then(response => response.json()) // accessing the API data as JSON
  .then(data => {
    // getting the data
    console.log(data)
  })
  .catch(error => console.error(error)) // handling error if something wrong happens

//con async-await
const fetchData = async () => {
  try {
    const response = await fetch(url)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()

NOTA: VEMOS QUE CON PROMISE USAMOS .THEN .CATCH Y COMO ASYNC/AWAIT USAMOS TRY/CATCH
  */

/// EJERCICIOS 30-days-JScript-Challenge
console.info("Promises-Async/Await-FetchAPI");

import fetch from "node-fetch";

console.log("\n---------------------------------------\n");

////Challenge 18
/////////////////////////////////////LEVEL 1
//Read the countries API using fetch and print the name of country, capital, languages, population and area

const url = "https://restcountries.com/v2/all"; // countries api
fetch(url)
  .then((response) => response.json()) // accessing the API data as JSON
  .then((data) => {
    // getting the data
    const info = data.map((country) => {
      return {
        name: country.name,
        capital: country.capital,
        population: country.population,
        languages: country.languages.map((l) => l.name),
      };
    });
    console.table("fetch paises ", info.splice(0, 3)); //or console.log(info.splice(0, 3))
  })
  .catch((error) => console.error(error)); // handling error if something wrong happens

/////////////////////////////////////LEVEL 2:
//Print out all the cat names in to catNames variable.

const catsAPI = "https://api.thecatapi.com/v1/breeds";

const fetchData = async () => {
  try {
    const response = await fetch(catsAPI);
    const catNames = await response.json();

    const theNames = catNames.map((breed) => {
      return {
        breed: breed.name,
      };
    });
    console.table(theNames);
  } catch (err) {
    console.error(err);
  }
};

fetchData();

////////////////////////////////  LEVEL 3
//Read the cats api and find the average weight of cat in metric unit.

/* 
//Desmembrando el problema
const prueba = "4 - 5"; //
console.log(prueba) //es un string 

const numArr = prueba.split(" ")
console.log(numArr)

const primerNumero = Number.parseInt(numArr[0]) //agarramos el primer elem del string y lo pasamos a numero
const segundoNumero = Number.parseInt(numArr[numArr.length - 1]) //agarramos el último elemento y lo pasamos a numero
console.log(primerNumero)
console.log(segundoNumero)

const promedio = (primerNumero + segundoNumero) / 2 //hacemos la operación para obtener el promedio
console.log(promedio)
*/

const fetchData2 = async () => {
  try {
    const response = await fetch(catsAPI);
    const catWeight = await response.json();

    const theAverageWeight = catWeight.map((w) => {
      const weightInfo = w.weight.metric;
      const weightInfoArr = weightInfo.split(" ");
      //console.log(weightInfoArr)

      const primerNumero = Number.parseInt(weightInfoArr[0]);
      const segundoNumero = Number.parseInt(
        weightInfoArr[weightInfoArr.length - 1]
      );

      const promedio = (primerNumero + segundoNumero) / 2;

      return {
        Average_Weight: promedio + " kg",
      };
    });

    console.table(theAverageWeight);
  } catch (err) {
    console.error(err);
  }
};

fetchData2();

//todo junto: raza del gato y peso promedio
const fetchData3 = async () => {
  try {
    const response = await fetch(catsAPI);
    const catApi = await response.json();

    const theCatInfo = catApi.map((cat) => {
      const weightInfo = cat.weight.metric;
      const weightInfoArr = weightInfo.split(" ");

      const primerNumero = Number.parseInt(weightInfoArr[0]);
      const segundoNumero = Number.parseInt(
        weightInfoArr[weightInfoArr.length - 1]
      );

      const promedio = (primerNumero + segundoNumero) / 2;

      return {
        breed: cat.name,
        Average_Weight: promedio + " kg",
      };
    });
    console.table(theCatInfo); //or console.log(theCatInfo)
  } catch (err) {
    console.error(err);
  }
};

fetchData3();

//Read the countries api and find out the 10 largest countries

const fetchData4 = async () => {
  try {
    const response = await fetch(url);
    const countryApi = await response.json();

    const theCountryArea = countryApi.map((country) => {
      const theCountryInfo = {
        country: country.name,
        superficie: country.area ?? 0,
        /*?? 0 - significa que si el objeto no tiene key:value de "area" que 
              le asigne el valor de 0 - sino javaScript sort se traba cuando no existe 
              la key:value
              - sacarle el ?? 0 para ver que sucede*/
      };
      return theCountryInfo;
    });
    //console.log(theCountryArea)

    const sortByArea = theCountryArea.sort(
      (a, d) => d.superficie - a.superficie
    );

    console.table(sortByArea.splice(0, 10));
  } catch (err) {
    console.error(err);
  }
};

fetchData4();

//Read the countries api and count total number of languages in the world used as officials.
const fetchData5 = async () => {
  try {
    const response = await fetch(url);
    const countryApi = await response.json();

    const theArrLanguage = [];
    countryApi.forEach((country) => {
      const plainLanguages = country.languages.map((l) => l.name);
      theArrLanguage.push(...plainLanguages); //Ver que sin los tres puntitos me hace una array con arrays internos
    });

    console.log(theArrLanguage);

    const howMany = new Set(theArrLanguage);
    console.log("la cantidad de idomas es: ", howMany.size);
  } catch (err) {
    console.error(err);
  }
};

fetchData5();
