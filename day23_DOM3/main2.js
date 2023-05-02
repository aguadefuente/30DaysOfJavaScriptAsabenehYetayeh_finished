//Ejercicio 2 - Generating the keyboard code code using even listener. The image below.
document.addEventListener("DOMContentLoaded", function (event) {
  //Body
  document.body.style.display = "flex";
  document.body.style.flexDirection = "column";
  document.body.style.gap = "30px";
  document.body.style.alignItems = "center";
  document.body.style.height = "100vh";

  //creamos los elementos que mostrarán las tecla que apretamos
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  document.body.appendChild(titleDiv);
  titleDiv.style.display = "flex";
  titleDiv.style.flexDirectio = "column";
  titleDiv.style.justifyContent = "center";
  titleDiv.style.alignItems = "center";

  const keyDiv = document.createElement("div");
  keyDiv.className = "key";
  document.body.appendChild(keyDiv);
  keyDiv.style.display = "flex";
  keyDiv.style.flexDirectio = "column";
  keyDiv.style.justifyContent = "center";
  keyDiv.style.alignItems = "center";

  const theSecret = document.createElement("p");
  titleDiv.appendChild(theSecret);
  theSecret.innerHTML = ""; //está vacío hasta que se presione la tecla

  const theCode = document.createElement("p");
  keyDiv.appendChild(theCode);
  theCode.innerHTML = ""; //está vacío hasta que se presione la tecla
  theCode.style.color = "green";
  theCode.style.fontWeight = "bold";
  theCode.style.fontSize = "40px";

  //creamos el eventListener "keypress"
  document.body.addEventListener("keypress", (e) => {
    titleDiv.style.boxShadow = "#484851 0px 0px 10px 0px";
    titleDiv.style.padding = "5px";
    titleDiv.style.height = "100px";
    titleDiv.style.width = "200px";
    titleDiv.style.fontSize = "20px";

    theSecret.innerHTML = `You pressed:  <span id="key">${e.key}</span>`; //event-method .key

    //decoramos la key
    const key = document.querySelector("#key");
    key.style.color = "green";
    key.style.fontSize = "40px";
    key.style.fontWeight = "bold";
  });

  //otro eventListener "keypress" para el charCode
  document.body.addEventListener("keypress", (e) => {
    keyDiv.style.boxShadow = "#484851 0px 0px 10px 0px";
    keyDiv.style.padding = "5px";
    keyDiv.style.height = "100px";
    keyDiv.style.width = "100px";

    theCode.innerHTML = e.charCode; //event method .charCode
  });
});
