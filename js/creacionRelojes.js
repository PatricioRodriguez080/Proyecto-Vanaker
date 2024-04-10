// Traigo a JS el contenedor //
const contenedorTarjetas = document.getElementById("container-relojes")

// Ejecuto la funcion para crear las cards de relojes //

crearTarjetasRelojes(arrayRelojes)

function crearTarjetasRelojes(arrayRelojes) {
    arrayRelojes.forEach((reloj) => {
        contenedorTarjetas.innerHTML += `
            <div class="col-sm-12 col-md-6 col-lg-4 col-relojes">
                <div class="card" style="width: 18rem;">
                    <img src="../media/relojes/${reloj.id}.jpg" class="card-img-top" alt="reloj ${reloj.marca}">
                    <div class="card-body">
                        <h5 class="card-title">${reloj.nombre}</h5>
                        <h6 class="marca">${reloj.marca}</h6>
                        <div class="container-precio">
                            <h5 class="card-title">$${reloj.precio}</h5>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}