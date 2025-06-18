const propiedades = [
  {
    nombre: "Casa Familiar en el Norte",
    ubicacion: "Bogotá - Norte",
    precio: "$350.000.000",
    imagen: "img/sgt-2514669_1280.jpg"
  },
  {
    nombre: "Apartamento Moderno",
    ubicacion: "Medellín - Poblado",
    precio: "$500.000.000",
    imagen: "img/sa-rapita-2483668_1280.jpg"
  },
  {
    nombre: "Casa Campestre",
    ubicacion: "Cali - Afueras",
    precio: "$780.000.000",
    imagen: "img/hungary-4191850_1280.jpg"
  }
];
const lista = document.getElementById('lista-propiedades');
const buscador = document.getElementById('buscador');
function mostrarPropiedades(filtradas) {
  lista.innerHTML = "";
  filtradas.forEach(propiedad => {
    lista.innerHTML += `
      <div class="propiedad">
        <img src="${propiedad.imagen}" alt="${propiedad.nombre}">
        <h3>${propiedad.nombre}</h3>
        <p>${propiedad.ubicacion}</p>
        <p><strong>${propiedad.precio}</strong></p>
      </div>
    `;
  });
}
mostrarPropiedades(propiedades);
buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  const filtradas = propiedades.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.ubicacion.toLowerCase().includes(texto)
  );
  mostrarPropiedades(filtradas);
});