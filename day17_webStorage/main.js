console.info("web-storage tutorial");
/*
Web Storage is a new HTML5 API
Before HTML5, application data had to be stored in cookies, included in every server request
There are two Web Storage objects: In both -> The keys and the values are always strings

##sessionStorage: 
- data gets cleared when the page session ends (when the page is closed)
- is only available within the browser tab or window session
- Most modern browsers support Web Storage, however it is good to check

##localStorage: 
- data has no expiration time
- five methods to work on local storage: setItem(), getItem(), removeItem(), clear(), key()
*/

///// Web Storage objects: COPIAR Y PEGAR EJERCICIOS Y CONSOLE EN GOOGLE CONSOLE PARA VER OUTPUT

//localStorage - to display the localStorage object

//localStorage.setItem("key", "value") - to store data in the localStorage
localStorage.setItem("firstName", "Asabeneh"); // since the value is string we do not stringify it
localStorage.setItem("age", 200); //el número se hará string

const skills = ["HTML", "CSS", "JS", "React"];
const skillsJSON = JSON.stringify(skills, undefined, 4); //Skills array has to be stringified first to keep the format. //lo mismo con objetos - hay que .stringify primero
localStorage.setItem("skills", skillsJSON);
//console.log(localStorage);

//localStorage.getItem("key") - to display data stored in the localStorage.
let firstName = localStorage.getItem("firstName");
let age = localStorage.getItem("age");
let skilles = localStorage.getItem("skills");
//console.log(firstName, age, skilles);

//localStorage.clear() - to remove everything in the local storage
//localStorage.removeItem("key") - to remove stored item form a localStorage.
//localStorage.key("index") - to display a data stored in a localStorage.

///// EJERCICIOS //////
//Store you first name, last name, age, country, city in your browser localStorage.
localStorage.setItem("name", "Laura");
localStorage.setItem("lastname", "Leni");
localStorage.setItem("age", "40");
localStorage.setItem("country", "Spain");
localStorage.setItem("city", "Tenerife");

localStorage.getItem("name");

//Create a student object. The student object will have first name, last name, age, skills, country.  Store the student object in your browser localStorage.
const storedObject = {
  name: "Santiago",
  age: 38,
  city: "Tenerife",
};
const toString = JSON.stringify(storedObject, undefined, 2);
localStorage.setItem("student", toString);
//console.log(localStorage)
