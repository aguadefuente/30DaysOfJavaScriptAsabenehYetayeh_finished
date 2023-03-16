////////////////////////////////////////APUNTES
import {countries} from "./countries"


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
console.log(countries)

///////LEVEL3
