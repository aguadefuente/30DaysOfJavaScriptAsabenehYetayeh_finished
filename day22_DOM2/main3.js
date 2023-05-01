//EJERCICIO 3:
document.addEventListener("DOMContentLoaded", function (event) {
  //////////////////////////////////////////////HEADER SECTION
  document.body.style.textAlign = "center";
  document.body.style.fontFamily = "Arial, Helvetica, sans-serif";

  //title - creamos el título a partir de la información contenida en el objeto data_info.js
  const title = document.createElement("h1");
  title.innerHTML =
    asabenehChallenges2020.challengeTitle + //concateno el contenido que quiero
    " <span id= title_year>" +
    asabenehChallenges2020.challengeYear +
    "</span>";
  document.body.appendChild(title); //lo appendo

  //camaleon year
  const theYear = document.getElementById("title_year"); //agarramos el año por el Id que creamos arriba en el span
  theYear.style.fontSize = "70px";

  let color;

  function changeColor() {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);

    color = `rgb(${color1},${color2},${color3})`;

    theYear.style.color = color;
  }

  setInterval(changeColor, 1000);

  //subtitle
  const sub_title = document.createElement("h2");
  sub_title.innerHTML = asabenehChallenges2020.challengeSubtitle;

  sub_title.style.textDecoration = "underline solid 2px";
  document.body.appendChild(sub_title);

  //current Date
  const dateParagraph = document.createElement("p");

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  timing(); //acá llamo a la función timing antes del setInterval para que se cargue primero

  setInterval(timing, 1000);
  function timing() {
    const today = new Date();

    let month = months[today.getMonth()];
    let day = today.getDate();
    let year = today.getFullYear();
    let hour = today.toLocaleTimeString(); //`${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

    dateParagraph.innerHTML = `${month} ${day}, ${year} ${hour}`;
  }

  document.body.appendChild(dateParagraph);

  dateParagraph.style.padding = "8px";
  dateParagraph.style.width = "200px";
  dateParagraph.style.margin = "0 auto";

  //para que el background cambie de color cada segundo
  let background;
  function backgroundDate() {
    const color1 = Math.floor(Math.random() * 256);
    const color2 = Math.floor(Math.random() * 256);
    const color3 = Math.floor(Math.random() * 256);

    background = `rgb(${color1},${color2},${color3},${0.4})`; //0.4 opacity

    dateParagraph.style.backgroundColor = background;
  }

  setInterval(backgroundDate, 1000);

  /////////////////////////////////////////////////CHALLENGES SECTION
  const challengeLength = asabenehChallenges2020.challenges.length; //8
  for (i = 0; i < challengeLength; i++) {
    //outer Divs - se crearan 8 div externos
    let challengesDiv = document.createElement("div");

    document.body.appendChild(challengesDiv);

    challengesDiv.style.margin = "10px";
    challengesDiv.style.padding = "20px";

    challengesDiv.style.display = "flex";
    challengesDiv.style.justifyContent = "space-around";

    //inner Divs - se crearán 3 div internos cada uno con un class-name
    for (let j = 0; j < 3; j++) {
      let challengeInnerDiv = document.createElement("div");
      challengesDiv.appendChild(challengeInnerDiv);

      challengeInnerDiv.className = "cosa" + j;
      challengeInnerDiv.style.width = "250px";
      challengeInnerDiv.style.textAlign = "left";
      challengeInnerDiv.style.fontSize = "18px";

      //the content of innerDivs
      if (challengeInnerDiv.classList.contains("cosa0")) {
        challengeInnerDiv.innerHTML = asabenehChallenges2020.challenges[i].name;
      } else if (challengeInnerDiv.classList.contains("cosa1")) {
        //contenido desplegable
        const desplegable = document.createElement("details"); //<details> tag es un desplegable de html
        const desplegable_sum = document.createElement("summary"); //specify a visible heading for the details
        const desplegable_p = document.createElement("p");

        challengeInnerDiv.appendChild(desplegable);
        desplegable.appendChild(desplegable_sum);
        desplegable.appendChild(desplegable_p);

        desplegable_sum.innerHTML =
          asabenehChallenges2020.challenges[i].name.slice(11);

        const list = document.createElement("ul");
        desplegable_p.appendChild(list);
        list.style.padding = "0px";
        list.style.margin = "0px";

        for (
          let li = 0;
          li < asabenehChallenges2020.challenges[i].topics.length;
          li++
        ) {
          const items = document.createElement("li");
          list.appendChild(items);

          items.innerHTML = asabenehChallenges2020.challenges[i].topics[li];
          items.style.listStyle = "none";
        }

        desplegable_p.style.display = "flex";
        desplegable_p.style.flexDirection = "column";
        desplegable_p.style.flexWrap = "wrap";
      } else if (challengeInnerDiv.classList.contains("cosa2")) {
        challengeInnerDiv.innerHTML =
          asabenehChallenges2020.challenges[i].status;
        challengeInnerDiv.style.textAlign = "right";
      }

      //color of background
      if (challengeInnerDiv.innerHTML.toLowerCase().includes("done")) {
        challengesDiv.style.backgroundColor = "#aae3aa";
        document.querySelectorAll(".cosa0")[i].innerHTML =
          "<a href=''>" + asabenehChallenges2020.challenges[i].name + "</a>";
      } else if (
        challengeInnerDiv.innerHTML.toLowerCase().includes("ongoing")
      ) {
        challengesDiv.style.backgroundColor = "#f6f6ad";
        document.querySelectorAll(".cosa0")[i].innerHTML =
          "<a href=''>" + asabenehChallenges2020.challenges[i].name + "</a>";
      } else {
        challengesDiv.style.backgroundColor = "#faa2a2";
      }
    }
  }

  ///////////////////////////////////////////////BIO SECTION
  //author title
  const author_title = document.createElement("h2");
  author_title.innerHTML =
    asabenehChallenges2020.author.firstName +
    " " +
    asabenehChallenges2020.author.lastName;

  document.body.appendChild(author_title);

  //author socials
  for (
    let j = 0;
    j < asabenehChallenges2020.author.socialLinks.length - 1;
    j++
  ) {
    const fontIcon = document.createElement("a");
    fontIcon.setAttribute(
      "href",
      asabenehChallenges2020.author.socialLinks[j].url
    );
    fontIcon.innerHTML =
      asabenehChallenges2020.author.socialLinks[j].fontawesomeIcon;
    document.body.appendChild(fontIcon);

    fontIcon.style.margin = "0 5px";
    fontIcon.style.fontSize = "30px";
  }

  //author bio
  const author_bio = document.createElement("p");

  author_bio.innerHTML = asabenehChallenges2020.author.bio;
  document.body.appendChild(author_bio);

  author_bio.style.width = "70%";
  author_bio.style.margin = "20px auto";
  author_bio.style.textAlign = "justify";

  //cv list
  const cv = ["Title", "Skills", "Qualifications"];

  const cv_div = document.createElement("div");
  document.body.appendChild(cv_div);

  cv_div.style.display = "flex";
  cv_div.style.justifyContent = "center";
  cv_div.style.gap = "25px";

  for (let c = 0; c < 3; c++) {
    const cv_innerDiv = document.createElement("div");
    cv_div.appendChild(cv_innerDiv);
    cv_innerDiv.style.width = "250px";

    const cv_innerDiv_title = document.createElement("h4");
    cv_innerDiv.appendChild(cv_innerDiv_title);
    cv_innerDiv_title.innerHTML = cv[c];
    cv_innerDiv_title.style.marginBottom = "0px";
    cv_innerDiv_title.style.textAlign = "left";

    const cv_innerDiv_ul = document.createElement("ul");
    cv_innerDiv.appendChild(cv_innerDiv_ul);
    cv_innerDiv_ul.className = "cv" + c;
    cv_innerDiv_ul.style.textAlign = "left";
    cv_innerDiv_ul.style.paddingLeft = "0px";

    if (cv_innerDiv_ul.classList.contains("cv0")) {
      for (let u = 0; u < asabenehChallenges2020.author.titles.length; u++) {
        const cv_items = document.createElement("li");
        cv_innerDiv_ul.appendChild(cv_items);
        cv_items.innerHTML = asabenehChallenges2020.author.titles[u].join(" ");
        cv_items.style.listStyle = "none";
      }
    }

    if (cv_innerDiv_ul.classList.contains("cv1")) {
      for (let u = 0; u < asabenehChallenges2020.author.skills.length; u++) {
        const cv_items = document.createElement("li");
        cv_innerDiv_ul.appendChild(cv_items);
        cv_items.innerHTML = "✅ " + asabenehChallenges2020.author.skills[u];
        cv_items.style.listStyle = "none";
      }
    }

    if (cv_innerDiv_ul.classList.contains("cv2")) {
      for (
        let u = 0;
        u < asabenehChallenges2020.author.qualifications.length;
        u++
      ) {
        const cv_items = document.createElement("li");
        cv_innerDiv_ul.appendChild(cv_items);

        const dibujito = u === 0 ? "📖" : "🧑‍🎓"; //ternary operator

        cv_items.innerHTML =
          dibujito + " " + asabenehChallenges2020.author.qualifications[u];
        cv_items.style.listStyle = "none";
        cv_innerDiv.style.width = "250px";
      }
    }
  }

  ///////////////////////////////keywords Section
  const keyword_title = document.createElement("h4");
  document.body.appendChild(keyword_title);
  keyword_title.innerHTML = "Keywords";

  keyword_title.style.listStyle = "underline 1px wavy black";
  keyword_title.style.padding = "10px";

  const keyword_div = document.createElement("div");
  document.body.appendChild(keyword_div);

  keyword_div.style.display = "flex";
  keyword_div.style.gap = "10px";
  keyword_div.style.flexWrap = "wrap";
  keyword_div.style.justifyContent = "center";

  let key_color;
  function backgroundKeyColor() {
    const colorito1 = Math.floor(Math.random() * 256);
    const colorito2 = Math.floor(Math.random() * 256);
    const colorito3 = Math.floor(Math.random() * 256);

    key_color = `rgb(${colorito1},${colorito2},${colorito3},0.4)`;

    return key_color;
  }

  for (let k = 0; k < asabenehChallenges2020.keywords.length; k++) {
    const keyword_p = document.createElement("p");
    keyword_div.appendChild(keyword_p);
    keyword_p.innerHTML = "# " + asabenehChallenges2020.keywords[k];

    // keyword_p.style.backgroundColor = "powderBlue";
    // keyword_p.style.padding = "10px";
    // keyword_p.style.border = `2px solid ${backgroundKeyColor()}`;
    // keyword_p.style.borderRadius = "25px";
    ///////////Refactor: así es más rápido - se aplican múltiples estilos!!!!
    //cssText property sets or returns the contents of a style declaration as a string
    keyword_p.style.cssText = `
       padding: 10px;
       border-radius: 25px;
       background-color: ${backgroundKeyColor()};
   `;
  } //para que los colores de las pastilas se genere aleatoriamente y sean distintos colores
});
