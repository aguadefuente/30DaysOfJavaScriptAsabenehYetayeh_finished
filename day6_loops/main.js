console.log("apuntes loop")

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//////////LEVEL 1
//Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let i=0; i<=10; i++){
    console.log("for", i)
}

let j = 0;
while(j<=10){
    console.log("while:", j)
    j++
}

let y = 0;
do{
    console.log("doWhile:", y)
    y++
} while(y<=10)

//Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let i = 10; i>=0; i--){
    console.log("for", i)
}

let g = 10;
while(g>=0){
    console.log("while:", g)
    g--
}

let z = 10;
do{
    console.log("doWhile:", z)
    z--
} while(z>=0)

//Iterate 0 to n using for loop
function iterate(n){
    for(let i=0; i<=n; i++){
        console.log(i)
    }
}

iterate(6)
iterate(2)

/*Write a loop that makes the following pattern using console.log()
#
##
###
####
#####

nested for loop: external loop will make the columns - internal loop the rows
We need to run an external loop for 'n' time 
while the internal loop runs for 1 time in the first execution, 
2 times in the second execution, and so on till 'n' times
*/

let columns = 5;
let pattern = "";
for(let i=1; i<=columns; i++){
    for(let rows = 0; rows < i; rows++){
        pattern += "*"
    }
    pattern += "\n"; //regEx new row
}

console.log(pattern)

/*Use loop to print the following pattern
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
*/

for(let i=0; i<=10; i++){
    console.log(`${i} x ${i} = ${i * i}`)
}

/*Using loop print the following pattern
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000

Me encantó! Ayuda Gordillo!!! Debuggearlo siempre que necesitemos recordar como funciona
 */
console.log("-----------------------------")
let columnas = 10;
for(let i=0; i<=columnas; i++){
    let result = []
    for(let j=0; j<3; j++){
       result.push(Math.pow(i, j+1))
    }
    console.log(result.join('\t')) //\t es tab - un espacio hacia el lado
}

//Use for loop to iterate from 0 to 100 and print only even numbers
for(let i= 0; i<=50; i++){
    console.log(i*2)
} //este fue mi intento

for(let i= 0; i<=100; i+=2){
    console.log(i)
} //este es el ejemplo del tutorial

//Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i= 1; i<=100; i+=2){
    console.log(i)
}

//Use for loop to iterate from 0 to 100 and print only prime numbers


//Use for loop to iterate from 0 to 100 and print the sum of all numbers: "The sum of all numbers from 0 to 100 is 5050"
let resultado = 0
for(let i = 0; i<=100; i++){
 resultado += i
}
console.log("The sum of all numbers from 0 to 100 is " + resultado)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds: "The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500"
let oddNums = 0;
let evenNums = 0;
for(let i = 0; i<=100; i++){
    if(i%2 === 0){
        evenNums += i
    } else{
        oddNums += i
    }
} 
console.log("The sum of all even numbers is " + evenNums + ". And the sum of all odd numbers is " + oddNums)

//Print sum of evens and sum of odds as array: [2550, 2500]
let numArr = []
numArr[0] = evenNums
numArr[1] = oddNums
console.log(numArr)

//Develop a small script which generate array of 5 random numbers
const randomArr = []
for(let i = 0; i<=5; i++){
    randomArr.push(Math.floor((Math.random() * 10) + 1)) //ramdon del 0 al 10
   }
console.log("randomArr", randomArr)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
const uniqueRandomArr = []
for(let i = 0; i<=5; i++){
    let unique = Math.floor((Math.random() * 10) + 1)
    if(uniqueRandomArr.indexOf(unique) == -1){
        uniqueRandomArr.push(unique) 
    }
}
console.log("uniqueRandomArr", uniqueRandomArr)

//Develop a small script which generate a six characters random id: 5j2khz
const randomId = function(length) {
    return Math.random().toString(36).substring(2, length+2);
};

console.log("six ramdon:", randomId(6))

/////////LEVEL 2
//Develop a small script which generate any number of characters random id

function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

console.log(makeid(5));
console.log(makeid(10));
console.log(makeid(20));

//Write a script which generates a random hexadecimal number.
const getRanHex = size => {
    let result = [];
    let hexRef = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
  
    for (let n = 0; n < size; n++) {
      result.push(hexRef[Math.floor(Math.random() * 16)]);
    }
    return result.join('');
  }
  
  console.log("hexaNum", getRanHex(6));
  console.log("hexaNum",getRanHex(12));
  console.log("hexaNum",getRanHex(3));

  //otro ejemplo
  function genHexString(len) {
    let output = '';
    for (let i = 0; i < len; ++i) {
        output += (Math.floor(Math.random() * 16)).toString(16);
    }
    return output;
}

console.log("hexaNum2", genHexString(6))
console.log("hexaNum2", genHexString(12))

//Write a script which generates a random rgb color number.
function colorGen() {
    const r = Math.floor(Math.random() * 256); //0 a 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

console.log("rgb_color:", colorGen())

//using the above countries array, create the following new array ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
const countryArr = []
for(const country of  countries){
    countryArr.push(country.toUpperCase())
}
console.log(countryArr)

//Using the above countries array, create an array for countries length
const countryLengthArr = []
for(const country of  countries){
    countryLengthArr.push(country.length)
}
console.log(countryLengthArr)

/*
Use the countries array to create the following array of arrays
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
*/

const arrayOfArrays = []
for(let i=0; i<countries.length; i++){
    const arrayInterno = [];
    
       arrayInterno.push(countries[i])
       arrayInterno.push(countries[i].toUpperCase().slice(0,3))
       arrayInterno.push(countries[i].length)

    arrayOfArrays.push(arrayInterno)
}

console.log(arrayOfArrays)


//check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'
//['Finland','Ireland']
const land = []
const noland = []
for(const pais of countries){
    if(pais.includes("land") === true){
        land.push(pais)
    } else {
        noland.push(pais)
    }
}

console.log(land)
console.log(noland.slice(0, noland.length-1).join(",") + " and " + noland.slice(noland.length-1).join(",") + " are without land")

//check if there is a country or countries end with a substring 'ia' //['Albania', 'Bolivia','Ethiopia']
const aiArr = []
for(const pais of countries){
    if(pais.match("ia") !== null){
        aiArr.push(pais.match("ia").input)
    }
}
console.log(aiArr)

//find the country containing the biggest number of characters. Ethiopia
let theBiggest = countries[0]
for(const pais of countries){
    if(pais.length >= theBiggest.length){
    theBiggest = pais
    }
}
console.log(theBiggest)

//find the country containing only 5 characters. ['Japan', 'Kenya']
let fiveChar = []
for(const pais of countries){
    if(pais.length === 5){
    fiveChar.push(pais)
    }
}
console.log(fiveChar)

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
let mern = ""
for(const lang of mernStack){
    mern += lang.toUpperCase().slice(0,1)
}
console.log(mern)

//reverse the order using loop without using a reverse method.
const fruitArr  = ['banana', 'orange', 'mango', 'lemon']
const reverseFruit = []
for(const fruit of fruitArr){
   reverseFruit.unshift(fruit)
}
console.log(reverseFruit)

//Print all the elements of fullStack array
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]

for(let i=0; i<fullStack.length; i++){
    for(let j=0; j<fullStack[i].length; j++){
        console.log(fullStack[i][j])
    }
}

/////////LEVEL 3

//Copy countries array(Avoid mutation)
//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedMern
const copyArr = [...mernStack]
console.log(copyArr)
const sortedMern = copyArr.sort()
console.log(sortedMern)
console.log(mernStack)

