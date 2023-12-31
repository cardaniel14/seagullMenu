loader(); //Invocar funcion loader

function loader() {
  let loader = document.querySelector(".loader");
  window.addEventListener("load", () => {
    loader.classList.toggle("loader2");
  });
}

import data from "./menu.json" assert { type: "json" };

export function displayItems(path) {
  const cardSelector = document.getElementById("card-selector");
  const filtro = data.filter((t) => t.type == path);
  //console.log(filtro);

  filtro.forEach((result) => {
    let card = `
                        <img class="photoPlate mx-auto d-block" src="${result.img}">
                        <h2 class="plateName">${result.name}</h2>
                        <p class="ingredients text-center">${result.ingredients}</p>
                        <p class="price text-center">${result.price}€</p>

                      `;

    let containerDiv = document.createElement("div");
    containerDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-3");
    containerDiv.innerHTML = card;
    cardSelector.appendChild(containerDiv);
  });
}

let path = window.location.pathname;
if (path == "/breakfast.html") {
  displayItems("breakfast");
}

if (path == "/lunch.html") {
  displayItems("lunch");
}
if (path == "/desserts.html") {
  displayItems("desserts");
}

function displayDrinks(itemType, index) {
  const drinkId = itemType;
  const cardSelector = document.getElementsByClassName("accordion-body")[index];
  //console.dir(cardSelector);
  const filtro = data.filter((t) => t.type == drinkId);
  //console.log(filtro);

  filtro.forEach((result) => {
    let card = `
                        
                        <p class="ingredients text-center">${result.name}: ${result.price}€</p>

                      `;

    let containerDiv = document.createElement("div");
    containerDiv.setAttribute(
      "class",
      "col-sm-6 col-md-4 col-lg-3 text-center"
    );
    containerDiv.innerHTML = card;
    cardSelector.appendChild(containerDiv);
  });
}

function displayFilteredDrinks() {
  const drinkTypes = [
    "hotDrinks",
    "coldCoffees",
    "softDrinks",
    "smoothies",
    "wine",
    "naturalCyder",
    "beer",
    "cocktails",
  ];

  for (let i = 0; i < drinkTypes.length; i++) {
    displayDrinks(drinkTypes[i], i);
  }
}

displayFilteredDrinks();
