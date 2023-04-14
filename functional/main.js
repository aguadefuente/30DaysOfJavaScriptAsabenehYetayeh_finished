console.log("hola");

import { countriesObjArr } from "./countriesObjArr.js";
//console.log("import countriesObjArr:", countriesObjArr);
console.log("import largo countryArr:", countriesObjArr.length); //250

//HIGHER ORDER FUNCTIONS:
//1- CALLBACK FUNCTIONS: functions which take other function as a parameter
const callback = (n) => {
  //n=3
  return n ** 2;
  //n al cuadrado => 3*3=9
};

function cube(callback, n) {
  console.log(callback(n)); //9
  console.log(n); //3
  return callback(n) * n; //9*3= 27
}

console.log(cube(callback, 3)); //27

//2 - RETURNING FUNCTIONS: functions which return a function as a value
const higherOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};
console.log(higherOrder(2)(3)(10));

//SETTING TIME> > ejemplo de callback function
//setInterval(): do some activity continuously with in some interval of time. Take a callback function and a duration as a parameter
function sayHello() {
  console.log("Hello");
}
//setInterval(sayHello, 1000); //LO COMENTÉ PARA QUE NO SE EJECUTE

//setTimeOut(): execute some action at some time in the future. Take a callback function and a duration as a parameter
function sayBye() {
  console.log("Bye-bye!");
}
//setTimeout(sayBye, 2000); //LO COMENTÉ PARA QUE NO SE EJECUTE

//FUNCTIONAL PROGRAMING: instead of for loops / we have built-in methods:
//ARRAYS ITERATORS (forEach, map, filter, sort, reduce...)
/*
///////////////////////////////// .FOREACH(): //////////////////////////////
- Iterate an array elements. No lo modifica
- return undefined y no es encadenable (a diferencia de map() o reduce())
- No hay forma de detener o cortar un bucle, para eso debemos usar for-loop
- syntax: 
arr.forEach(function callback(currentValue, index, array) {
    // tu iterador
}[, thisArg]);

#callback(required): función a ejecutar, que recibe tres argumentos
  ## currentvalue (required)- elememto actual siendo procesado
  ## index(optional) - indice del elemento actual que está siendo procesado
  ## array(optional) - array sobre el que se está trabajando
  ### thisArg(opcional) - valor que se usará como this cuando se ejecute el callback
*/
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log("numero:", num));

let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => (sum += num));
console.log("suma:", sum);

//const g = numbers2.forEach((num) => (sum2 += num));
//console.log(g); //da undefined

function logArrayElements(element, index) {
  console.log("a[" + index + "] = " + element);
}
// Nótese que se evita el 2° índice ya que no hay ningún elemento en esa posición del array
[2, 5, , 9].forEach(logArrayElements);
// salida:
// a[0] = 2
// a[1] = 5
// a[2] = 9

//multiplica cada elemento //acá usamos el 3er parametro arr
function myFunction(item, index, arr) {
  console.log((arr[index] = item * 10));
}
const numeros = [65, 44, 12, 4];
numeros.forEach(myFunction);

//lo mismo con arrow function
const numeros2 = [1, 2, 3, 4];
numeros2.forEach((item, index, arr) => {
  console.log(arr + " index[" + index + "]" + " = " + item * 10);
});

/*
//////////////////////////////////// .MAP() ////////////////////////////// 
- Iterate an array - no lo modifica
- takes a callback function with currentValue, index and array parameter 
- return a new array.
*/
let losnumeros = [1, 4, 9];
let dobles = losnumeros.map(function (num) {
  return num * 2;
});
console.log(losnumeros);
console.log(dobles);
// dobles es ahora [2, 8, 18]
// numeros sigue siendo [1, 4, 9]

//con arrow function
let losnum = [2, 3, 4];
let doblados = losnum.map((num) => num * 2);
console.log(doblados);

/*
///////////////////////////////// FILTER() /////////////////////////////
- Filter out items which fullfill filtering conditions 
- return a new array con los elementos que cumplen la condición sino un array vacío []
- no modifica array original
*/

const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const result = words.filter((word) => word.length > 6);
const result2 = words.filter((word) => word.endsWith("nt"));
console.log(result); //["exuberant", "destruction", "present"]
console.log(result2); //['exuberant', 'present']

