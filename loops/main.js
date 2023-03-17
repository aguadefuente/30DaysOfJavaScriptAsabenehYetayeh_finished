console.log("apuntes loop")
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
*/









//Use for loop to iterate from 0 to 100 and print only even numbers

//Use for loop to iterate from 0 to 100 and print only odd numbers

//Use for loop to iterate from 0 to 100 and print only prime numbers

//Use for loop to iterate from 0 to 100 and print the sum of all numbers: "The sum of all numbers from 0 to 100 is 5050"
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds: "The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500"
//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. 
//Print sum of evens and sum of odds as array: [2550, 2500]

//Develop a small script which generate array of 5 random numbers

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

//Develop a small script which generate a six characters random id: 5j2khz

/////////LEVEL 2


/////////LEVEL 3