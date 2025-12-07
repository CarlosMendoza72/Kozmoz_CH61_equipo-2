// Acerca de nosotros ===============================================================

// Acordeon
const accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

// Contacto =========================================================================
// Inicializar EmailJS

const formContacto = document.getElementById("formContacto");
const mensajeExito = document.getElementById("mensajeExito");

if (formContacto) {
  formContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    let esValido = true;

    // Regex
    const regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regexTel = /^(\+?52)?[-\s.]?\(?\d{2,3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/;

    // Inputs
    const nombre = document.getElementById("nombre");
    const apellidoPat = document.getElementById("apellidoPat");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    // Validaciones
    if (!regexNombre.test(nombre.value.trim())) {
      nombre.classList.add("is-invalid");
      esValido = false;
    } else nombre.classList.remove("is-invalid");

    if (!regexNombre.test(apellidoPat.value.trim())) {
      apellidoPat.classList.add("is-invalid");
      esValido = false;
    } else apellidoPat.classList.remove("is-invalid");

    if (!regexTel.test(telefono.value.trim())) {
      telefono.classList.add("is-invalid");
      esValido = false;
    } else telefono.classList.remove("is-invalid");

    if (!regexEmail.test(email.value.trim())) {
      email.classList.add("is-invalid");
      esValido = false;
    } else email.classList.remove("is-invalid");

    if (mensaje.value.trim().length < 5) {
      mensaje.classList.add("is-invalid");
      esValido = false;
    } else mensaje.classList.remove("is-invalid");

    // Mostrar validación Bootstrap
    formContacto.classList.add("was-validated");

    if (!esValido) {
      console.log("Formulario inválido");
      return;
    }

    // enviar emails
    emailjs.sendForm("service_73k6p3n", "template_47amrzc", this)
      .then(() => {
        mensajeExito.classList.remove("d-none");
        formContacto.reset();
        formContacto.classList.remove("was-validated");

        setTimeout(() => {
          mensajeExito.classList.add("d-none");
        }, 3000);
      })
      .catch((error) => {
        alert("Error al enviar: " + JSON.stringify(error));
      });
  });
}

// Productos ========================================================================

// Datos de libros en las cartas

const cardData = [
  {
    "title": "Microbiología y Parasitología Médicas",
    "description": "La segunda edición de esta obra revisa y actualiza todos los capítulos e incorpora temas de candente actualidad como el SARS-CoV-2",
    "price": 1407,
    "image": "./assets/libroParasitologia.jpg"
  },
  {
    "title": "Políticas y gobernanza ambientales",
    "description": "El gobierno y la gestión pública del medio ambiente deben actuar como mediadores ante los conflictos de intereses privados y sociales.",
    "price": 724,
    "image": "./assets/libroPolitica.jpg"
  },
  {
    "title": "Microbiología y Parasitología Médicas",
    "description": "La segunda edición de esta obra revisa y actualiza todos los capítulos e incorpora temas de candente actualidad como el SARS-CoV-2",
    "price": 1407,
    "image": "./assets/libroAstrofisica.jpg"
  },
  {
    "title": "Producto B",
    "description": "Una descripción detallada del producto B.",
    "price": 39.50,
    "image": "./"
  },
  {
    "title": "Microbiología y Parasitología Médicas",
    "description": "La segunda edición de esta obra revisa y actualiza todos los capítulos e incorpora temas de candente actualidad como el SARS-CoV-2",
    "price": 1407,
    "image": ""
  },
  {
    "title": "Producto B",
    "description": "Una descripción detallada del producto B.",
    "price": 39.50,
    "image": "./"
  },
  {
    "title": "Microbiología y Parasitología Médicas",
    "description": "La segunda edición de esta obra revisa y actualiza todos los capítulos e incorpora temas de candente actualidad como el SARS-CoV-2",
    "price": 1407,
    "image": ""
  },
  {
    "title": "Producto B",
    "description": "Una descripción detallada del producto B.",
    "price": 39.50,
    "image": "./"
  },
  {
    "title": "Microbiología y Parasitología Médicas",
    "description": "La segunda edición de esta obra revisa y actualiza todos los capítulos e incorpora temas de candente actualidad como el SARS-CoV-2",
    "price": 1407,
    "image": ""
  },
  {
    "title": "Producto B",
    "description": "Una descripción detallada del producto B.",
    "price": 39.50,
    "image": "./"
  },
  {
    "title": "Microbiología y Parasitología Médicas",
    "description": "La segunda edición de esta obra revisa y actualiza todos los capítulos e incorpora temas de candente actualidad como el SARS-CoV-2",
    "price": 1407,
    "image": ""
  },
  {
    "title": "Producto B",
    "description": "Una descripción detallada del producto B.",
    "price": 39.50,
    "image": "./"
  }
];

