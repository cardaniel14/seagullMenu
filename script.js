loader(); //Invocar funcion loader
goUp();

function loader() {
  let loader = document.querySelector(".loader");
  window.addEventListener("load", () => {
    loader.classList.toggle("loader2");
  });
}

const boton = document.querySelector(".loader");

// window.addEventListener("load", function () {
//   document.querySelector(".aparecer").classList.add("show");
// });

function goUp() {
  const btnUp = document.getElementById("btn-up");
  btnUp.addEventListener("click", () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  );
}

async function displayItems(path) {
  const response = await fetch("./menu.json");
  const data = await response.json();
  const cardSelector = document.getElementById("card-selector");
  const filtro = data.filter((t) => t.type == path);

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
console.log(path);
if (path == "/breakfast.html") {
  displayItems("breakfast");
}

if (path == "/lunch.html") {
  displayItems("lunch");
}
if (path == "/desserts.html") {
  displayItems("desserts");
}

async function displayDrinks(itemType, index) {
  const response = await fetch("./menu.json");
  const data = await response.json();
  const drinkId = itemType;
  const cardSelector = document.getElementsByClassName("accordion-body")[index];
  cardSelector.style.background = "blanchedalmond";
  const filtro = data.filter((t) => t.type == drinkId);

  filtro.forEach((result) => {
    let card = `                        
                        <p class="ingredients text-center">${result.name}: ${result.price}€</p>
                      `;

    let containerDiv = document.createElement("div");
    containerDiv.setAttribute(
      "class",
      "d-flex flex-column justify-content-center align-items-center"
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
