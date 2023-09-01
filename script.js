let dataJson;// Variable para manipular el Json
loader();//Invocar funcion loader
//consumirJson();

function loader() {
  let loader = document.querySelector(".loader");
  window.addEventListener("load", () => {
    loader.classList.toggle("loader2")
  });
}



// function consumirJson() {
//   console.log('hola dany!');
//   var request = new Request('./menu.json');
//   fetch(request )
//     .then(response => response.json())
//     .then(data => {
//       dataJson = data;
//       condicional();
//     })
//     .catch(error => console.error('Error al cargar archivo', error));
// }


const menu = [
  {
  "img": "imagenes/salmon.jpg",
  "ingredients": "Brioche bread with smoked salmon, cream cheese with dill, cucumber, red onion, spinach",
  "name": "Salmon Breeze",
  "price": 8.5,
  "type": "breakfast"
  },
  {
  "img": "imagenes/smoothie.jpg",
  "ingredients": "Açaí and banana puré, homemade granola, fruits, coconut chips and chia",
  "name": "Smoothie Bowl",
  "price": 8.5,
  "type": "breakfast"
  },
  {
  "img": "imagenes/fritters.jpg",
  "ingredients": "Poached egg, cheesy corn fritters, beet hummus, sweet chili sauce",
  "name": "Fritters & Smashed",
  "price": 10,
  "type": "breakfast"
  },
  {
  "img": "imagenes/avotoast.jpg",
  "ingredients": "Toast with avocado with veggie zucchini sauce, feta cheese, nuts and salad",
  "name": "Avocado Toast",
  "price": 9,
  "type": "breakfast"
  },
  {
  "img": "imagenes/bb.jpg",
  "ingredients": "Brioche bun, scrambled eggs, bacon, cheese, caramelized onion, tomato, avocado, cheese sauce",
  "name": "Breakfast Burger",
  "price": 10,
  "type": "breakfast"
  },
  {
  "img": "imagenes/salty.jpg",
  "ingredients": "Poached egg, pancakes, smashed avocado, asparagus and cheese sauce",
  "name": "Salty Pancakes",
  "price": 10,
  "type": "breakfast"
  },
  {
  "img": "imagenes/jesus.jpg",
  "ingredients": "French toast, poached eggs, fried mushrooms with onion, sun dried tomato, mushroom creamy sauce and dijon sauce",
  "name": "Jesus Mushrooms",
  "price": 10,
  "type": "breakfast"
  },
  {
  "img": "imagenes/tortila.jpg",
  "ingredients": "Scrambled eggs with potatoes, bacon or mushrooms, red onion, avocado sauce, smoked paprika, coriander",
  "name": "Holy Tortilla",
  "price": 9,
  "type": "breakfast"
  },
  {
  "img": "imagenes/fm.jpg",
  "ingredients": "Scrambled eggs, french toast, bacon or halloumi cheese, avocado, marinated onion, granola + yogurt on the side",
  "name": "Friday Morning",
  "price": 12.5,
  "type": "breakfast"
  },
  {
  "img": "imagenes/fritters.jpg",
  "ingredients": "Poached eggs, smoked salmon, avocado, cheese sauce, avocado and yogurt sauce, marinated onion",
  "name": "Hey Salmon!",
  "price": 13,
  "type": "breakfast"
  },
  {
  "img": "imagenes/mcncheese.jpg",
  "ingredients": "Pasta with cheese, onion and cream",
  "name": "Mac & Cheese",
  "price": 7,
  "type": "lunch"
  },
  {
  "img": "imagenes/hashbrowns.jpg",
  "ingredients": "Sweet potato hashbrowns with parmesan, avocado yogurt sauce, chili oil, coriander, sesame seeds",
  "name": "Crispy Hashbrowns",
  "price": 8.5,
  "type": "lunch"
  },
  {
  "img": "imagenes/chickensalad.jpg",
  "ingredients": "Spicy chicken, salad mix, mango, avocado, mango dressing, smoked paprika.",
  "name": "Chicken Jerry Salad",
  "price": 12,
  "type": "lunch"
  },
  {
  "img": "imagenes/fishnchips.jpg",
  "ingredients": "Fried fish with tartar sauce, french fries, lemon, marinated onion, pickles, sweet chili sauce",
  "name": "Fish & Chips",
  "price": 12,
  "type": "lunch"
  },
  {
  "img": "imagenes/salmonsalad.jpg",
  "ingredients": "Brioche bun, scrambled eggs, bacon, cheese, caramelized onion, tomato, avocado, cheese sauce",
  "name": "Salmon Tom Salad",
  "price": 10,
  "type": "lunch"
  },
  {
  "img": "imagenes/syrniki.jpg",
  "ingredients": "Cottage cheese pancakes with homeda matcha ganache, raspberry sauce and pistachio dust",
  "name": "Syrniki",
  "price": 10,
  "type": "desserts"
  },
  {
  "img": "imagenes/spiceGirls.jpg",
  "ingredients": "Pancakes with homemade nuts cream, blueberry, blackberry and banana",
  "name": "Spice Girls Pancakes",
  "price": 8.5,
  "type": "desserts"
  },
  {
  "img": "imagenes/emmaPancakes.jpg",
  "ingredients": "Homemade pancakes with chocolate cream, strawberry, granola dust, corn syrup, nuts, meringue and banana",
  "name": "Pancakes For Emma",
  "price": 8.5,
  "type": "desserts"
  },
  {
  "img": "imagenes/frenchMirage.jpg",
  "ingredients": "French toast with caramelized pineapple, vanilla ice cream, pecan nuts, granola dust and corn syrup",
  "name": "French Mirage",
  "price": 7.5,
  "type": "desserts"
  }
];






