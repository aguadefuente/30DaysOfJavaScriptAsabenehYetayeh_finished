const arr = [
  {
    name: "Laura",
    mascotas: [
      { name: "Taldo", edad: 15 },
      { name: "Domingo", edad: 14 },
      { name: "Indra", edad: 3 },
    ],
  },
  {
    name: "Santiago",
    mascotas: [{ name: "Indra", edad: 3 }],
  },
];

console.log("LAURA", Object.entries(arr[0].mascotas));
console.log("SANTIAGO", Object.entries(arr[1].mascotas));
console.log("prueba nombre", arr[0].name);
//console.log("PUSH-", arr[0].mascotas.push({name: "una mascota de prueba"}) )
console.log("true/false", arr[0].name === "Laura"); //true

console.log("///////////////////////////");
console.log("ACTUALIZAR MASCOTA");
function estaEnLista(theObj, nuevo, quien) {
  let cuenta = 0;
  //para contar si la mascota ya está en la lista
  for (let i = 0; i < theObj.length; i++) {
    const current = theObj[i];

    for (let j = 0; j < current.mascotas.length; j++) {
      if (current.mascotas[j].name === nuevo) {
        cuenta++;
      }
    }
  }

  console.log("cuenta", cuenta);

  //para agregar a la mascota
  if (cuenta >= 1) {
    console.log(nuevo + " ya está en la lista de " + quien);
  } else {
    for (let i = 0; i < theObj.length; i++) {
      if (theObj[i].name === quien) {
        theObj[i].mascotas.push({ name: nuevo });
        console.log(
          "chusmeando. " + quien + " tiene: ",
          Object.entries(theObj[i].mascotas)
        );
      }
    }
  }
}

estaEnLista(arr, "Taldo", "Laura");
estaEnLista(arr, "Taldo", "Santiago");
estaEnLista(arr, "patricio", "Santiago");
estaEnLista(arr, "Domingo", "Laura");
//estaEnLista(arr, "Domingo", "Santiago")
estaEnLista(arr, "Igor", "Santiago");
estaEnLista(arr, "Gallinas varias", "Laura");

console.log("///////////////////////////");
console.log("ACTUALIZAR LA EDAD");
//para actualizar o agregar la edad
function actualizarEdad(obj, quien, mascota, age) {
  for (let i = 0; i < obj.length; i++) {
    if (obj[i].name === quien) {
      for (let j = 0; j < obj[i].mascotas.length; j++) {
        if (
          obj[i].mascotas[j].name === mascota &&
          (obj[i].mascotas[j].edad !== age ||
            obj[i].mascotas[j].edad === undefined)
        ) {
          obj[i].mascotas[j].edad = age;
          console.log(
            quien + ": " + "La edad de " + mascota + " ahora es " + age
          );
          return Object.entries(obj[i].mascotas);
        }
      }
    }
  }
}

console.log(actualizarEdad(arr, "Laura", "Domingo", 13));
console.log(actualizarEdad(arr, "Santiago", "patricio", 4));
console.log(actualizarEdad(arr, "Laura", "Domingo", 14));

console.log("/////////////////////////////////");
console.log("PROMEDIO EDAD");

function promedioEdad(dequien) {
  let resultado = 0;
  let division = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === dequien) {
      for (let j = 0; j < arr[i].mascotas.length; j++) {
        if (arr[i].mascotas[j].edad !== undefined) {
          resultado += arr[i].mascotas[j].edad;
          division++;
        }
      }
    }
  }
  console.log(resultado, division);
  return (
    "El promedio de las mascotas de " + dequien + " es " + resultado / division
  );
}

console.log(promedioEdad("Laura"));
console.log(promedioEdad("Santiago"));
