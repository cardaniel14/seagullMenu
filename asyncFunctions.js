export async function displayItems(path) {
  try {
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
  } catch (error) {
    console.log(`Item not found`, error);
  }
}
