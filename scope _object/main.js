console.log("apuntes scope")
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
  getArea: function() { //a function is an object methos
    return Math.pow((this.base * this.altura), 2) //this refers to the object itself
  }
}
console.log(triangle)
console.log(triangle.color) //accession .
console.log(triangle["triangle-name"]) //accessing []
console.log(triangle.getArea())

triangle.color = "blue" //changing a new keys - objects are mutable
triangle.border = "solid-black" //setting new keys
console.log(triangle.color)
console.log(triangle)

//OBJECT METHODS
//Object.assign: To copy an object without modifying the original object
const copyTriangle = Object.assign({}, triangle)
console.log("copy", copyTriangle)

//Object.keys: To get the keys or properties of an object as an array
let keys = Object.keys(triangle)
console.log(keys)

//Object.values:To get values of an object as an array
let values = Object.values(triangle)
console.log(values)

//Object.entries:To get the keys and values in an array
let key_values = Object.entries(triangle)
console.log(key_values)

//hasOwnProperty: To check if a specific key or property exist in an object
console.log(triangle.hasOwnProperty('name'))
console.log(triangle.hasOwnProperty('color'))

/////////////////////////////// EJERCICIOS ////////////////////////////
////////////// USER-OBJECT //////////
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

//Find the person who has many skills in the users object.
let moreSkills = 0
let theUser = undefined
for(let user in users){
  console.log(user, users[user].skills, users[user].skills.length) //[] notation porque es una variable [elem]
  
  if(users[user].skills.length > moreSkills){
    moreSkills = users[user].skills.length
    theUser = user
  }
}

console.log("the user with more skills is " + theUser + ". Has " + moreSkills + " skills") 

//Count logged in users, count users having greater than equal to 50 points from the following object
let count = 0

for(let user in users){
  console.log(user, users[user].isLoggedIn  ,users[user].points) 
  
  if(users[user].isLoggedIn === true && users[user].points >= 50){
    count++
  }
}
console.log("There are " + count + " users with 50 points or more")

//Find people who are MERN stack developer from the users object
/*una solución de internet para ver más adelante cuando repase .filter .map y destructurin
let mern = Object.entries(users).filter(([_, user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
*/

let mern = []

for(let user in users){
   
  if(users[user].skills.includes("MongoDB", "Express", "React", "Node")){
    mern.push(user)
  }
}

console.log(mern)

//Set your name in the users object without modifying the original users object
const copyUsers = Object.assign({}, users) //copy object withour modifying original
copyUsers.Laura = {} //setting new key
console.log("copyWithMe: ", copyUsers)
console.log(Object.keys(copyUsers))

////////////// PRODUCT-OBJECT //////////////
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

//The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
////////////rate the product
/*
console.log("///////////////////")
console.log("///////// RATING //////////")
function rateProduct(theProduct, user_Id, rate){
  const  objLength = products.length

  for (let i = 0; i < objLength; i++) {
    const current = products[i];
    //console.log("current:", i, current)
    const ratingLength = current.ratings.length
    //console.log("ratingLength:", ratingLength)

   
      for (let j = 0; j < ratingLength; j++) {
        if(current.name === theProduct){
        const currentRaiting = current.ratings[j];
        if (currentRaiting.userId === user_Id){
          console.log(`Al usuario ${user_Id} le gustó ${current.name} tanto: ${currentRaiting.rate}`)
        } else if(!("user_Id" in current.ratings[j])) {
          current.ratings[j].push({userId: user_Id})
          console.log(Object.entries(current.ratings))
        }
      }
    }
    
  }
  
}

rateProduct('mobile phone', 'fg12cy');
rateProduct('mobile phone', 'zwf8md');
rateProduct('mobile phone', 'laura', 2);
*/

/////////calculate the average rating
/*
function averageRating(){ 

}
//console.log("Average", averageRating())
*/



//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
/*
function likeProduct(){

}
//console.log("like", likeProduct())
*/




//////////////////// PROBANDO AGARRAR LOS ELEMENTOS //////////////////////////

console.log("///////////////////")
console.log("PROBANDO AGARRAR LOS ELEMENTOS")

console.log(JSON.stringify(products[0].ratings[0].userId))
console.log(JSON.stringify(products[1].ratings))
console.log(JSON.stringify(products[2].ratings))
console.log("key: ", Object.keys(products[2].ratings[0]))
console.log("checking:", products[2].ratings[0].hasOwnProperty("userId"));
console.log("checking2:", !("userId" in products[2].ratings[0]));
console.log("checking3:", ("userId" in products[2].ratings[0]));

console.log(products[0])
console.log(products[0].name)
console.log(products[0].ratings)

products[0].ratings.push({userId: "laura", rate: 5})
console.log("pusheado:", products[0].ratings)
console.log(products[0].ratings[products[0].ratings.length-1]) //products[0].ratings[2]
products[0].ratings.pop()
console.log("POP-", products[0].ratings[products[0].ratings.length-1])

const copyProducts = Object.assign({}, products)
console.log(copyProducts)
console.log(copyProducts[0].ratings)

function ponemosRate(p, usuario, r){
  
 for (let i = 0; i < products.length; i++) {
  const current = products[i];
  if(current.name === p){
    for (let j = 0; j < current.ratings.length; j++) {
      const currentRating = current.ratings[j];
      if(currentRating.userId === usuario ){
        console.log("ese usuario ya existe")
      } else if (currentRating.length === 0 || currentRating.userId !== usuario) {
        current.ratings.push({userId: usuario, rate: r})
        return current.ratings
      }
        
      
    }
  }
 }
 
}

console.log("latv-", ponemosRate('TV', "laura", 5))
console.log("lapc-", ponemosRate('Laptop', "laura", 8))
console.log("latv-", ponemosRate('TV', "santiago", 15))
console.log("latv-", ponemosRate('TV', "fg12cy", 10))
console.log("copy", copyProducts[0].ratings)
console.log("copy", copyProducts[1].ratings)
console.log("copy", copyProducts[2].ratings)