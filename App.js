// Conectar con la API para obtener productos
const url = `https://api.escuelajs.co/api/v1/products/`


const conectarApi = async  () => {

  const resultadoApi = await fetch (url)


  console.log(resultadoApi)

  const datos = await resultadoApi.json()

  console.log(datos[0])

  let productos = ``
  datos.forEach(element => {
    productos += `<div> ${element.title} </div>

    <img src = '${element.ima}'>  
    
      <div> 
         
      <p> Price:  ${element.price} </p>

      ${element.description}
      
      <img src = "${element.images}" alt= "Imagen de Procducto">


    
      ${element.category ? 




          `${element.category.name}` : `<p> Nombre: </p>`
       }
      
      </div>

    `
  });

  document.getElementById(`productos`).innerHTML = productos 
}



conectarApi()

  


