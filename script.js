let loader = document.querySelector(".loader");
window.addEventListener("load", ()=>{
    loader.classList.toggle("loader2")
});

let jsonData; // Variable para almacenar el JSON cargado

fetch('platos.json')
  .then(response => response.json())
  .then(data => {
    breakfast = data; 
    sectionBreakFast()

  })    
    
function sectionBreakFast(){
  const cardSelector = document.getElementById("card-selector");
      breakfast.forEach(result => {
        console.log(result);
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
      });
}



