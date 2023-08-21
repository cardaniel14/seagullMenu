let jsonData; // Variable para almacenar el JSON cargado

fetch('platos.json')
  .then(response => response.json())
  .then(data => {
    jsonData = data; 
    prueba()

  })
  
  function prueba(){    
    for(let plato of jsonData){
        let div = document.querySelector(".platos");
        let h2 = document.createElement("h2");
        let img = document.createElement("img");
        img.src = plato.img;
        h2.textContent=plato.name;
        div.appendChild(h2)
        div.appendChild(img)
        
    }
    
    
  }

let loader = document.querySelector(".loader");
window.addEventListener("load", ()=>{
    loader.classList.toggle("loader2")
});

