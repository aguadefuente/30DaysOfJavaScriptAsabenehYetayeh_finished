////////////////////////////////////////APUNTES
//ejercicio de import modules - en package.json agregamos type:modules / ver: https://flaviocopes.com/es-modules/
import {countries} from './countries.js';
import {webTechs} from './web_tech.js';
//ver level 2 alli están los console.log(countries) - console.log(webTechs)

//crear un array vacío
const arr1 = []; //USAR ESTE MODO
console.log("arr1:", arr1);
const arr2 = Array();
console.log("arr2:", arr2);
const eightEmptyValues = Array(8); //o new Array(8) -Crea 8 espacios vacíos
console.log("eightEmptyValues:", eightEmptyValues);

//IndexOf() - return -1 si no existe el elemento o el index donde está por primera vez
const numbers = [1, 2, 3, 4, 5, 6, 5];
console.log(numbers.indexOf(5)); //4
console.log(numbers.indexOf(7)); //-1

//lastIndexOf() - return last index or -1 si no existe
console.log(numbers.lastIndexOf(5)); //6
console.log(numbers.lastIndexOf(7)); //-1

//copy an array
const prueba = [10, 20, 30, 40, 50];
const resultado = [...prueba]; //SPREAD OPERATOR
console.log("resultado:", resultado);
const resultado2 = prueba.slice(); //SLICE - tiene 2 parámetros (start index, end index/not included/) NO MODIFICA EL ARRAY ORIGINAL
console.log("resultado2:", resultado2);
const resultado3 = prueba.slice(1, 4);
console.log("resultado3:", resultado3);

//.isArray: to check if the data type is an array. Return true/false
const numbersArr = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbersArr)); //true
const numbersArr2 = 100;
console.log(Array.isArray(numbersArr2)); //false

//.toString()
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook
//.join - pasa a string y definimos como se separan los elementos
console.log(names.join(" # ")); //Asabeneh # Mathias # Elias # Brook
console.log(names.join(" ")); //Asabeneh Mathias Elias Brook

//.splice - remove any element - 3 parameters: start index, cantidad de items a remover, elementos que queremos agregar
const numberos = [1, 2, 3, 4, 5, 6];
console.log(numberos.splice()); //remove all items
console.log(numberos.splice(0, 1)); //remove first item

const numbers20 = [10, 20, 30, 40, 50, 60];
console.log("removed items:", numbers20.splice(3, 3, 70, 80, 90));
console.log("new array with added items:", numbers20);

///////////////////////////////////EJERCICIOS
//LEVEL1
//declare empty array and with five elements. Find their length
const emptyArr = [];
const moreThanFive = [1, 2, 3, 4, 5, 6, 7];
console.log(emptyArr.length, moreThanFive.length);
//Get the first item, the middle item and the last item of the array
console.log(moreThanFive[0]);
let cuantosElementos = moreThanFive.length;
let elementoDelMedio = moreThanFive[(cuantosElementos - 1) / 2]; //middle item in an odd array
console.log(elementoDelMedio);
let lastElement = moreThanFive.length - 1;
console.log(moreThanFive[lastElement]);
/*
-Print out each company
-Change each company name to uppercase one by one and print them out
-Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
- Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
*/
const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

let printedCompany = "";

function printOut() {
  for (let i = 0; i < companies.length; i++) {
    printedCompany = companies[i];
    console.log(printedCompany);
  }
}

function printOutUpperCase() {
  for (let i = 0; i < companies.length; i++) {
    printedCompany = companies[i].toUpperCase();
    console.log(printedCompany);
  }
}

console.log(printOut());
console.log(printOutUpperCase());

const copyArr = companies.slice(); //para trabajar con el array original sin modificarlo
const sentence =
  copyArr.splice(0, 6).join() +
  " and " +
  copyArr[copyArr.length - 1] +
  " are big companies";
console.log(sentence);

console.log(companies);

const existCompany = (company) => {
  let index = companies.indexOf(company);
  if (index === -1) {
    console.log("Company not found");
  } else {
    console.log(companies[index]);
  }
};

existCompany("Facebook");
existCompany("Netflix");

/*Filter out companies which have more than one 'o' without the filter method*/
//viendo como funciona .split / nos devuelve un array y lo separa según lo que senalemos en el param
let probando = "laura";
console.log(probando.split(""));
console.log(probando.split("a"));
console.log(probando.split("a").length);
//viendo que elemento tiene mas de dos o en el array companies
let oCompanies = []; // declare an empty array for 'O' letter companies
function moreThanOneO() {
  for (let i = 0; i < companies.length; i++) {
    const theCompany = companies[i]; //get individual element of the array
    const count = theCompany.split("o").length - 1; //split the string based on the delimeter 'o'/ .length() of the array to determine the number of occurances
    // check if the company contains more than one 'o'
    if (count > 1) {
      // use push method to add elements to the OCompanies array
      oCompanies.push(theCompany);
    }
  }
  console.log(oCompanies);
}
moreThanOneO();

/*Slice out the first 3 companies from the array
Slice out the last 3 companies from the array
Slice out the middle company or companies from the array
*/

let sliceFirstThree = companies.slice(0, 3);
console.log("las tres primeras:", sliceFirstThree);