// Generador de las cartas en html

const cardsContainer = document.getElementById('cards-container');

cardData.forEach(item => {
  // Crear el elemento de la tarjeta
  const card = document.createElement('div');
  card.classList.add('card'); // Asignar una clase para estilos

  // Crear y añadir la imagen
  const img = document.createElement('img');
  img.src = item.image;
  img.alt = item.title;
  card.appendChild(img);

  // Crear y añadir el título
  const title = document.createElement('h2');
  title.textContent = item.title;
  card.appendChild(title);

  // Crear y añadir la descripción
  const description = document.createElement('p');
  description.textContent = item.description;
  card.appendChild(description);

  // Crear y añadir el precio
  const price = document.createElement('span');
  price.textContent = `$${item.price.toFixed(2)}`;
  card.appendChild(price);

  // Añadir la tarjeta completa al contenedor
  cardsContainer.appendChild(card);
});

// Clase Libro

class Libro {

  // Variables | Constantes
  id = 0;
  titulo = "";
  autor = "";
  editorial = "";
  descripcion = "";
  genero = "";
  idioma = "";
  numeroPaginas = 0;
  añoPublicacion = 0;
  formato = "";    // físico o digital
  edicion = "";
  stock = 0;
  precio = 0;
  costoEnvio = 0;
  calificacionPromedio = 0; //¿esto será con estrellas?
  cantidadReseñas = 0;
  urlImagenPortada = ""; // string: url a la imagen
  palabrasClave = []; // Ejemplo: “Matemáticas”, “Digital”, etc.
  destacado = "";   // ejemplo: “Más vendidos”, “Ofertas de la semana” 
  disponible = "";

  // constructor 
  constructor(id, titulo, autor, editorial, descripcion, genero,
    idioma, numeroPaginas, añoPublicacion, formato, edicion, stock, precio,
    costoEnvio, calificacionPromedio, cantidadReseñas, urlImagenPortada,
    palabrasClave, destacado, disponible) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.editorial = editorial;
    this.descripcion = descripcion;
    this.genero = genero;
    this.idioma = idioma;
    this.numeroPaginas = numeroPaginas;
    this.añoPublicacion = añoPublicacion;
    this.formato = formato;
    this.edicion = edicion;
    this.stock = stock;
    this.precio = precio;
    this.costoEnvio = costoEnvio;
    this.calificacionPromedio = calificacionPromedio;
    this.cantidadReseñas = cantidadReseñas;
    this.urlImagenPortada = urlImagenPortada;
    this.palabrasClave = palabrasClave;
    this.destacado = destacado;
    this.disponible = disponible;
  }
}; // clase Libro

// -- Astronomía (Adrián) -- //
const principiosAstrofisica = new Libro(
  1,
  "Principios fundamentales de la astrofísica",
  "Miguel Ángel Sabadell",
  "Pinolia",
  "A través de un viaje extraordinario, revela los secretos que van \
  desde el mismo origen de la materia y los elementos químicos esenciales, \
  pasando por la formación de la Vía Láctea, hasta las explosiones de las \
  supernovas que dan forma y esculpen la arquitectura cósmica o la \
  enigmática materia oscura, cuya elusividad no impide que juegue un papel \
  crucial en la formación de la estructura del cosmos. Con su estilo ameno \
  y su espíritu divulgativo, Sabadell guía con maestría a los lectores por \
  los intrincados senderos de la astrofísica y la cosmología, haciendo \
  accesibles las maravillas de una ciencia compleja. Esta lectura \
  enriquecedora ilumina los enigmas del cosmos, nos conecta con la belleza \
  del universo y desafía nuestra comprensión, avivando la curiosidad innata \
  que nos impulsa a explorar los misterios que trascienden nuestra \
  percepción cotidiana.",
  "Divulgación científica",
  "Español",
  272,
  2024,
  "Físico",
  "Primera edición",
  50,
  666.00,
  0.00,
  5.0,
  7,
  "./assets/libroAstrofisica.jpg",
  ["Astronomía", "Astrofísica", "Ciencia Divulgación"],
  "Ofertas",
  "disponible"
)

