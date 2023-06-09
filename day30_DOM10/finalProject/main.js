//agarramos los elementos
console.log("countries-data-cards");

const countrylength = countrydata.length;
console.log(countrylength);

const exter = document.querySelector(".external-container");

function create() {
  for (let i = 0; i < countrylength; i++) {
    let current = countrydata[i];

    const container = document.createElement("div");
    container.className = "container";
    exter.appendChild(container);

    const flagcont = document.createElement("div");
    flagcont.className = "flagimg";
    container.appendChild(flagcont);

    const theimg = document.createElement("img");
    flagcont.appendChild(theimg);
    theimg.src = current.flag;

    const cname = document.createElement("p");
    container.appendChild(cname);
    cname.textContent = current.name.toUpperCase();
    cname.style.color = "orange";
    cname.style.textAlign = "center";

    const cap = document.createElement("p");
    container.appendChild(cap);
    cap.textContent = `capital: ${current.capital}`;

    const lng = document.createElement("p");
    container.appendChild(lng);
    lng.textContent = `language: ${current.languages[0]}`;

    const popu = document.createElement("p");
    container.appendChild(popu);
    popu.textContent = `population: ${current.population}`;
  }
}

create();

/*
flagimg.src = countrydata[0].flag;
cname.textContent = countrydata[0].name;
cap.textContent = countrydata[0].capital;
lng.textContent = countrydata[0].languages[0];
popu.textContent = countrydata[0].population;
*/
