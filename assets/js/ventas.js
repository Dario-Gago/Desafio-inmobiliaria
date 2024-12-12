let ventas = [
    {
        nombre: 'Departamento en la florida',
        src: 'assets/img/dp-florida.webp',
        descripcion: 'Es perfecto para un estudiante',
        ubicacion: 'La florida 443',
        habitaciones: 1,
        baños: 1,
        costo: 200.000,
        smoke: true,
        pets: false,
    },
    {
      nombre: 'Departamento en Puente alto',
      src: 'https://i.ytimg.com/vi/m3A3e1Q7XPg/maxresdefault.jpg',
      descripcion: 'Comodo',
      ubicacion: 'Rem 233',
      habitaciones: 3,
      baños: 1,
      costo: 500.000,
      smoke: false,
      pets: false,
  },
  {
        nombre: 'Casa en olmue',
        src: 'https://http2.mlstatic.com/D_NQ_NP_778179-MLC77604479456_072024-O.webp',
        descripcion: 'Es perfecto para una familia',
        ubicacion: 'La florida 443',
        habitaciones: 2,
        baños: 2,
        costo: 800.000,
        smoke: false,
        pets: true,
    },
    {
      nombre: 'Depa. en costanera',
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/525775045.jpg?k=d0ee15f5273dfaf0272ec1444328c426127cad7df219d6f3d10a3f0a0228cc48&o=&hp=1',
      descripcion: 'Para 1 persona',
      ubicacion: 'Costanera 56',
      habitaciones: 1,
      baños: 1,
      costo: 400.000,
      smoke: false,
      pets: true,
  }
    
]

const cardVe = document.getElementById('card-ve');
let html = ''
for(let venta of ventas){
    html += `
    <div class="card">
    <img
          src="${venta.src}"
          class="card-img-top"
          alt="${venta.nombre}"
        />
        <div class="card-body">
          <h5 class="card-title">
            ${venta.nombre}
          </h5>
          <p class="card-text">
            ${venta.descripcion}
          </p>
          <p>
            <i class="fas fa-map-marker-alt"></i>${venta.ubicacion}
          </p>
          <p>
            <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
            <i class="fas fa-bath"></i> ${venta.baños} Baños
          </p>
          <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
          <p class="text-${venta.smoke ? "success" : "danger"}">
            <i class="fas fa-smoking${venta.smoke ? "" : "-ban"}"></i>${venta.smoke ? "Se permite fumar" : "No se permite fumar"}
          </p>
          <p class="text-${venta.pets ? "success" : "danger"}">
            <i class="fa-solid fa-${venta.pets ? "paw" : "ban"}"></i>${venta.pets ? "Se permiten mascotas" : "No se permiten mascotas"}
          </p>
        </div>
    </div>
    `
}
cardVe.innerHTML = html

