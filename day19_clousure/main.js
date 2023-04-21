console.info("Clousure");

//If inner function access the variables of outer function then it is called closure.
//JavaScript supports nested functions. Nested functions have access to the scope "above" them.
//A closure is a function having access to the parent scope, even after the parent function has closed.

function outerFunction() {
  let count = 0;
  function innerFunction() {
    count++;
    return count;
  }

  return innerFunction;
}

const innerFunc = outerFunction();

console.log(innerFunc());
console.log(innerFunc());
console.log(innerFunc());

/* si lo llamara como abajo y poniendo en la función return innerFunction() siempre me daría 1 porque el valor se resetea
console.log(outerFunction());
console.log(outerFunction());
*/

//otro ejemplo con self-invoking function
const add = (function () {
  let counter = 0;
  return function () {
    counter += 10;
    return counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());

//otro ejemplo con dos innerFunctions
function outerFunc() {
  let count = 100;
  function plusOne() {
    count++;
    return count;
  }
  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}
const innerFun = outerFunc();

console.log(innerFun.plusOne);
console.log(innerFun.minusOne);
