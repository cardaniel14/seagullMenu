let jsonData; // Variable para almacenar el JSON cargado

fetch('platos.json')
  .then(response => response.json())
  .then(data => {
    breakfast = data; 
    prueba()

  })    
    
// function prueba(){
//   breakfast.forEach(e => {
//     let div = document.querySelector(".platos");
//     let h2 = document.createElement("h2");
//     let photo = document.createElement("img");
//     let ingredients = document.createElement("p");
//     let price = document.createElement("p");
//     price.className="price";
//     price.textContent=`${e.price}€`;
//     ingredients.textContent = e.ingredients;
//     ingredients.className="ingredients";
    
//     h2.textContent=e.name;
//     h2.className="plateName"
//     photo.className="photoPlate"
//     photo.src=e.img;
//     div.appendChild(photo)
//     div.appendChild(h2)
//     div.appendChild(ingredients)
//     div.appendChild(price);

    
//   });
// }

function prueba(){
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

                  // <div class="card mb-3">
                  //   <div class="card-body">
let loader = document.querySelector(".loader");
window.addEventListener("load", ()=>{
    loader.classList.toggle("loader2")
});

