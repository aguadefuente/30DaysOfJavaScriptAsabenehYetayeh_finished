const arr = [
    {
    name: "laura",
    mascotas: [
        {name: "Taldo", edad: 15}, 
        {name: "Domingo", edad: 14}, 
        {name: "Indra", edad: 3}]
    },
    {
    name: "santiago",
    mascotas: [
        {name: "Indra", edad: 3}] 
    }
]

function estaEnLista(nuevo){
    let cuenta = 0
    //para contar si ya está en la lista
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        for (let j = 0; j < current.mascotas.length; j++) {
            if(current.mascotas[j].name === nuevo){
                cuenta++
            } 
        }
    }

    console.log("cuenta", cuenta)

    //para agregar la mascota
    if(cuenta >= 1){
        console.log(nuevo + " ya está en la lista")
    } else {
        for (let y = 0; y < arr.length; y++) {
            const current = arr[y];
            current.mascotas.push({name: nuevo})
            console.log(nuevo + " ha sido agregado")
        }
    }

    //para imprimir los datos
   console.log("1", arr[0].mascotas, "2", arr[1].mascotas)
}

console.log(estaEnLista("Taldo"))
console.log(estaEnLista("patricio"))
console.log(estaEnLista("Domingo"))
console.log(estaEnLista("Igor"))