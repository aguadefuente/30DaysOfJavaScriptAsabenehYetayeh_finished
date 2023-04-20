console.info("Promises-Async/Await-FetchAPI");
//PROMISE:
/*
- a way to handle asynchronous operations in JavaScript
- instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:
> pending: initial state, neither fulfilled nor rejected.
> fulfilled: meaning that the operation completed successfully.
> rejected: meaning that the operation failed.

syntax-->
const promise = new Promise((resolve, reject) => {
  resolve('success')
  reject('failure')
})

*/

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
    console.table(info.splice(0, 3)); //or console.log(info.splice(0, 3))
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

/////////////////////////////////////////LEVEL 3
//Read the cats api and find the average weight of cat in metric unit.

/* //Desmembrando el problema
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
    console.log(howMany.size);
  } catch (err) {
    console.error(err);
  }
};

fetchData5();
