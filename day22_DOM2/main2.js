//Use the countries array to display all the countries
document.addEventListener("DOMContentLoaded", function (event) {
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ];

  //le ponemos contenido al h3
  const totalContries = document.querySelector("#total-countries");
  totalContries.textContent = "Total Number of countries: " + countries.length;
  totalContries.style.margin = "2px auto";

  //estilizamos los titulos
  const maintitle = document.querySelector("h2");
  maintitle.style.fontSize = "40px";
  maintitle.style.marginBottom = "10px";
  maintitle.style.letterSpacing = "8px";

  maintitle.style.textTransform = "uppercase";
  const subtitle = document.querySelectorAll("h4");
  subtitle.forEach((title) => {
    title.style.fontWeight = "200";
    title.style.margin = "2px auto";
  });

  //agarramos los dos div
  const outerDiv = document.querySelector("#countries-container");
  let innerDiv;

  outerDiv.className = "country-container";
  //outerDiv.style.backgroundColor = "powderBlue";

  outerDiv.style.display = "flex";
  outerDiv.style.justifyContent = "center";
  outerDiv.style.flexWrap = "wrap";
  outerDiv.style.margin = "40px auto";

  document.body.style.textAlign = "center";
  document.body.style.fontFamily = "sans-Serif";

  //ahora con for-loop le ponemos contenido al innerDiv
  for (let i = 0; i < countries.length; i++) {
    let innerDiv = document.createElement("div");
    outerDiv.appendChild(innerDiv);
    innerDiv.textContent = countries[i].toUpperCase();

    innerDiv.style.boxShadow = "#aca9a9c7 -1px 0px 9px 2px";
    innerDiv.style.backgroundColor = "white";

    innerDiv.style.width = "100px";
    innerDiv.style.height = "100px";

    innerDiv.style.margin = "10px";
    innerDiv.style.padding = "30px";

    innerDiv.style.fontSize = "15px";

    innerDiv.style.display = "flex";
    innerDiv.style.alignItems = "center";
    innerDiv.style.justifyContent = "center";
  }

  //damos estilo a la página

  //Fin ejercicio dos
});
