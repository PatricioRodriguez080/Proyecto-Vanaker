const contenedorTarjetasCasio = document.getElementById("container-casio")
const contenedorTarjetasMistral = document.getElementById("container-mistral")
const contenedorTarjetasPrune = document.getElementById("container-prune")

crearTarjetasRelojes(arrayCasio, contenedorTarjetasCasio)
crearTarjetasRelojes(arrayMistral, contenedorTarjetasMistral)
crearTarjetasRelojes(arrayPrune, contenedorTarjetasPrune)

function crearTarjetasRelojes(arrayRelojes, contenedor) {
    arrayRelojes.forEach((reloj) => {
        contenedor.innerHTML += `
            <div class="col-sm-12 col-md-6 col-lg-4 col-relojes">
                <div class="card" style="width: 18rem;">
                    <img loading="lazy" src="../media/relojes/${reloj.marca}/${reloj.id}.jpg" class="card-img-top" alt="reloj ${reloj.marca}">
                    <div class="card-body">
                        <h5 class="card-title">${reloj.nombre}</h5>
                        <h6 class="marca">${reloj.marca}</h6>
                    </div>
                </div>
            </div>
        `
    })
}