console.log("ejercicios de prueba");

const paises = [
  { name: "Argentina" },
  { name: "Chile" },
  { name: "Brasil" },
  { name: "Bolivia" },
  { name: "Peru" },
];

console.log(paises.length);

let letras = [];
paises.forEach((pais) => letras.push(pais.name.substring(0, 1)));
console.log(letras);
