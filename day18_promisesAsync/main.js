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

/// EJERCICIOS ///
const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

//Read the countries API using fetch and print the name of country, capital, languages, population and area.

//Print out all the cat names in to catNames variable.

//Read the cats api and find the average weight of cat in metric unit.
//Read the countries api and find out the 10 largest countries
//Read the countries api and count total number of languages in the world used as officials.