// --- 1. TECNOLOGÍA (Jessica) ---
const elMitoDeSeguridad = new Libro
  (
    40,
    "El Mito de la Seguridad: Construyendo Sistemas Robustos",
    "Bruce Schneier",
    "Wiley",
    "Un análisis profundo sobre los principios de la seguridad informática y cómo \
    diseñar sistemas resilientes en un mundo digital.",
    "Tecnología",
    "Inglés",
    432,
    2000,
    "Digital",
    "Edición Revisada",
    500,
    19.99,
    0.00,
    4.5,
    890,
    "./assets/",
    ["Ciberseguridad, Criptografía, Redes"],
    "Recomendado",
    "Disponible"
  );

// -- Economía y Literatura (Karen) -- //
const donQuijote = new Libro(
  3,
  "Don Quijote de la Mancha",
  "Miguel de Cervantes Saavedra",
  "Alfaguara",
  "Considerada la primera novela moderna, Don Quijote de la Mancha relata las \
  aventuras de Alonso Quijano, un hidalgo que enloquece tras leer libros de \
  caballería y decide convertirse en caballero andante. Acompañado de su fiel \
  escudero Sancho Panza, vive episodios cómicos y profundos que exploran la realidad,\
   la imaginación, la locura y la naturaleza humana. Una obra maestra universal.",
  "Literatura clásica",
  "Español",
  1056,
  1605,
  "Novela",
  "Edición conmemorativa",
  20,
  399.00,
  0.00,
  5.0,
  25,
  "./assets/donQuijote.jpg",
  ["Clásicos", "Novela", "Literatura española"],
  "Recomendados",
  "disponible"
);

const fundamentosEconomia = new Libro(
  4,
  "Fundamentos de Economía",
  "Paul Krugman, Robin Wells",
  "McGraw-Hill",
  "Fundamentos de Economía presenta de manera clara y accesible los principios \
  esenciales de la economía moderna. A través de explicaciones precisas, ejemplos\
   cotidianos y gráficos intuitivos, el libro introduce conceptos como oferta y \
   demanda, mercados competitivos, fallas de mercado, política económica y el papel\
    del gobierno en la economía. Diseñado para estudiantes que buscan comprender cómo\
     funciona el mundo económico real.",
  "Economía",
  "Español",
  720,
  2021,
  "Académico",
  "Cuarta edición",
  40,
  899.00,
  0.00,
  4.8,
  15,
  "./assets/fundamentosEconomia.jpg",
  ["Economía", "Educación", "Ciencias Sociales"],
  "Nuevos",
  "disponible"
);

// -- Ingeniería (EDU) -- //
const engineeringMechanics = new Libro(

  45,
  "Engineering Mechanics: Dynamics",
  "J. L. Meriam, L. G. Kraige",
  "Wiley",
  "Un libro fundamental en la formación de ingenieros, que cubre los principios de la\
   dinámica con un enfoque claro, ejemplos prácticos y problemas diseñados para \
   desarrollar habilidades de resolución tanto conceptual como matemática.",
  "Ingeniería Mecánica",
  "Inglés",
  784,
  2016,
  "Físico",
  "8th Edition",
  12,
  1450,
  79,
  4.7,
  2150,
  "./assets/EngineeringMechanics.jpg",
  ["ingeniería", "dinámica", "mecánica", "física", "Meriam"],
  "Libro universitario esencial",
  "Sí"
)