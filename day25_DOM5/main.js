//Visualize the ten most populated countries and the ten most spoken languages in the world using DOM(HTML, CSS, JS)
console.info("World Countries Data");

const subtitle = document.querySelector(".subtitle");
subtitle.innerHTML = `Currently, we have <span id="subtitle_num">${countries_data.length}</span> countries`;
const subtitle_num = document.querySelector("#subtitle_num");
subtitle_num.style.fontWeight = "600";

//agarramos los botones y les metemos un addEventListener()
const population_btn = document.querySelector(".population");
const language_btn = document.querySelector(".languages");
const feedback_title = document.querySelector(".feedback");
feedback_title.innerHTML = `10 Most <span id="feedback_span"></span> in the world`;
feedback_title.style.visibility = "hidden";
const feedback_span = document.querySelector("#feedback_span");
feedback_span.textContent = "";

population_btn.addEventListener("click", function () {
  feedback_span.textContent = "Populated Countries";
  feedback_title.style.visibility = "visible";
});

language_btn.addEventListener("click", function () {
  feedback_span.textContent = "Spoken Languages";
  feedback_title.style.visibility = "visible";
});
