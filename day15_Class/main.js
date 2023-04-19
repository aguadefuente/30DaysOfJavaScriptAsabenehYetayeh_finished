console.info("Apuntes");
/*
Everything in JavScript is an object. 
We create class to create an object. 
A Class is like an object constructor, or a "blueprint" for creating objects
We instantiate a class to create an object
##The class defines attributes and the behavior of the object, 
##while the object, on the other hand, represents the class
Creating an object from a class is called class INSTANTIATION
*/

//Defining a Class -> CamelCase and {}
class Person {
  // code goes here
  constructor(firstName, lastName, country = "Argentina") {
    //KEYWORD CONSTRUCTOR is a builtin function which allows as to create a blueprint for our object. Inside the parenthesis we pass the properties of the object as parameter
    console.log(this); // Check the output from here output -> Person {}
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country; //with default value in the constructor parameters- en caso que en la instantiación no definamos su valor
    this.profession = "software developer"; //this is a property with initial value (it is not in the constructor parameters, it will always be the same)
    this.skills = [];
  }
  getFullName() {
    //this is a class method: a function inside a class
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }

  get getProfession() {
    //getter: KEYWORD GET followed by a function
    return this.profession;
  }

  set setSkill(skill) {
    //setter: KEYWORD SET followed by a function
    this.skills.push(skill);
  }

  get getSkills() {
    //getter: KEYWORD GET followed by a function
    return this.skills;
  }

  //STATIC KEYWORD: defines a static method for a class. Static methods are not called on instances of the class. They are called on the class itself
  static showDateTime() {
    //These are often utility functions
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    let dateMonthYear = date + "." + month + "." + year;
    let time = hours + ":" + minutes;
    let fullTime = dateMonthYear + " " + time;
    return fullTime;
  }
}
const person = new Person("Laura", "Leni"); //instantiation -> we use KEYWORD NEW
console.log(person); //output -> Person { firstName: 'Laura', lastName: 'Leni', country: 'Argentina', profession: 'software developer' }

const person1 = new Person();
console.log(person1); //output -> Person { firstName: undefined, lastName: undefined, country: 'Argentina', profession: 'software developer'}

console.log(person.getFullName()); // Laura Leni
console.log(person1.getFullName());

/////GETTER: allow us to access value from the object -
console.log(person.getProfession); //no la llamamos con () //software developer

/////SETTER: allow us to modify the value of certain properties
person.setSkill = "HTML";
person.setSkill = "CSS";
person.setSkill = "JScript";

console.log(person.getSkills); //[ 'HTML', 'CSS', 'JScript' ]
console.log(person.skills); //[ 'HTML', 'CSS', 'JScript' ]

//STATIC METHOD
console.log(Person.showDateTime()); //they are called on the class itself - Vemos que dice Person

////INHERITANCE
//crearemos una clase Student desde la clase Person
class Student extends Person {
  saySomething() {
    console.log("I am a child of the person class");
  }
}
const student1 = new Student("Santiago", "Bandiera", "Finland");
console.log(student1);
console.log(student1.saySomething());
console.log(student1.getFullName());
