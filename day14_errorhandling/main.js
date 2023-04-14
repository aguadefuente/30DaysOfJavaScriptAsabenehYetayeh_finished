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
  
  ///Error Types
  //ReferenceError: An illegal reference has occurred. Is thrown if we use a variable that has not been declared.
  let firstName = "Asabeneh";
  let fullName = firstName + " " + lastName; //Uncaught ReferenceError: lastName is not defined
  console.log(fullName);
  
  //SyntaxError: A syntax error has occurred
  let square = 2 x 2 //unexpected identifier x
  console.log(square)
  
  //TypeError: A type error has occurred
  let num = 10
  console.log(num.toLowerCase()) //Uncaught TypeError: num.toLowerCase is not a function