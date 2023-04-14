console.log("Set-Map práctica");

import { countriesObjArr } from "../day9_functional/countriesObjArr.js";
console.log(countriesObjArr.length);
////////////////////// SET: a collection of unique values ///////////////////

///////new Set() -	Creates a new Set
const createSet = new Set();
console.log(createSet); //{}
console.log(createSet.size); //0

const letters = new Set(["a", "b", "c"]);
console.log(letters); //{"a", "b", "c";}

const unarraycomun = [1, 2, 3, 4, 2, 1, 5];
const setfromarray = new Set(unarraycomun);
console.log(setfromarray); //{1, 2, 3, 4, 5;} quedan valores no repetidos

////////add() - Adds a new element - No se agregarán valores que ya existan!!!
letters.add("d"); //agregamos un valor
let addvariable = "e";
letters.add(addvariable); //agregamos un valor from una variable
console.log(letters); //{'a','b','c','d','e' }

////////delete() - Removes an element
letters.delete("e");
console.log(letters); //{ 'a', 'b', 'c', 'd' }
///////clear() - removes all the elements
setfromarray.clear();
console.log("clear", setfromarray); //{}

////////has() - Returns true if a value exists
console.log(letters.has("a")); //true
console.log(letters.has("h")); //false

///////for-of iterate
for (let letter of letters) {
  console.log(letter);
}

const companies = ["Google", "Facebook", "Amazon"];
const setOfCompanies = new Set();
//iterando agregamos valores al set
for (const company of companies) {
  setOfCompanies.add(company);
}
console.log(setOfCompanies); //{'Google','Facebook','Amazon'}

///////forEach() - Invokes a callback for each element
let text = "";
letters.forEach(function (value) {
  text += value;
});
console.log(text);

//////////////////////// EJERCICIOS /////////////////////////
//ENCONTRAR LA UNIÓN con spread operator
let a = [1, 2, 3, 4, 5];
let b = [3, 4, 5, 6];
let c = [...a, ...b];

let A = new Set(a);
let B = new Set(b);
let C = new Set(c);

console.log(C); //{1,2,3,4,5,6}

//ENCONTRAR LA INTERSECCIÓN con filter() y .has()
let d = a.filter((num) => B.has(num));
let D = new Set(d);

console.log(D); //{3,4,5}

//ENCONTRAR LA DIFERENCIA con filer() y .has()
let e = a.filter((num) => !B.has(num));
let E = new Set(e);
console.log(E); //{1,2}

///////////////////////////////////// MAP() //////////////////////////////
//holds key-value pairs - the keys can be any datatype.
//remembers the original insertion order of the keys.

//////////new Map()	- Creates a new Map
//creating new Map() and then .add()
const aSet = new Map();
console.log(aSet.size); //0
//or Passing an Array to new Map()
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);
console.log(fruits); //{ 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }
console.log(fruits.size); //3

//////////set()	- sets the value or change it
fruits.set("grapes", 500);
console.log(fruits); ////{'apples' => 500,'bananas' => 300,'oranges' => 200,'grapes' => 500}
fruits.set("grapes", 100);
console.log(fruits); //{'apples' => 500,'bananas' => 300,'oranges' => 200,'grapes' => 100}

aSet.set("prueba", 1);
console.log(aSet);

//////////get()	Gets the value
console.log(fruits.get("apples")); //500

//////////delete() - Removes a Map element specified by the key
fruits.delete("apples");
console.log(fruits); //{ 'bananas' => 300, 'oranges' => 200, 'grapes' => 100 }

//////////has() - Returns true if a key exists in a Map
console.log(fruits.has("apples")); //false

//////////forEach()	- Calls a function for each key/value pair in a Map
let text1 = " ";
fruits.forEach(function (value, key) {
  text1 += key + " = " + value + "\t";
});
console.log(text1);

//////////entries()	- Returns an iterator with the [key, value] pairs in a Map
let text2 = " ";
for (const x of fruits.entries()) {
  text2 += x + "\t";
}
console.log(text2);

//////////////////////////////// EJERCICIOS ////////////////////////////////
////////////LEVEL 1
//create an empty set
const anEmptySet = new Set();
console.log(anEmptySet);
//Create a set containing 0 to 10 using loop
for (let i = 0; i < 10; i++) {
  anEmptySet.add(i);
}
console.log(anEmptySet);

//Remove an element from a set
anEmptySet.delete(5);
console.log(anEmptySet);

//Clear a set
anEmptySet.clear();
console.log(anEmptySet);

///Create a set of 5 string elements from array
const fiveStringArr = ["laura", "eva", "santiago", "gabriel", "bandierlen"];
const setfromfiveStringArr = new Set(fiveStringArr);
console.log(setfromfiveStringArr);

//Create a map of countries and number of characters of a country
const countryArr = ["Argentina", "Chile", "Peru", "Bolivia"];
const countryArrSet = new Map();

for (let country of countryArr) {
  countryArrSet.set(country, country.length);
}

console.log(countryArrSet);

//////////LEVEL 2
console.log("prueba-import", countriesObjArr[0].name);

//How many languages are there in the countries object file.
const howMany = new Set();
for (let country of countriesObjArr) {
  for (let language of country.languages) {
    howMany.add(language);
  }
}
console.log(howMany.size); //112

//Use the countries data to find the 10 most spoken languages:
/////primero voy a hacer un array con todos los arrays del countryObjArr
let thelanguages = [];
for (let country of countriesObjArr) {
  for (let lang of country.languages) {
    thelanguages.push(lang);
  }
}
console.log(thelanguages.length);
//console.log(thelanguages);

//ya tenemos un array con todos los idiomas - algunos están mas de una vez.
//por eso ahora hacemos un set() para que sólo quede uno de cada idioma
const setdeidiomas = new Set(thelanguages);
console.log(setdeidiomas.size);

const elarraycontador = [];
const contador = {};

//recorremos el set()
for (let l of setdeidiomas) {
  //filtramos según el idioma esté repetido
  const arrayderepetidos = thelanguages.filter((lng) => lng === l);
  console.log(arrayderepetidos); //ej["Englis", "English","English"...]
  //hacemos un push
  //elarraycontador.push({ lang: l, count: arrayderepetidos.length });
  elarraycontador.push({ [l]: arrayderepetidos.length });
}

console.log(elarraycontador);
//hacemos una copia del elarraycontador porque .sort() lo modifica
let elarraycontadorcopy = [...elarraycontador];

function mostSpokenLanguages(array, n) {
  return array
    .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
    .slice(0, n);
}

console.log(mostSpokenLanguages(elarraycontadorcopy, 10));
console.log(mostSpokenLanguages(elarraycontadorcopy, 3));
