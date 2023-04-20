console.log("Destructuring Tutorial");
// a way to unpack arrays, and objects and assigning to a distinct variable
//DESTRUCTURING ARRAYS

const numbers = [1, 2, 3];
let [x, y, z] = numbers; //sería como poner let x = numbers[0], let y = numbers[1]...
let [a, , c] = numbers; //la coma hace que nos saltemos un valor

console.log(x, y, z); //1 2 3
console.log(numbers); //[1,2,3]
console.log(a, c); //1,3

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack; //sería const frontEnd = fullStack[0]

console.log(frontEnd);
console.log(backEnd);

const names = [undefined, "Brook", "David"];
let [
  firstPerson = "Asabeneh", //default values si es undefined
  secondPerson,
  thirdPerson,
  fourthPerson = "John", //default values si no existe
] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson); //Asabeneh Brook David John

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums; //get some values and the rest with ...spread operator

console.log(num1, num2, num3); //1, 2, 3
console.log(rest); //[(4, 5, 6, 7, 8, 9, 10)];

//destructurin in iteration
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

//////DESTRUCTURING WITH OBJECTS
/*the name of the variable we use to destructure should be exactly 
the same as the key or property of the object*/
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area, perimeter } = rectangle;
console.log(width, height, area, perimeter); //20 10 200 undefined

//let { width, height, area, perimeter = 60 } = rectangle;
//console.log(width, height, area, perimeter) //20 10 200 60

/////Without destructuring
const rect = {
  width: 20,
  height: 10,
};
const calculatePerimeter = (rectangle) => {
  return 2 * (rectangle.width + rectangle.height);
};

/////With destructuring
const calculatePerimeter2 = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect)); // 60
console.log(calculatePerimeter2(rect)); // 60

//object destructuring iteration
const todoList = [
  {
    task: "Prepare JS Test",
    time: "4/1/2020 8:30",
    completed: true,
  },
  {
    task: "Give JS Test",
    time: "4/1/2020 10:00",
    completed: false,
  },
];

for (const { task, time, completed } of todoList) {
  console.log(task, time, completed);
}

/////////////////////////////////////////////////////////////////////
////////////////////    EJERCICIOOOOOS!!!     ///////////////////////
////////////////////////////////////////////////////////////////////
//LEVEL 1
const constants = [2.72, 3.14, 9.81, 37, 100];
const room = {
  ancho: 20,
  alto: 10,
  areas: 200,
  perimetro: 60,
};
//Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
let [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);
//Destructure the room object by its properties or keys.
let { ancho, alto, areas, perimetro } = room;
console.log(ancho, alto, areas, perimetro);

//LEVEL 2
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTML"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//Iterate through the users array and get all the keys of the object using destructuring
for (const { name, scores, skills, age } of users) {
  console.log(name, scores, skills, age);
}

//Find the persons who have less than two skills
console.log("filtro");
for (const { name, skills } of users) {
  if (skills.length <= 2) {
    console.log(name, skills);
  }
}

//LEVEL 3
const somecountries = [
  {
    name: "Afghanistan",
    capital: "Kabul",
    languages: ["Pashto", "Uzbek", "Turkmen"],
    population: 27657145,
    flag: "https://restcountries.eu/data/afg.svg",
    currency: "Afghan afghani",
  },
  {
    name: "Åland Islands",
    capital: "Mariehamn",
    languages: ["Swedish"],
    population: 28875,
    flag: "https://restcountries.eu/data/ala.svg",
    currency: "Euro",
  },
  {
    name: "Albania",
    capital: "Tirana",
    languages: ["Albanian"],
    population: 2886026,
    flag: "https://restcountries.eu/data/alb.svg",
    currency: "Albanian lek",
  },
  {
    name: "Algeria",
    capital: "Algiers",
    languages: ["Arabic"],
    population: 40400000,
    flag: "https://restcountries.eu/data/dza.svg",
    currency: "Algerian dinar",
  },
  {
    name: "American Samoa",
    capital: "Pago Pago",
    languages: ["English", "Samoan"],
    population: 57100,
    flag: "https://restcountries.eu/data/asm.svg",
    currency: "United State Dollar",
  },
];
//Destructure the countries object print name, capital, population and languages of all countries
for (const { name, capital, population, languages } of somecountries) {
  console.log(name, capital, population, languages);
}
/*A junior developer structure student name, skills and score in array 
of arrays which may not easy to read. Destructure the following array name 
to name, skills array to skills, scores array to scores, JavaScript score 
to jsScore and React score to reactScore variable in one line.
The  output should be - David (4) ["HTM", "CSS", "JS", "React"] 90 95*/
const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
const [nombre, skills, [, , jsScore, reactScore]] = student;