const ages = [32, 33, 16, 40];
function checkAdult(age) {
  //el parámetro es el array ages
  return age >= 18;
}
const resultados = ages.filter(checkAdult);
console.log("filter age", resultados);

//con arrow function
const probando = ages.filter((age) => age >= 18);
console.log("probando", probando);

//////////////////////////// REDUCE() ////////////////////////////////
/*
- takes a callback function. 
- The callback function takes 3 parameters - accumulator, currentValue, index(opcional), initial value(optional), array(optional)
- el callback se ejecuta sobre cada elemento del array (excepto para el primero, si no se proporciona valorInicial)
- return a single value
 */

const thenumbers = [1, 2, 3, 4, 5];
const sumando = thenumbers.reduce((acc, cur) => acc + cur, 0);
const sumando2 = thenumbers.reduce((acc, cur) => acc + cur, 2);
const sumando3 = thenumbers.reduce((acc, cur) => acc + cur);
console.log("uno", sumando); //15 porque el initial value es 0
console.log("dos", sumando2); //17 porque el initial value es 2
console.log("tres", sumando3); //15 no tiene initial value y por defecto el acumulador toma el primer elemento del array

/////////////////////// EVERY() ////////////////////////////////
/* 
- Check if all the elements are similar in one aspect.
- returns boolean
Advertencia: ¡Llamar este método en un array vacío devuelve true para cualquier condición!
*/
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const areAllStr = names.every((name) => typeof name === "string"); // Are all strings?

console.log(areAllStr); //true

//////////////////////////// FIND() /////////////////////////
/*
- Return the first element (the value) which satisfies the condition sino undefined
- la callback function tiene parámetros: element, index, array, thisArg
 */
const scores = [
  { name: "Asabeneh", score: 95 },
  { name: "Mathias", score: 80 },
  { name: "Elias", score: 50 },
  { name: "Martha", score: 85 },
  { name: "John", score: 100 },
];

const score = scores.find((user) => user.score > 80);
console.log(score); //{ name: 'Asabeneh', score: 95 }

// Declarar un array sin elementos en los índices 2, 3 y 4
const array = [0, 1, , , , 5, 6];

// Muestra todos los índices, no sólo aquellos que tienen valores asignados
array.find(function (value, index) {
  console.log("Visited index " + index + " with value " + value);
});

///////////////////////////// FINDINDEX() ///////////////////////////
/*
- Return the position of the first element which satisfies the condition sino -1
- parámetros: (callback(element, index, arr), thisArg)
*/
const flores = ["rosa", "margarita", "pensamiento", "lirio"];
const largas = flores.findIndex((flor) => flor.length > 7);
console.log(largas); //1

////////////////////////////// SOME() //////////////////////////////
/*
- Check if some of the elements are similar in one aspect. 
- returns boolean
- Nota: Este método devuelve false para cualquier condición puesta en un array vacío.
- arámetros: (callback(element, index, arr), thisArg)
*/
const algunoEsNumero = flores.some((flor) => typeof flor === "number");
console.log(algunoEsNumero); //false

///////////////////////////// SORT() ///////////////////////////////
/*
- arranges the array elements either ascending or descending order
- by default: sort values as string!! ordena según el UNICODE
- MODIFY the original array
*/

const products = ["Milk", "Coffee", "Sugar", "Honey", "Apple", "Carrot"];
console.log(products.sort()); // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
//Now the original products array  is also sorted

//con número we use a compare call back function inside the sort method
const sortnum = [9.81, 3.14, 100, 37];
//ascending
sortnum.sort(function (a, b) {
  return a - b;
});
console.log(sortnum); // [3.14, 9.81, 37, 100]
//descending
sortnum.sort(function (a, b) {
  return b - a;
});
console.log(sortnum);

//sorting object arrays:: we use the object key to compare
const users = [
  { name: "Asabeneh", age: 150 },
  { name: "Brook", age: 50 },
  { name: "Eyob", age: 100 },
  { name: "Elias", age: 22 },
];

users.sort((a, b) => {
  if (a.age < b.age) return -1;
  if (a.age > b.age) return 1;
  return 0;
});
console.log(users); //ascending

////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////  EJERCICIOS  ////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////
const ejcountries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const ejnames = ["Asabeneh", "Mathias", "Elias", "Brook"];
const ejnumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ejproducts = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

