console.info("DOM - Document Object Model");
/*
/////////////// GETTING ELEMENTS
//by tag -- const elem = document.getElementsByTagName("tagname")
- returns an HTMLCollection object (an array like object)
-- .length 
-- accesed by index or for loop (no forEach())

//by class -- const elem = document.getElementsByClassName("class-name")
- idem (HTMLCollection object)

//by id -- const elem = document.getElementById("id-name")
- targets a single HTML element
- If the element is not found, element will contain null

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

/////////// ADDING ATTRIBUTES
const titles = document.querySelectorAll('h1')
titles[3].className = 'title' //al h1 index 3 le agregamos la class "title" - recordar que querySelectorAll nos trae todos los h1 en un array-like
o
titles[3].setAttribute('class', 'title') //con setAttribute() method
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('classname') //classList.add()
titles[3].classList.remove('classname') //classList.remove()

/////////// ADDING TEXT
>>> textContent() - add text to an HTML element
ej> titles[3].textContent = 'Fourth Title'

>>> innerHTML() - add a text or HTML element or elements as a child
<ul>
    <li>30DaysOfPython Challenge Done</li>
    <li>30DaysOfJavaScript Challenge Ongoing</li>
    <li>30DaysOfReact Challenge Coming</li>
</ul>
//to replace or add completely new children content to a parent element
const ul = document.querySelector('ul')
ul.innerHTML = lists
//to remove all the children of a parent element. Instead of using removeChild()
const ul = document.querySelector('ul')
ul.innerHTML = ''


//////////// ADDING STYLE 
title[2].style.color = 'red'
title[2].style.fontSize = '20px' //camelCase

*/
// EJERCICIOS
document.addEventListener("DOMContentLoaded", function (event) {
  //LEVEL 1
  //Create an index.html file and put four p elements as above:
  //- Get the first paragraph by using document.querySelector(tagname)
  const firstParagraph = document.querySelector("p");
  console.log("primer párrafo con querySelector", firstParagraph);

  const firstParagraphWithQAll = document.querySelectorAll("p")[0];
  console.log("primer párrafo con querySelectorAll", firstParagraphWithQAll);

  //- Get each of the the paragraph using document.querySelector('#id')
  for (let i = 1; i <= 4; i++) {
    const eachP = document.querySelector("#p" + i);
    console.log(eachP);
  }

  //- Get all the p as nodeList using document.querySelectorAll(tagname)
  const allparagraph = document.querySelectorAll("p");
  console.log(allparagraph);

  //- Loop through the nodeList and get the text content of each paragraph
  allparagraph.forEach((parag) => console.log("forEach()", parag.textContent));

  //- Set a text content to paragraph the fourth paragraph,Fourth Paragraph
  const nuevoContent = document.querySelectorAll("p");
  nuevoContent[3].textContent = "Nuevo Contenido con textContent";
  console.log(nuevoContent[3].textContent);

  //- Set id and class attribute for all the paragraphs using different attribute setting methods
  //con .className
  console.log((allparagraph[0].className = "class_classN"));
  //con .id
  console.log((allparagraph[0].id = "id_.id"));
  //con .setAttribute('class', 'title') /.setAttribute('id', 'title')
  document.querySelectorAll("p")[1].setAttribute("class", "class_setAtt");
  document.querySelectorAll("p")[1].setAttribute("id", "id_setAttribute");
  //.classList.add('classname')
  document.querySelectorAll("p")[2].classList.add("class_classList.add");

  //LEVEL 2
  //Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
  //Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
  //Set text content, id and class to each paragraph

  /////// the end ////
});
