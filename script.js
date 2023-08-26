let loader = document.querySelector(".loader");
window.addEventListener("load", () => {
  loader.classList.toggle("loader2")
});

let dataJson; // Variable para almacenar el JSON cargado

fetch('menu.json')
  .then(response => response.json())
  .then(data => {
    dataJson = data;
    
    
    condicional();
    sectionBreakFast();
    // sectionLunch();
    // sectionDesserts();

    
  })
  .catch(error => console.error('Error al cargar el JSON:', error));

  function condicional(){
    if (window.location.pathname === "/lunch.html") {
      sectionLunch()
    } 
    if (window.location.pathname === "/breakfast.html") {
      sectionBreakFast();
    } 
    if (window.location.pathname === "/desserts.html") {
      sectionDesserts();
    }
  }

  function sectionBreakFast() {
    console.log(dataJson)
    const cardSelector = document.getElementById("card-selector");
    
    dataJson[0].forEach(result => {
      let arr = result.breakfast
      // console.log(result)
      arr.forEach(result => {
        let card = `
                        <img class="photoPlate mx-auto d-block" src="${result.img}">
                        <h2 class="plateName">${result.name}</h2>
                        <p class="ingredients text-center">${result.ingredients}</p>
                        <p class="price text-center">${result.price}€</p>
                        
                      `;
  
        let containerDiv = document.createElement("div"); //create the col div
        containerDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-3"); //Add the bootstrap col class as needed
        containerDiv.innerHTML = card;
        cardSelector.appendChild(containerDiv);
      })
    });
  }  

function sectionLunch() {
  const cardSelector = document.getElementById("card-lunch");
  // console.log(dataJson[1])
  dataJson[1].forEach(result => {
    let arr = result.lunch
    // console.log(arr)
    arr.forEach(result => {
      let card = `
                        <img class="photoPlate mx-auto d-block" src="${result.img}">
                        <h2 class="plateName">${result.name}</h2>
                        <p class="ingredients text-center">${result.ingredients}</p>
                        <p class="price text-center">${result.price}€</p>
                        
                      `;

      let containerDiv = document.createElement("div"); //create the col div
      containerDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-3"); //Add the bootstrap col class as needed
      containerDiv.innerHTML = card;
      cardSelector.appendChild(containerDiv);
    })
  });
}

function sectionDesserts() {
  const cardSelector = document.getElementById("card-desserts");
  // console.log(dataJson[1])
  dataJson[2].forEach(result => {
    let arr = result.desserts
    // console.log(arr)
    arr.forEach(result => {
      let card = `
                        <img class="photoPlate mx-auto d-block" src="${result.img}">
                        <h2 class="plateName">${result.name}</h2>
                        <p class="ingredients text-center">${result.ingredients}</p>
                        <p class="price text-center">${result.price}€</p>
                        
                      `;

      let containerDiv = document.createElement("div"); //create the col div
      containerDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-3"); //Add the bootstrap col class as needed
      containerDiv.innerHTML = card;
      cardSelector.appendChild(containerDiv);
    })
  });
}







