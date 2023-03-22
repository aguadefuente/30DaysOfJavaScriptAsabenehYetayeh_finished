console.log("apuntes functions")
//Function with unlimited number of parameters: es distinto en => 
/*
a) Regular function: 
A function declaration provides a function scoped ARGUMENT ARRAY LIKE
OBJECT. Any thing we passed as argument in the function 
can be accessed from arguments object inside the functions
*/
function sumAll() {
    console.log(arguments)
   }
   
   sumAll(1, 2, 3, 4) //Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]

   function sumAllNums() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
  }
  
  console.log(sumAllNums(1, 2, 3, 4)) // 10
  console.log(sumAllNums(10, 20, 13, 40, 10)) // 93

/*b) Arrow funtion: Arrow function does not have the function scoped arguments object.
To implement a function which takes unlimited number of arguments we use 
SPREAD OPERATOR followed by any parameter name
*/ 
const sumAllSpread = (...args) => {
    // console.log(arguments), arguments object not found in arrow function
    // instead we use a parameter followed by spread operator (...)
    console.log(args)
   }
   
   sumAllSpread(1, 2, 3, 4) //[1, 2, 3, 4]

   const sumAllNumSpread = (...args) => {
    let sum = 0
    for (const element of args) {
      sum += element
    }
    return sum
  }
  
  console.log(sumAllNumSpread(1, 2, 3, 4)) // 10

//Self invoking function: are anonymous functions which do not need to be called to return a value
let squaredNum = (function(n) {
 return n * n
})(10)
  
console.log(squaredNum) //100

//default parameter
function greetings(name = 'Peter') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
}

/*lo mismo con arrow function
const greetings = (name = 'Peter') => {
  let message = name + ', welcome to 30 Days Of JavaScript!'
  return message
}
*/
  
console.log(greetings())
console.log(greetings('Asabeneh'))

//EJERCICIOS
//level 1
/*
Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2
Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more
*/

const bodyBMI = (weight, height) => {
    const bmi = weight/(Math.pow(height/100, 2))
    const redondeando = bmi.toFixed(2)
    
    if(redondeando < 18.5){
        return "Your bmi is "+ redondeando + ". You are underweight"
    }
    else if(redondeando >= 18.5 && redondeando <= 24.9){
        return "Your bmi is "+ redondeando + ".  Your weight is normal"
    }
    else if(redondeando >= 25 && redondeando <= 29.9){
        return "Your bmi is "+ redondeando + ". Your are overweight"
    }
    else{
        return "Your bmi is "+ redondeando + ". You are obese"
    }
}

console.log(bodyBMI(47, 158))
console.log(bodyBMI(74, 168))
console.log(bodyBMI(70, 168))

//Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer
const checkSeason = (month) =>  {
    switch(month){
        case "Enero":
        case "Febrero":
        case "Marzo":
      return "Verano";
      break;

      case "Abril":
      case "Mayo":
      case "Junio":
        return "Otoño";
       break;
    }
}

console.log(checkSeason("Marzo"))
console.log(checkSeason("Junio"))


//Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
const findMax = (...arg) => {
    let max = 0
    for (const element of arg) {
      if(max < element){
        max = element
      }
    }
    return max
} 
console.log(findMax(0, 10, 5)) //10
console.log(findMax(0, -10, -2)) //0

//level 2
//Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
function showDateTime(){
    //get local machine date time
    const date = new Date();

    //get the date as a string
    const getDate = date.toLocaleString();

    return getDate 
}

console.log(showDateTime()) //03/22/2023 01:38:23 PM

function showDateTime2(){
let d = new Date();

let datestring = d.getDate()  + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " +
d.getHours() + ":" + d.getMinutes();

return datestring
}

console.log(showDateTime2()) //22/3/2023 13:38

//Declare a function name swapValues. This function swaps value of x to y.
//primer modo: temporary variable
function swapValues(num1, num2){
let x = num1
let y = num2
console.log(x, "-", y)
let z 

z = x
x = y
y = z

return x + ' - ' + y
}

console.log(swapValues(3, 4)) // x => 4, y=>3
console.log(swapValues(4, 5)) // x = 5, y = 4

//segundo modo: addition and difference
let a = 1;
let b = 2;
console.log(a, b)
a = a + b;
b = a - b;
a = a - b;
console.log(a, b)

//Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number
function evensAndOdds(integer){
let odds = 0;
let evens = 0;

for(let i=0; i<=integer; i++){
    if(i%2 === 0){
        evens++
    } else {
        odds++
    }
}
return "The number of odds are " + odds + ".The number of evens are " + evens
}

console.log(evensAndOdds(10));
console.log(evensAndOdds(100));

//Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
//ver: https://sebhastian.com/shuffle-array-javascript/

function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
}
  
let numbers = [1, 2, 3, 4, 5];
console.log(shuffle(numbers));
  
let letters = ["a", "b", "c", "d", "e"];
console.log(shuffle(letters));

//Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(n){
    let total = 1
    
    for(let i=1; i<=n; i++){
        total *= i
    }
    return total
    }

console.log(factorial(5))
console.log(factorial(8))

//Call your function isEmpty, it takes a parameter and it checks if it is empty or not
//no checkea [{}, {}] o {"": 0}

console.log("{'': 0}", isEmpty({"": 0}))
function isEmpty(val){
    return (
        val === undefined //check for undefined
        || val === null //check for null
        || val.length <= 0 //check for empty string or array
        || typeof val === 'object' && Object.keys(val).length === 0 //check empty object or array
        ) 
        ? true : false;
}

console.log("no param", isEmpty()) //true
console.log("''", isEmpty("")) //true
console.log("[]", isEmpty([])) //true
console.log("{}", isEmpty({})) //true
console.log("null", isEmpty(null)) //true
console.log("undefined", isEmpty(undefined)) //true
 
console.log(isEmpty("hola")) //false
console.log(isEmpty([1,2]))//false
console.log(isEmpty({nombre: "laura", edad: 40}))//false
console.log(isEmpty(2)) //false
console.log(isEmpty(2+3)) //false

//Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(arr){
    let result = 0
    let falsyItems = 0
  for(let items of arr){
    if(typeof items === "number" && !isNaN(items)){
        result += items
    } else {
        falsyItems++
    }
  }
  return result + " es la suma de los items. Y " + falsyItems + " items no son números o son NaN"
}

const elArray = ["", 2, 3, 4, NaN, false, "Laura", null, -3, 0]
console.log(sumOfArrayItems(elArray))

//Write a functions which checks if all items are unique in the array
function createUnique(arr){
    let checkUnique = []
    let notUnique = []
    for(let elem of arr){
        if(checkUnique.indexOf(elem)===-1){
            checkUnique.push(elem)
        } else {
            notUnique.push(elem)
        }
    }
    if(notUnique.length > 0){
        return "The array has no unique elements"
        } else {
        return "The array has unique elements"
    }
    
}

console.log(createUnique([1,2,3,3,4,1,6,4]))
console.log(createUnique([1,2,3,4,6]))

//Write a function which checks if all the items of the array are the same data type.
function isUniform(arra){
    var k=arra[0];
    for (var i = 0; i < arra.length; i++) {
        while(k!==arra[i]){
            return false;
        }
    }
    return true;
}

console.log(isUniform(["laura", 2, [1, 2]]))
console.log(isUniform(["laura", "santiago"]))

//JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable


//Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