let ultimosTres = companies.length - 3;
console.log(ultimosTres);
let sliceLastThree = companies.slice(ultimosTres); //ponemos solo el starting point así agarra tb el último elemento hasta el final
console.log("las tres últimas:", sliceLastThree);

//sacando companies del medio según sean par o impar
const companies2 = [
"Facebook",
"Google",
"Microsoft",
"Apple",
"IBM",
"Oracle",
"Amazon",
"Otras"]
console.log(companies2);
let cortando = companies2.length / 2;
let probando2 = companies2.slice(cortando, cortando + 2);
console.log("probando2:", probando2);

console.log(companies)
if(companies.length%2 === 0){
  console.log(companies.slice(companies.length/2, companies.length/2+2)) //si es par slice las dos compañias del medio
} else {//si es impar sacar la compañia del medio
  console.log("compañia del medio impar:", companies.slice((companies.length-1)/2, (companies.length-1)/2+1)) 
}

/*
Remove the first IT company from the array
Remove the middle IT company or companies from the array
Remove the last IT company from the array
Remove all IT companies */

const copyArr2 = companies.slice();
console.log(copyArr2)
console.log("remove primer item:", copyArr2.splice(0,1))

console.log(copyArr2)
console.log(copyArr2.length%2)
console.log(copyArr2.length/2)

if(copyArr2.length%2 === 0){
  console.log("compañia del medio par:", copyArr2.splice((copyArr2.length/2)-1, 2)) //si es par slice las dos compañias del medio
} else {//si es impar sacar la compañia del medio
  console.log("compañia del medio impar:", copyArr2.splice((copyArr2.length-1)/2,1 )) 
}

console.log(copyArr2)
console.log("remove last:", copyArr2.splice(-1))

console.log(copyArr2)
console.log("remove all:", copyArr2.splice(0, copyArr2.length))
console.log(copyArr2)

///////LEVEL2
/*Create a separate countries.js file and store the countries array in to this file, 
create a separate file web_techs.js and store the webTechs array in to this file. 
Access both file in main.js file */
console.log("import countries:", countries)
console.log("import webTech:", webTechs)

//remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let wordArr = text.replace(/[^\w\s]/, '').split(' ');
console.log(wordArr)
console.log(wordArr.length)

//In the following shopping cart add, remove, edit items
/*add 'Meat' in the beginning, if it has not been already added
add Sugar at the end of you shopping cart if it has not been already added
remove 'Honey' if you are allergic to honey
modify Tea to 'Green Tea' */
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

function newUnshiftItem(item){
  if(shoppingCart.indexOf(item) === -1){
    shoppingCart.unshift(item)
    console.log(shoppingCart)
  }else{
    console.log("item already added")
  }
}

newUnshiftItem("Meat")
newUnshiftItem("Milk")

function newPushItem(item){
  if(shoppingCart.indexOf(item) === -1){
    shoppingCart.push(item)
    console.log(shoppingCart)
  }else{
    console.log("item already added")
  }
}

newPushItem("Sugar")
newPushItem("Milk")

console.log("antes de la alergia:", shoppingCart)
function allergicTo(something){
  if(shoppingCart.includes(something) === true){
    shoppingCart.splice(shoppingCart.indexOf("Honey"), 1)
    console.log("después de la alergia:", "fue retirado " + something.toUpperCase() + " del carro")
  } else {
    console.log("All product are safe. There is no " + something.toUpperCase() + " in the cart")
  }
} 

allergicTo("Honey")
allergicTo("Chocolate")

function modifyItem(item, newItem){
  if(shoppingCart.includes(item) === true){
    shoppingCart[shoppingCart.indexOf(item)] = newItem
    console.log(shoppingCart)
  } 
}

modifyItem("Tea", "Green-tea")

/*
console.log(shoppingCart.indexOf("Honey"))
console.log(shoppingCart)
console.log(shoppingCart.splice(shoppingCart.indexOf("Honey"), 1))
console.log(shoppingCart)
*/

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
console.log(countries)
function checkCounty(country){
  if(countries.indexOf(country) === -1){
    countries.push(country.toUpperCase())
    console.log(countries)
  }else{
    console.log("country already added")
  }
}

checkCounty('Ethiopia'),
checkCounty('Argentina')

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd)
console.log(fullStack)
const full = [...frontEnd,...backEnd]
console.log(full)

///////LEVEL3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

/*Sort the array and find the min and max age
Find the median age(one middle item or two middle items divided by two)
Find the average age(all items divided by number of items)
Find the range of the ages(max minus min)
Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array 
*/

ages.sort()
console.log(ages)
let minAge = ages[0]
console.log("The min age is:", minAge)
let maxAge = ages[ages.length-1]
console.log("The max age is:", maxAge)

let medianAge = ((maxAge - minAge)/2) + minAge
console.log("The median age is:", medianAge)

let averAge = 0;
function theAverage(arr) {
for(let i = 0; i<arr.length; i++){
   averAge += arr[i]/arr.length
}
console.log("The average Age is:", averAge.toFixed(2))
} 

theAverage(ages)

let rangeAge = maxAge - minAge
console.log("The range of the ages is:", rangeAge)

//Find the middle country(ies) in the countries array

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.