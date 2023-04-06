console.log("ejercicios de prueba");

const paises = [
  { name: "Argentina" },
  { name: "Chile" },
  { name: "Brasil" },
  { name: "Bolivia" },
  { name: "Peru" },
];

console.log(paises.length);

////////////////////////////////////////////PROBANDO
//agarro primeras letras
let letras = [];
let cuantas = 0;
paises.forEach((pais) => letras.push(pais.name.substring(0, 1))); //usando substring method
console.log(letras);

let letras2 = [];
let cuantas2 = 0;
paises.forEach((pais) => letras2.push(pais.name[0])); //usando bracket en el string
console.log("letras2", letras2);

//si solo quisiera traerme  las letras usaría map. Pero el ejercicio necesita traiga las letras y la cantidad que ocurren
let letras3 = paises.map((pais) => pais.name[0]);
console.log("letras3", letras3);

//cuento primeras letras

//CONTAR LETRAS
//////////////FOR LOOP
function countLetters(arr) {
  //Create the object which will store the occurrences
  const count = {};

  //Loop over the initial letters of the word
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i].name[0];

    //if the property isn't in the object, it means that the letter is a new one and we'll create this property and assign it the value 1
    if (!count[letter]) {
      count[letter] = 1; //ej) A:1 //adding a value to a key in an object

      //else, it means that the property is already there and we just increment it by 1
    } else {
      count[letter]++; //ej) A:1+1
    }
  }

  return count;
}

console.log("contarletras for loop:", countLetters(paises));

////////////////FOREACH()
console.log("probando contar con foreach() 1");
let contador = {};
paises.forEach((pais) => {
  if (!contador[pais.name[0]]) {
    contador[pais.name[0]] = 1;
  } else {
    contador[pais.name[0]]++;
  }
});
console.log(contador);

//forEach de internet

console.log("probando contar con foreach() 2 operador ternario");
let contador2 = {};
paises.forEach((pais) => {
  contador2[pais.name[0]] = contador2[pais.name[0]]
    ? ++contador2[pais.name[0]]
    : 1;
});
console.log(contador2);

////////////////////////////////////REDUCE() - sacado de la web
const names = paises.reduce((v1, v2) => {
  const startLetter = v2.name[0];
  debugger; //esta palabra es para debuggear
  v1[startLetter] = (v1[startLetter] || 0) + 1;
  return v1;
}, {});

console.log(names);

//////////////////////////// MODOS DE ITERAR OBJETOS ///////////////////////
let perro = {
  nombre: "Scott",
  color: "Negro",
  macho: true,
  edad: 5,
};

///////////// con FOR-IN-LOOP
console.log("with for-in-loop");
for (let clave in perro) {
  console.log(perro[clave]);
}
////////// object.keys() - nos retorna un array con las keys iterable con FOR-LOOP
let claves = Object.keys(perro); //[ 'nombre', 'color', 'macho', 'edad' ]
console.log("object.keys + for-loop");
for (let i = 0; i < claves.length; i++) {
  const current = claves[i];
  console.log(perro[current]);
}

//////////// Object.values() return un array con las values iterable con FOR-LOOP
let valores = Object.values(perro); //[ 'Scott', 'Negro', true, 5 ]
console.log("object.values + for-loop");
for (let i = 0; i < valores.length; i++) {
  const current = valores[i];
  console.log(current);
}

//////////////////con Object.entries()
/*
console.log("object.entries:", Object.entries(perro));
return array of arrays with two elementos cada uno (1 key, 2 value)
[
  [ 'nombre', 'Scott' ],
  [ 'color', 'Negro' ],
  [ 'macho', true ],
  [ 'edad', 5 ]
]
*/

//mas FOR-OF
console.log("Object.entries() + with for-of");
for (const [key, value] of Object.entries(perro)) {
  console.log(value);
}
//////////////////

/////+ FOREACH()
console.log("Object.entries() + with forEach");
Object.entries(perro).forEach(([key, value]) => {
  console.log(value);
});
