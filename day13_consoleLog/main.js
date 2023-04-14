console.log("30 Days of JavaScript");

//sustituir valores en console.log con %s
console.log("%s %s of JavaScript", 30, "Days");
console.log("%s Days of %s", 10, "Yoga");

//para console.log con stilo css usamos %c
console.log("%cLaura", "color:red"); //acá no lo voy a ver porque tengo modo oscuro/ verlo en la consola de google

console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c", //varias lineas usamos %c...%c
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
);

//console.table()
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
console.table(countries);

const users = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];
console.table(users);

//console.info
console.info("30 Days Of JavaScript challenge is trending on Github");

//console.group
const names2 = ["Asabeneh", "Brook", "David", "John"];
const countries2 = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];
const user2 = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
const users2 = [
  {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
  },
  {
    name: "Eyob",
    title: "Teacher",
    country: "Sweden",
    city: "London",
    age: 25,
  },
  {
    name: "Asab",
    title: "Instructor",
    country: "Norway",
    city: "Oslo",
    age: 22,
  },
  {
    name: "Matias",
    title: "Developer",
    country: "Denmark",
    city: "Copenhagen",
    age: 28,
  },
];

console.group("Names");
console.log(names2);
console.groupEnd();

console.group("Countries");
console.log(countries2);
console.groupEnd();

console.group("Users");
console.log(user2);
console.log(users2);
console.groupEnd();

//console.clear() ME LIMPIA LA CONSOLA!!!
//console.clear();
