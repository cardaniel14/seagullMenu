let jsonData; // Variable para almacenar el JSON cargado

fetch('platos.json')
  .then(response => response.json())
  .then(data => {
    breakfast = data; 
    prueba()

  })
  
  // function prueba(){    
  //   for(let plato of breakfast){
  //     console.log(breakfast)
  //       // let div = document.querySelector(".platos");
  //       let h2 = document.querySelector(".plateName");
  //       let img = document.querySelector(".photoPlate");
  //       let price = document.querySelector(".price");
  //       let ingredients = document.querySelector(".ingredients");
  //       img.src = plato.img;
  //       h2.textContent=plato.name;
  //       price.textContent=plato.price;
  //       ingredients.textContent=plato.ingredients;
        
  //   }
    
    
  // }
function prueba(){
  breakfast.forEach(e => {
    let div = document.querySelector(".platos");
    let h2 = document.createElement("h2");
    let photo = document.createElement("img");
    let ingredients = document.createElement("p");
    let price = document.createElement("p");
    price.className="price";
    price.textContent=`${e.price}€`;
    ingredients.textContent = e.ingredients
    ingredients.className="ingredients";
    h2.textContent=e.name;
    h2.className="plateName"
    photo.className="photoPlate"
    photo.src=e.img;
    div.appendChild(photo)
    div.appendChild(h2)
    div.appendChild(ingredients)
    div.appendChild(price);
    
  });
}

let loader = document.querySelector(".loader");
window.addEventListener("load", ()=>{
    loader.classList.toggle("loader2")
});

