let dataJson;// Variable para manipular el Json
loader();//Invocar funcion loader
consumirJson()

function loader() {
  let loader = document.querySelector(".loader");
  window.addEventListener("load", () => {
    loader.classList.toggle("loader2")
  });
}



function consumirJson() {
  fetch('menu.json')
    .then(response => response.json())
    .then(data => {
      dataJson = data;
      condicional();
    })
    .catch(error => console.error('Error al cargar archivo', error));
}



function condicional() {
  if (window.location.pathname === "/breakfast.html") {
    sectionBreakFast();
  }

  if (window.location.pathname === "/lunch.html") {
    sectionLunch()
  }

  if (window.location.pathname === "/desserts.html") {
    sectionDesserts();
  }
}

function sectionBreakFast() {
  const cardSelector = document.getElementById("card-selector");

  dataJson[0].forEach(e => {
    let arr = e.breakfast;
    arr.forEach(result => {
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
    })
  });
}

function sectionLunch() {
  const cardSelector = document.getElementById("card-lunch");
  dataJson[1].forEach(e => {
    let arr = e.lunch
    arr.forEach(result => {
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
    })
  });
}

function sectionDesserts() {
  const cardSelector = document.getElementById("card-desserts");
  dataJson[2].forEach(e => {
    let arr = e.desserts
    arr.forEach(result => {
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
    })
  });
}







