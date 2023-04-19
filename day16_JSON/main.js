console.info("JSON: JavaScript Object Notation");
/*
Is text or string only. 
Is a light weight data format for storing and transporting. 
Mostly used when data is sent from a server to a client. 
An easier-to-use alternative to XML.
*/

//Importamos el JSON desde su archivo - creamos la variable data y nos devuelvel el JSON como JS-Object
import data from "./data.json" assert { type: "json" };
console.log(data);

/////////////////  JSON to JS-Object -> JSON.parse()
/*Mostly we fetch JSON data from HTTP response or from a file, but we can store the JSON as a string and we can change to Object for sake of demonstration */
const usersText = `{
    "users":[
      {
        "firstName":"Assabene",
        "lastName":"Yetayeh",
        "age":250,
        "email":"asab@asb.com"
      },
      {
        "firstName":"Alex",
        "lastName":"James",
        "age":25,
        "email":"alex@alex.com"
      },
      {
      "firstName":"Lidia",
      "lastName":"Tekle",
      "age":28,
      "email":"lidiya@lidiya.com"
      }
    ]
    }`;

const usersObj = JSON.parse(usersText);
console.log(usersObj);

//otro ejemplo con REVIVER
const usersText2 = `{ 
    "users":[
      {
        "firstName":"Laura",
        "lastName":"Leni",
        "age":40,
        "email":"ll.com"
      },
      {
        "firstName":"Santiago",
        "lastName":"Bandiera",
        "age":38,
        "email":"sg.com"
      }
    ]
    }`;

//the reviver function as a formatter, we put the keys we want to format.
//Reviver is an optional callback function
//JSON.parse(json, (key, value) => {})

const usersObj2 = JSON.parse(usersText2, (key, value) => {
  let newValue =
    typeof value == "string" && key != "email" ? value.toUpperCase() : value;
  return newValue;
});
console.log(usersObj2); //users: [{ firstName: 'LAURA', lastName: 'LENI'...}, {firstName: 'SANTIAGO', lastName: 'BANDIERA'...}

const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');
console.log(obj);

//////////////////  JS-Object to JSON -> JSON.stringify()
/*
Takes one required parameter and two optional parameters. 
The replacer is used as filter and the space is an indentations. 
If we do not want to filter out any of the keys from the object we can just pass undefined. 
*/
const object = { name: "John", age: 30, city: "New York" };
const myJSON = JSON.stringify(object);
console.log(myJSON); //{"name":"John","age":30,"city":"New York"}

//using filter and space identation
const user = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
  country: "Finland",
  city: "Helsinki",
  email: "alex@alex.com",
  skills: ["HTML", "CSS", "JavaScript", "React", "Python"],
  age: 250,
  isLoggedIn: false,
  points: 30,
};

const txt = JSON.stringify(
  user,
  ["firstName", "lastName", "country", "city", "age"],
  4
);
console.log(txt);
/*
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
*/

//////////////////////////////////////////////////////////
//////////////////// EJERCICIOS //////////////////////////
/////////////////////////////////////////////////////////
//Change skills array to JSON using JSON.stringify()
const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
console.log(JSON.stringify(skills));

//Stringify the age variable
let age = 250;
console.log(JSON.stringify(age));
//Stringify the isMarried variable
let isMarried = true;
console.log(JSON.stringify(isMarried));

//Stringify the student object
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
console.log(JSON.stringify(student, undefined, 2));

//Stringify the students object with only firstName, lastName and skills properties
console.log(JSON.stringify(student, ["firstName", "lastName", "skills"], 2));

//Find the user who has many skills
const txt2 = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

const text2ToObject = JSON.parse(txt2);
console.log(text2ToObject);

//console.log(text2ToObject.Paul.skills);

let mostSkills = 0;
let quien = undefined;
for (let user in text2ToObject) {
  let current = text2ToObject[user].skills;
  if (current.length > mostSkills) {
    mostSkills = current.length;
    quien = user;
  }
}

console.log("Respuesta -> ", quien + " tiene más skills. Tiene: " + mostSkills);
//console.log(text2ToObject.Paul.skills.length);