///LEVEL 1
//forEach() console.log each country in the countries array
ejcountries.forEach((country) => console.log(country));
//map() create an array of countries length from countries array
let countrylargor = ejcountries.map((country) => country.length);
console.log(countrylargor);
//map() map the products array to its corresponding prices
let productprices = ejproducts.map((producto) => producto.price);
console.log(productprices);
//filter() filter out country start with 'E';
let empiezacon = ejcountries.filter((country) => country.startsWith("E"));
console.log(empiezacon); //[]
//filter() filter out only prices with values.
let tienePrecio = ejproducts.filter(
  (producto) => typeof producto.price === "number"
);
console.log(tienePrecio);
//reduce() to sum all the numbers in the numbers array.
const ejsuma = ejnumbers.reduce(
  (accumulator, currentvalue) => accumulator + currentvalue
);
console.log(ejsuma);
//reduce() to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const ejfrase = ejcountries.reduce((accumulator, currentvalue, i, array) => {
  const joiner = i === array.length - 1 ? ", and " : ", "; //operador ternario para trabajar con el index
  return accumulator + joiner + currentvalue;
});
console.log(ejfrase + " are north European countries");
//some() check if some names' length greater than seven in names array
let greaterThan = ejnames.some((names) => names.length > 7);
console.log(greaterThan);
//every() check if all the countries contain the word land
let ifContain = ejcountries.every((country) => country.includes("land")); //includes is case sensitive
console.log(ifContain); //false
//lo mismo con some()
let ifContain2 = ejcountries.some((country) => country.includes("land"));
console.log(ifContain2); //true
//usando RegEx que a diferencia de includes podemos definir sea case insensitive
let pattern = /land/i;
let ifContain3 = ejcountries.every((country) => pattern.test(country));
console.log(ifContain3);
//find() find the first country containing only six letters
const findTheFirst = ejcountries.find((country) => country.length === 6);
console.log(findTheFirst); //Sweden
//findIndex() find the position of the first country containing only six letters
const findTheFirst2 = ejcountries.findIndex((country) => country.length === 6);
console.log(findTheFirst2); //index 1
//findIndex() find the position of Norway if it doesn't exist in the array you will get -1
const findPosition = ejcountries.findIndex((country) => country === "Norway");
console.log(findPosition); //index 3

///LEVEL 2

//Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
let metraigolosprecios = ejproducts.map((producto) => producto.price);
console.log(metraigolosprecios);

let filtrandoValores = ejproducts.filter(
  (producto) => typeof producto.price === "number"
);
console.log(filtrandoValores);

let sumoEncadenando = ejproducts
  .map((producto) => producto.price)
  .filter((producto) => typeof producto === "number")
  .reduce((acc, curr) => acc + curr, 0);
console.log("sumoEncadenando", sumoEncadenando);

//Find the sum of price of products using only reduce(callback))
const sumoReduciendo = ejproducts.reduce(function (currentTotal, obj) {
  if (typeof obj.price === "number") {
    return currentTotal + obj.price;
  }
  return currentTotal;
}, 0);
console.log("sumoreduciendo", sumoReduciendo);

//Declare a function called categorizeCountries which returns an array of countries which have some common pattern (eg 'land', 'ia', 'island','stan')).
function categorizeCountries(r) {
  let theregexp = new RegExp(r, "gi");
  let category = countriesObjArr
    .filter((country) => country.name.match(theregexp))
    .map((country) => country.name);
  return category;
}

console.log("categoria", categorizeCountries("land"));
console.log(categorizeCountries("ia"));

//Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
/////////// ver main2: ejercicios hecho con for loop, forEach(): con if() y con ternary operator...etc

const primerLetra = countriesObjArr.reduce((v1, v2) => {
  const inicial = v2.name[0];
  debugger; //esta palabra es para debuggear
  v1[inicial] = (v1[inicial] || 0) + 1;
  return v1;
}, {});

console.log("array de primer letra", primerLetra);

//para comprobar que la suma de las letras me da 250 que es la cantidad de los paises
let sumandoTodo = function () {
  let contando = 0;
  for (let letra in primerLetra) {
    contando += primerLetra[letra];
  }
  return contando; //250
};

console.log("sumandoTodo:", sumandoTodo());

//Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming
//slice() no modifica array original
function getFirstTenCountries(arr) {
  let ten = arr.slice(0, 10);
  console.log("ten", ten.length);
  return ten;
}

