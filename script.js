const propiedades = [
  {
    nombre: "Casa Familiar en el Norte",
    ubicacion: "Bogotá - Norte",
    precio: "$350.000.000",
    imagen: "img/sgt-2514669_1280.jpg",
    descripcion: "Esta acogedora casa familiar de dos plantas cuenta con espacios amplios y funcionales que incluyen sala, comedor, cocina integral, tres habitaciones, dos baños y un hermoso jardín trasero ideal para reuniones familiares o para que los niños jueguen al aire libre. Se encuentra en una zona residencial tranquila del norte de Bogotá, con fácil acceso a transporte público, supermercados, colegios y parques. La propiedad ofrece un excelente equilibrio entre comodidad y seguridad, perfecta para quienes buscan estabilidad y calidad de vida para su familia."
  },
  {
    nombre: "Apartamento Moderno",
    ubicacion: "Medellín - Poblado",
    precio: "$500.000.000",
    imagen: "img/sa-rapita-2483668_1280.jpg",
    descripcion: "Elegante apartamento con diseño contemporáneo, ventanales de piso a techo que permiten una excelente iluminación natural, y acabados de lujo en cocina y baños. Cuenta con dos habitaciones, sala de estar con balcón, cocina americana y dos baños completos. Está ubicado en el exclusivo sector de El Poblado en Medellín, cerca de centros comerciales, restaurantes gourmet, universidades y con vigilancia 24 horas. Es ideal para profesionales jóvenes o parejas que buscan vivir en un entorno moderno y dinámico."
  },
  {
    nombre: "Casa Campestre",
    ubicacion: "Cali - Afueras",
    precio: "$780.000.000",
    imagen: "img/hungary-4191850_1280.jpg",
    descripcion: "Espaciosa casa campestre rodeada de zonas verdes y naturaleza. Ofrece cuatro habitaciones, sala con chimenea, comedor independiente, cocina rústica con acabados en madera y una amplia terraza con vista a las montañas. Perfecta para quienes buscan escapar del bullicio urbano sin alejarse demasiado de la ciudad de Cali. El terreno incluye árboles frutales, zona BBQ, parqueadero para varios vehículos y acceso a rutas ecológicas. Una joya para los amantes del aire puro y la vida tranquila."
  },
  {
    nombre: "Casa con Jardín",
    ubicacion: "Barranquilla - Norte",
    precio: "$420.000.000",
    imagen: "img/casa con jardin.jpg",
    descripcion: "Preciosa casa de estilo europeo con un encantador jardín delantero y patio trasero. Cuenta con tres habitaciones, cocina amplia, salón comedor y un pequeño estudio. Se encuentra en una zona residencial muy segura del norte de Barranquilla. El jardín tiene espacio para sembrar flores o crear un pequeño huerto casero. Es una propiedad ideal para familias pequeñas, personas mayores o parejas que disfrutan de los espacios verdes y ambientes relajantes."
  },
  {
    nombre: "Casa Moderna",
    ubicacion: "Pereira - Centro",
    precio: "$390.000.000",
    imagen: "img/casa moderna.jpg",
    descripcion: "Diseño moderno y funcional en esta hermosa casa de dos plantas. Dispone de amplios ventanales, acabados de lujo, cocina integral con barra tipo americana, garaje cubierto para dos vehículos, patio interior con zona de ropas, tres habitaciones con clósets empotrados y estudio. Ubicada estratégicamente en el centro de Pereira, cerca de instituciones educativas, centros comerciales y clínicas. Perfecta para familias que buscan un estilo de vida urbano, práctico y cómodo."
  },
  {
    nombre: "Casa Tradicional",
    ubicacion: "Cali - Barrio Lejano",
    precio: "$310.000.000",
    imagen: "img/casa tradicional.jpg",
    descripcion: "Casa tradicional con encanto único, construida principalmente en madera y ladrillo, conservando elementos arquitectónicos originales. Cuenta con techos altos, corredores amplios y una zona de estar ideal para compartir en familia. Esta propiedad se encuentra en un barrio tranquilo de Cali, perfecto para quienes valoran el diseño clásico y buscan una vivienda con historia y calidez. Ideal para remodelar o conservar como está, según el gusto del comprador."
  },
  {
    nombre: "Casa fachada",
    ubicacion: "Tolima - Montañas",
    precio: "$390.000.000",
    imagen: "img/casa fachada exterior.jpg",
    descripcion: "Propiedad robusta de estilo rústico con fachada de piedra, ideal para quienes buscan una vivienda resistente y acogedora. Incluye tres habitaciones, dos baños, cocina tradicional, y un amplio salón con chimenea. Está ubicada en una zona montañosa del Tolima, rodeada de naturaleza, perfecta para los amantes del senderismo, el ciclismo y la tranquilidad. Esta casa puede funcionar como vivienda familiar, casa vacacional o incluso como una pequeña posada rural."
  },
  {
    nombre: "Casa en el lago",
    ubicacion: "Bogota - Lago Sirena",
    precio: "$310.000.000",
    imagen: "img/casa covertizo al lago.jpg",
    descripcion: "Maravillosa casa ubicada frente a un lago natural, con vista panorámica desde todos sus espacios principales. La propiedad cuenta con muelle privado, sala-comedor con ventanales gigantes, cocina abierta, dos habitaciones y una terraza exterior donde se pueden disfrutar atardeceres increíbles. Ideal para quienes sueñan con despertar rodeados de naturaleza y tener contacto directo con el agua. A tan solo 30 minutos de Bogotá, esta casa ofrece una experiencia única de descanso y conexión con el entorno."
  }
];


// Elementos DOM
const lista = document.getElementById('lista-propiedades');
const buscador = document.getElementById('buscador');

// Mostrar propiedades
function mostrarPropiedades(listaPropiedades) {
  lista.innerHTML = "";

  listaPropiedades.forEach((propiedad) => {
    const div = document.createElement("div");
    div.className = "propiedad";
    div.innerHTML = `
      <img src="${propiedad.imagen}" alt="${propiedad.nombre}">
      <h3>${propiedad.nombre}</h3>
      <p>${propiedad.ubicacion}</p>
      <p><strong>${propiedad.precio}</strong></p>
    `;
    div.addEventListener('click', () => {
      localStorage.setItem('propiedadSeleccionada', JSON.stringify(propiedad));
      window.location.href = 'detalle.html';
    });
    lista.appendChild(div);
  });
}

// Mostrar todas inicialmente
mostrarPropiedades(propiedades);

// Filtro buscador
buscador.addEventListener('input', () => {
  const texto = buscador.value.toLowerCase();
  const filtradas = propiedades.filter(p =>
    p.nombre.toLowerCase().includes(texto) ||
    p.ubicacion.toLowerCase().includes(texto)
  );
  mostrarPropiedades(filtradas);
});

// Menú hamburguesa
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
