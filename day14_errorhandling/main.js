/*Some times you will get a runtime error when you try to access 
an undefined variable or call undefined function 

try {
  // code that may throw an error
} catch (err) {
  // code to be executed if an error occurs
} finally {
  // code to be executed regardless of an error occurs or not
}


TRY: wrap suspicious code that may throw an error in try block
CATCH: used to log an error or display specific messages to the user.
FINALLY: will always be executed regardless of the occurrence of an error. 
The finally block can be used to complete the remaining task or reset variables
THROW: defines a custom error. The technical term for this is: JavaScript will throw an exception (throw an error).
*/

try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
  } catch (err) {
    console.log(err);
  }
  //ReferenceError: fistName is not defined
  
  try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
  } catch (err) {
    console.error(err); // we can use console.log() or console.error()
  } finally {
    console.log("In any case I will be executed");
  }
  //ReferenceError: fistName is not defined In any case it  will be executed
  
  try {
    let lastName = "Yetayeh";
    let fullName = fistName + " " + lastName;
  } catch (err) {
    console.log("Name of the error", err.name);
    console.log("Error message", err.message);
  } finally {
    console.log("In any case I will be executed");
  }
  /*
  Name of the error ReferenceError
  Error message fistName is not defined
  In any case I will be executed
  */

  const throwErrorExampleFun = (num) => {
    let message
    let x = num
    try {
      if (num == '') throw 'empty'
      if (isNaN(num)) throw 'not a number'
      num = Number(num)
      if (num < 5) throw 'too low'
      if (num > 10) throw 'too high'
    } catch (err) {
      console.log(err)
    }
  }
  console.log(throwErrorExampleFun(""))
  console.log(throwErrorExampleFun(10))
  console.log(throwErrorExampleFun("g"))


///
  
  //////////////////////   ERROR TYPES   //////////////////////
  //ReferenceError: An illegal reference. A variable that has not been declared.
  let firstName = "Asabeneh";
  let fullName = firstName + " " + lastName; //Uncaught ReferenceError: lastName is not defined
  console.log(fullName);
  
  //SyntaxError: 
  let square = 2 x 2 //unexpected identifier x
  console.log(square)
  
  //TypeError:
  let num = 10
  console.log(num.toLowerCase()) //Uncaught TypeError: num.toLowerCase is not a function