console.log(getFirstTenCountries(countriesObjArr));

//con splice() overwrite original array / por eso primero hacemos una copia y trabajamos sobre ella
function getFirstTenCountries2(arr) {
  let copyArr = [...arr]; //podria haberlo encadenado [...arr].splice()
  let ten2 = copyArr.splice(0, 10);
  console.log("ten2", ten2.length);
  return ten2;
}

console.log(getFirstTenCountries2(countriesObjArr));
console.log("original array", countriesObjArr.length);

//Declare a getLastTenCountries function which which returns the last ten countries.
function getLastTenCountries(arr) {
  let tenlast = arr.slice(arr.length - 10, arr.lehgth);
  console.log("tenlast", tenlast.length);
  return tenlast;
}

console.log(getLastTenCountries(countriesObjArr));

function getLastTenCountries2(arr) {
  let tenlast2 = [...arr].splice(arr.length - 10, 10); //con splice() hacemos copia para no modificar el array original
  console.log("tenlast2", tenlast2.length);
  return tenlast2;
}

console.log(getLastTenCountries2(countriesObjArr));

//Find out which letter is used many times as initial for a country name from the countries array
let masVeces = 0;
let key = null;

for (let letra in primerLetra) {
  if (primerLetra[letra] > masVeces) {
    masVeces = primerLetra[letra];
    key = letra;
  }
}

console.log("letra mas usada es:", key + " : " + masVeces); //letra mas usada es: S : 33

//VER!!! main2.js otros modo de iterar por objetos que no sea for-in-loop

///LEVEL 3
//Sort countries by name, by capital, by population
function sortBy(x) {
  let copyCountries = [...countriesObjArr];

  copyCountries.sort((a, b) => {
    //ascending sort
    if (a[x] < b[x]) return -1;
    if (a[x] > b[x]) return 1;
    return 0;
  });
  return copyCountries.slice(0, 5);
}

console.log("///////////ORDEN POR NOMBRE///////////");
console.log(sortBy("name"));
console.log("///////////ORDEN POR CAPITAL///////////");
console.log(sortBy("capital"));
console.log("///////////ORDEN POR POPULATION///////////");
console.log(sortBy("population"));

///////create a function which create the ten most populated countries
//compruebo si todos los elementos son numer
const areAllNumber = countriesObjArr.every(
  (country) => typeof country.population === "number"
); // Are all numbers?
console.log(areAllNumber); //true
//hacemos una copia del array porque sort() lo modificaria
let countriescopy = [...countriesObjArr];

function mostPopulatedCountries(arr, n) {
  return arr
    .map((country) => ({
      //para que me return un objeto {} tengo que abrir primero () sino no funciona, lo toma como otra función
      name: country.name, //debo especificar la key:value - un objeto siempre tiene key:value
      population: country.population,
    }))
    .sort((a, b) => {
      //descending sort
      if (a.population < b.population) return 1;
      if (a.population > b.population) return -1;
      return 0;
    })
    .slice(0, n);
}

console.log("los 10 mas poblados ", mostPopulatedCountries(countriescopy, 10));
console.log("los 3 mas poblados ", mostPopulatedCountries(countriescopy, 3));

///////Find the 10 most spoken languages
//haremos un objeto contador - hacemos una copia del objeto con el que trabajaremos
let countriesObjectcopy = [...countriesObjArr];

let contando = {};
for (let i = 0; i < countriesObjectcopy.length; i++) {
  const current = countriesObjectcopy[i];

  for (let j = 0; j < current.languages.length; j++) {
    let idioma = current.languages[j];
    if (!contando.hasOwnProperty(idioma)) {
      contando[idioma] = 1;
    } else {
      contando[idioma]++;
    }
  }
}
//console.log("el contando", contando);

function mostSpokenLanguages(arr, n) {
  let languagearr = [];
  Object.entries(arr).map(function (elem) {
    languagearr.push({ language: elem[0], count: elem[1] });
  });

  return languagearr
    .sort((a, b) => {
      //descending sort
      if (a.count < b.count) return 1;
      if (a.count > b.count) return -1;
      return 0;
    })
    .slice(0, n);
}

console.log("los 10 idiomas mas hablados", mostSpokenLanguages(contando, 10));
console.log("los 3 idiomas mas hablados", mostSpokenLanguages(contando, 3));
