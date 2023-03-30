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

function estaEnLista(theObj, nuevo, quien, age) {
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
//console.log(estaEnLista(arr, "Domingo", "Santiago"))
estaEnLista(arr, "Igor", "Santiago");
estaEnLista(arr, "Gallinas varias", "Laura");

estaEnLista(arr, "Taldo", "Laura", 10)

/*PARA despues

//para actualizar o agregar la edad
if(cuenta === 0 || cuenta >= 1){
    for (let i = 0; i < theObj[i].length; i++) {
        for (let j = 0; j < theObj[i].mascotas.length; j++) {
            if (
              theObj[i].mascotas[j].name === nuevo &&
              (theObj[i].mascotas[j].edad !== age ||
                theObj[i].mascotas[j].edad === undefined)
            ) {
              theObj[i].mascotas[j].edad = age
              console.log(
                "chusmeando: ",
                Object.entries(theObj[i].mascotas[j])
                );
            }
          }
        }
        console.log(nuevo + " tiene " + age);
        
    }
*/