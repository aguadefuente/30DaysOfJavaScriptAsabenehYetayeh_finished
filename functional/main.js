console.log("hola");
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

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num) => console.log(num));
console.log(sum);

let sum2 = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach((num) => (sum2 += num));

//const g = numbers2.forEach((num) => (sum2 += num));
//console.log(g); //da undefined

console.log(sum2);

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
  console.log((arr[index] = item * 10));
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
- Filter out items which full fill filtering conditions 
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
const resultados = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
console.log(resultados);

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
  const joiner = i === array.length - 1 ? ", and " : ", "; //operador ternario
  return accumulator + joiner + currentvalue;
});
console.log(ejfrase);

///LEVEL 2
///LEVEL 3
