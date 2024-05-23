const contenedorTarjetasAnillos = document.getElementById("container-anillos")
const contenedorTarjetasCadenas = document.getElementById("container-cadenas")

crearTarjetasJoyas(arrayAnillos, contenedorTarjetasAnillos)
crearTarjetasJoyas(arrayCadenas, contenedorTarjetasCadenas)

function crearTarjetasJoyas(arrayJoyas, contenedor) {
    arrayJoyas.forEach((joya) => {
        contenedor.innerHTML += `
            <div class="col-sm-12 col-md-6 col-lg-4 col-relojes">
                <div class="card" style="width: 18rem;">
                    <img src="../media/joyas/${joya.categoria}/${joya.id}.jpg" class="card-img-top" alt="reloj ${joya.nombre}">
                    <div class="card-body">
                        <h5 class="card-title">${joya.nombre}</h5>
                        <h6 class="info-joya">${joya.info}</h6>
                    </div>
                </div>
            </div>
        `
    })
}