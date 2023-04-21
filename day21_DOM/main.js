console.info("DOM");
/*
/GETTING ELEMENTS
//by tag -- const elem = document.getElementsByTagName("tagname")
- returns an HTMLCollection object (an array like object)
-- .length 
-- accesed by index or for loop (no forEach())

//by class -- const elem = document.getElementsByClassName("class-name")
- idem (HTMLCollection object)

//by id -- const elem = document.getElementById("id-name")
- targets a single HTML element

//css selector -- 
- querySelector() - podemos seleccionar by tag, id or class
let firstTitle = document.querySelector('h1') //select the first available h1 element
let firstTitle = document.querySelector('#first-title') //select id with first-title
let firstTitle = document.querySelector('.title') //select the first available element with class title

- querySelectorAll() - to select html elements by its tag name or class
-- returns a nodeList which is an array like object 
-- .length, index access, loop y forEach()

const elem = document.querySelectorAll("tagname.classname")
const allTitles = document.querySelectorAll('h1') //selects all the available h1 elements in the page
const allTitles = document.querySelectorAll('.title') // the same goes for selecting using class
*/
