const alquileres = [
    {
        nombre: 'Casa en viña del mar',
        src: 'assets/img/cs-viña.jpg',
        descripcion: 'Perfecta para ir el verano',
        ubicacion: 'Holanda',
        habitaciones: 2,
        baños: 2,
        costo: 500.000,
        smoke: false,
        pets: true,
    },
    {
      nombre: 'Casa en Tunquen',
      src: 'https://casaskit.cl/wp-content/uploads/2022/06/nativa_4-1.jpg',
      descripcion: 'Disfruta de las vistas al mar',
      ubicacion: 'Tunquen 22',
      habitaciones: 4,
      baños: 3,
      costo: 900.000,
      smoke: false,
      pets: false,
  },
  {
    nombre: 'Casa en Cerro navia',
    src: 'https://d1cfu8v5n1wsm.cloudfront.net/toctoc/fotos/20220823/2145375/n_wm_2022082307411865204.jpeg',
    descripcion: 'Se arrienda una casa sencilla',
    ubicacion: 'Cerro navia 522',
    habitaciones: 2,
    baños: 1,
    costo: 100.000,
    smoke: false,
    pets: true,
  },
  {
    nombre: 'Depa. en maipu',
    src: 'https://http2.mlstatic.com/D_NQ_NP_960308-MLC49576188222_042022-O.webp',
    descripcion: 'Perfecto para 3 personas',
    ubicacion: 'Maipu correa 88',
    habitaciones: 3,
    baños: 12,
    costo: 700.000,
    smoke: false,
    pets: true,
  }
]
const cardAl = document.getElementById('card-al');
let html2 = ''
for(let alquiler of alquileres){
    html2 += `<div class="card">
    <img
          src="${alquiler.src}"
          class="card-img-top"
          alt="${alquiler.nombre}"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${alquiler.nombre}
          </h5>
          <p class="card-text">
            ${alquiler.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>${alquiler.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${alquiler.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
          <p class="text-${alquiler.smoke ? "success" : "danger"}">
            <i class="fas fa-smoking${alquiler.smoke ? "" : "-ban"}"></i>${alquiler.smoke ? "Se permite fumar" : "No se permite fumar"}
          </p>
          <p class="text-${alquiler.pets ? "success" : "danger"}">
            <i class="fa-solid fa-${alquiler.pets ? "paw" : "ban"}"></i>${alquiler.pets ? "Se permiten mascotas" : "No se permiten mascotas"}
          </p>
        </div>
        </div>`
}
cardAl.innerHTML = html2
