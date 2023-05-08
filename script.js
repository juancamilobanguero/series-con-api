const cargarComidas = async() => {
  try {
      const respuesta = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)

      console.log(respuesta);

      // Si la respuesta es correcta
      if(respuesta.status === 200){
          const datos = await respuesta.json()
          console.log(datos);
          
          let Comidas = ''
          datos.meals.forEach(comida => {
              Comidas += 
                  `<div class="comidas">
                  <img class="imagen" src="${comida.strMealThumb}"></img>
                  <h1 class="titulo">${comida.title}</h1>
              </div>`
              
          });

          document.getElementById("container").innerHTML = Comidas
      } 

  } catch(error){
      console.log(error)
  }

}
cargarComidas()