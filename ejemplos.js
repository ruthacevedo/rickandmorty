const contenedor = document.getElementById('contenedor-tarjetas')
console.log(contenedor)

fetch('https://rickandmortyapi.com/api/character')
  .then(respuesta => respuesta.json())
  .then(data => {
    const dataApi = data.results
    console.log(dataApi)

    let template = ''
    for (let i = 0; i < dataApi.length; i++) {
      template =
        template +
        `<div class="card">
            <div class="contenedor-img">
                <img src=${dataApi[i].image} alt=${dataApi[i].name}>
            </div>
            <p>
               <span>Nombre:</span> ${dataApi[i].name}
            </p>
            <p>
               <span>Origen:</span> ${dataApi[i].origin.name}
            </p>
             <p> 
               <span>Especie:</span> ${dataApi[i].species}
             </p>
              <p> 
              <span>Género:</span> ${dataApi[i].gender}
             </p>
        </div>`
    }
    contenedor.innerHTML = template
  })
