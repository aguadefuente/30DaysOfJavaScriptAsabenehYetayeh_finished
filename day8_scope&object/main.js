console.log("apuntes scope");
/*SCOPE
Variables scopes can be:
GLOBAL
Window Global Object:
Declaring a variable without let or const make it available in window object and this found anywhere
a = 'JavaScript'

A globally declared variable can be accessed every where in the same file. 
But the term global is relative. It can be global to the file or it can be global relative to some block of codes.

LOCAL
can be accessed only in certain block code
- Block Scope
- Function Scope

// Function scope
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a, b, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a, b) // JavaScript 10, accessible


VAR - only scoped to function 
LET OR CONST - is block scope. It will not infect other parts of our code.

The scope let and const are the same. 
The difference is only reassigning. We can not change or reassign the value of the const variable
Use LET for any value which change, CONST for any constant value, and for an array, object, arrow function and function expression
*/

//OBJECT

const triangle = {
  color: "red",
  base: 20,
  altura: 8.66,
  "triangle-name": "equilatero",
  getArea: function () {
    //a function is an object method
    return Math.pow(this.base * this.altura, 2); //this refers to the object itself
  },
};
console.log(triangle);
console.log(triangle.color); //accession .
console.log(triangle["triangle-name"]); //accessing []
console.log(triangle.getArea());

triangle.color = "blue"; //changing a new keys - objects are mutable
triangle.border = "solid-black"; //setting new keys
console.log(triangle.color);
console.log(triangle);

//OBJECT METHODS
//Object.assign: To copy an object without modifying the original object
const copyTriangle = Object.assign({}, triangle);
console.log("copy", copyTriangle);

//Object.keys: To get the keys or properties of an object as an array
let keys = Object.keys(triangle);
console.log(keys);

//Object.values:To get values of an object as an array
let values = Object.values(triangle);
console.log(values);

//Object.entries:To get the keys and values in an array
let key_values = Object.entries(triangle);
console.log(key_values);

//hasOwnProperty: To check if a specific key or property exist in an object
console.log(triangle.hasOwnProperty("name"));
console.log(triangle.hasOwnProperty("color"));

/////////////////////////////// EJERCICIOS ////////////////////////////
////////////// USER-OBJECT //////////
const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//Find the person who has many skills in the users object.
let moreSkills = 0;
let theUser = undefined;
for (let user in users) {
  console.log(user, users[user].skills, users[user].skills.length); //[] notation porque es una variable [elem]

  if (users[user].skills.length > moreSkills) {
    moreSkills = users[user].skills.length;
    theUser = user;
  }
}

console.log(
  "the user with more skills is " + theUser + ". Has " + moreSkills + " skills"
);

//Count logged in users, count users having greater than equal to 50 points from the following object
let count = 0;

for (let user in users) {
  console.log(user, users[user].isLoggedIn, users[user].points);

  if (users[user].isLoggedIn === true && users[user].points >= 50) {
    count++;
  }
}
console.log("There are " + count + " users with 50 points or more");

//Find people who are MERN stack developer from the users object
/*una solución de internet para ver más adelante cuando repase .filter .map y destructurin
let mern = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
*/

let mern = [];

for (let user in users) {
  if (users[user].skills.includes("MongoDB", "Express", "React", "Node")) {
    mern.push(user);
  }
}

console.log(mern);

//Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users); //copy object withour modifying original
copyUsers.Laura = {}; //setting new key
console.log("copyWithMe: ", copyUsers);
console.log(Object.keys(copyUsers));

////////////// PRODUCT-OBJECT //////////////
const productos = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

const copyProducts = [...productos]; //copiamos para trabajar sin modificar el original
console.log("copyP-----", copyProducts);

//The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
////////////rate the product
function rateProduct(theobj, producto, quien, puntaje) {
  let yaesta = 0;
  //para saber si el usuario ya ranqueo
  for (let i = 0; i < theobj.length; i++) {
    const current = theobj[i];
    if (current.name === producto) {
      if (current.ratings.length !== 0) {
        for (let j = 0; j < current.ratings.length; j++) {
          if (current.ratings[j].userId === quien) {
            yaesta++;
          }
        }
      }
    }
  }

  //para agregar el ranking si el usuario es nuevo
  if (yaesta >= 1) {
    console.log("El usuario " + quien + " ya rankeo el producto " + producto);
  } else {
    for (let i = 0; i < theobj.length; i++) {
      if (theobj[i].name === producto) {
        theobj[i].ratings.push({ userId: quien, rate: puntaje });
        console.log(
          producto + " ahora tiene los siguientes rates: ",
          Object.entries(theobj[i].ratings)
        );
      }
    }
  }
}

////ARREGLAR QUE COMO EL ARRAY NO ESTÁ VACIO NO PUSHEA AL NEW USER
console.log(rateProduct(copyProducts, "TV", "fg12cy", 4));
console.log(rateProduct(copyProducts, "TV", "laura", 4));
console.log(rateProduct(copyProducts, "Laptop", "laura", 10));
console.log(rateProduct(copyProducts, "Laptop", "laura", 10));
console.log(rateProduct(copyProducts, "Laptop", "santiago", 6));
console.log(rateProduct(copyProducts, "TV", "santiago", 6));
console.log(rateProduct(copyProducts, "mobile phone", "laura", 8));
console.log(rateProduct(copyProducts, "mobile phone", "zwf8md", 3));

console.log("///////////////////");
console.log("///////// RATING //////////");

/////////calculate the average rating

function averageRating(theobj, producto) {
  let theaverage = 0;
  let dividido = 0;

  for (let i = 0; i < theobj.length; i++) {
    if (theobj[i].name === producto) {
      for (let j = 0; j < theobj[i].ratings.length; j++) {
        theaverage += theobj[i].ratings[j].rate;
        dividido++;
      }
    }
  }
  console.log(theaverage, dividido);
  return "the average of " + producto + " is " + theaverage / dividido;
}

console.log(averageRating(copyProducts, "Laptop"));
console.log(averageRating(copyProducts, "TV"));
console.log(averageRating(copyProducts, "mobile phone"));

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(theobj, producto, quien) {
  let resultado = "";
  for (let i = 0; i < theobj.length; i++) {
    if (theobj[i].name === producto) {
      if (
        theobj[i].likes.length === 0 &&
        theobj[i].likes.includes(quien) === false
      ) {
        theobj[i].likes.push(quien);
        resultado = quien + " ha dado like";
        console.log(theobj[i].likes);
      } else {
        theobj[i].likes.splice(theobj[i].likes.indexOf(quien), 1);
        resultado = quien + " ha quitado su like";
        console.log(theobj[i].likes);
      }
    }
  }
  return resultado;
}

console.log(likeProduct(copyProducts, "TV", "laura"));
console.log(likeProduct(copyProducts, "TV", "laura"));

console.log(likeProduct(copyProducts, "mobile phone", "santi"));
console.log(likeProduct(copyProducts, "mobile phone", "santi"));
console.log(likeProduct(copyProducts, "mobile phone", "santi"));
