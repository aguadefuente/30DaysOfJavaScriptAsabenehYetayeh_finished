const countries_length = countries.length;

//getting elements
const tittle = document.querySelector("h1");
const subtitle = document.querySelector("h3");
subtitle.textContent = `Total number of countries: ${countries_length}`;

const message = document.createElement("p");
message.after(subtitle);
message.textContent = `Countries ${"***"}: ${"**"} are ${"**"}`;
subtitle.insertAdjacentElement("afterend", message);