function condicional() {
  if (window.location.pathname === "/breakfast.html") {
    sectionBreakFast();
  }

  if (window.location.pathname === "/lunch.html") {
    sectionLunch();
  }

  if (window.location.pathname === "/desserts.html") {
    sectionDesserts();
  }
  if (window.location.pathname === "/drinks.html") {
    sectionDrinks();
  }
}

// function sectionBreakFast() {
//   const cardSelector = document.getElementById("card-selector");

//   dataJson[0].forEach(e => {
//     let arr = e.breakfast;
//     arr.forEach(result => {
//       let card = `
//                         <img class="photoPlate mx-auto d-block" src="${result.img}">
//                         <h2 class="plateName">${result.name}</h2>
//                         <p class="ingredients text-center">${result.ingredients}</p>
//                         <p class="price text-center">${result.price}€</p>
                        
//                       `;

//       let containerDiv = document.createElement("div");
//       containerDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-3");
//       containerDiv.innerHTML = card;
//       cardSelector.appendChild(containerDiv);
//     })
//   });
// }

function displayItems(itemType) {
  console.log(itemType);
  const cardSelector = document.getElementById("menuItems");

  var lunchs = menu.filter(i => i.type == itemType);
  lunchs.forEach(result => {
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

// function sectionDesserts() {
//   const cardSelector = document.getElementById("card-desserts");
//   dataJson[2].forEach(e => {
//     let arr = e.desserts
//     arr.forEach(result => {
//       let card = `
//                         <img class="photoPlate mx-auto d-block" src="${result.img}">
//                         <h2 class="plateName">${result.name}</h2>
//                         <p class="ingredients text-center">${result.ingredients}</p>
//                         <p class="price text-center">${result.price}€</p>
                        
//                       `;

//       let containerDiv = document.createElement("div"); 
//       containerDiv.setAttribute("class", "col-sm-6 col-md-4 col-lg-3"); 
//       containerDiv.innerHTML = card;
//       cardSelector.appendChild(containerDiv);
//     })
//   });
// }

// function sectionDrinks(){
//   dataJson[3].forEach(e=>{
//     let drinks = e.drinks[0].hotDrinks
//     drinks.forEach((e)=>{
//       console.log(e.name)
//     })
//   })
// }