console.log(nombre, skills, jsScore, reactScore);

//Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]],
  ["John", ["HTM", "CSS", "JS", "React"], [85, 80, 85, 80]],
];

function convertArrayToObject(arr) {
  const arrToReturn = [];
  for (const [name, skills, scores] of arr) {
    arrToReturn.push({ name, skills, scores });
  }
  return arrToReturn;
}

console.log(convertArrayToObject(students));
/* output ->
 [
      {
        name: 'David',
        skills: ['HTM','CSS','JS','React'],
        scores: [98,85,90,95]
      },
      {
        name: 'John',
        skills: ['HTM','CSS','JS','React'],
        scores: [85, 80,85,80]
      }
    ]
*/

/*//mismo ejercicio sin hacer .push con .map
const convertArrayToObject2 = (param) => {
  return param.map((item) => {
    const [name, skills, scores] = item;
    return { name, skills, scores };
  });
};

console.log(convertArrayToObject2(students));

*/

const studentObject = {
  name: "David",
  age: 25,
  skills: {
    frontEnd: [
      { skill: "HTML", level: 10 },
      { skill: "CSS", level: 8 },
      { skill: "JS", level: 8 },
      { skill: "React", level: 9 },
    ],
    backEnd: [
      { skill: "Node", level: 7 },
      { skill: "GraphQL", level: 8 },
    ],
    dataBase: [{ skill: "MongoDB", level: 7.5 }],
    dataScience: ["Python", "R", "D3.js"],
  },
};

/*
NOTA UN HACK PARA HACER UNA COPIA QUE NO SEA REFERENCIA AL OBJETO COPIADO
lo pasamos a string y luego con JSON.parse lo vuelo objeto.

const copied = JSON.parse(JSON.stringify(studentObject)); 
*/

//Copy the student object to newStudent without mutating the original object.
//In the new object add Bootstrap with level 8 to the frontend skill sets
const newStudentObject = {
  ...studentObject,
  skills: {
    ...studentObject.skills,
    frontEnd: studentObject.skills.frontEnd.concat({
      skill: "Bootstrap",
      level: 8,
    }),
  },
};
/*
acá primero copiamos el objeto con todos sus atributos, 
luego para agregar una nueva propiedad
a skills.frontEnd como debemos bajar varios niveles debemos nuevamente hacer una copia y
finalmente en frontEnd usamos .concat() para no sobreusar ...spread operator  
*/
console.log(newStudentObject.skills.frontEnd);

//seguimos practicando
///Add Express with level 9 to the backend skill sets
const newStudent2 = {
  ...studentObject,
  skills: {
    ...studentObject.skills,
    backEnd: studentObject.skills.backEnd.concat({
      skill: "Express",
      level: 9,
    }),
  },
};

console.log(newStudent2.skills.backEnd);

///Add SQL without level to the datascience skill sets
const newStudent3 = {
  ...studentObject,
  skills: {
    ...studentObject.skills,
    dataScience: studentObject.skills.dataScience.concat(["SQL"]),
  },
};

console.log(newStudent3.skills.dataScience);
