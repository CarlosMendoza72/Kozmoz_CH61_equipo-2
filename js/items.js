// Datos de los libros (cards) =====================================================

const cardData = [
  {
    title: "Microbiología y Parasitología Médicas",
    description:
      "La segunda edición de esta obra revisa y actualiza todos los capítulos e incorpora temas de candente actualidad como el SARS-CoV-2",
    price: 1407.00,
    image: "./assets/libroMicrobiologia.jpg",
  },
  {
    title: "Políticas y gobernanza ambientales: un vistazo a los instrumentos",
    description:
      "El gobierno y la gestión pública del medio ambiente deben actuar como mediadores ante los conflictos de intereses privados y sociales.",
    price: 724.00,
    image: "./assets/libroPolitica.jpg",
  },
  {
    title: "Engineering Mechanics: Dynamics",
    description:
      "Un libro fundamental en la formación de ingenieros, que cubre los principios de la dinámica con un enfoque claro, ejemplos prácticos y problemas",
    price: 1450.00,
    image: "./assets/EngineeringMechanics.jpg",
  },
  {
    title: "Fundamentos de Economía",
    description:
      "Fundamentos de Economía presenta de manera clara y accesible los principios esenciales de la economía moderna.",
    price: 899.00,
    image: "./assets/fundamentosEconomia.jpg",
  },
  {
    title: "Don Quijote de la Mancha",
    description:
      "Considerada la primera novela moderna, Don Quijote de la Mancha relata las aventuras de Alonso Quijano.",
    price: 399.00,
    image: "./assets/donQuijote.jpg",
  },
  {
    title: "El mito de la seguridad",
    description:
      "Un análisis profundo sobre los principios de la seguridad informática y cómo diseñar sistemas resilientes en un mundo digital.",
    price: 899.00,
    image: "./assets/mitoDeSeguridad.jpg",
  },
  {
    title: "Aprende React en profundidad",
    description:
      "Guía completa para aprender React con ejemplos prácticos y fundamentos sólidos.",
    price: 1407.00,
    image: "./assets/aprendeReact.jpg",
  },
  {
    title: "Fundamentals of Physics",
    description:
      "Comprehensive textbook introducing the fundamental principles of physics.",
    price: 1899.00,
    image: "./assets/fundamentals.jpg",
  },
  {
    title: "Principios fundamentales de la astrofísica",
    description:
      "Un viaje extraordinario por los secretos del cosmos y la estructura del universo.",
    price: 600.00,
    image: "./assets/astrofisica.jpg",
  },
    {
    title: "Cálculo Varias Variables",
    description:
      `La decimoquinta edición del aclamado "Cálculo de Thomas" llega por primera vez en español.`,
    price: 215.10,
    image: "./assets/calculoVariasVariables.jpg",
  },
      {
    title: "Algebra Moderna",
    description:
      `La presente obra es una introducción a la llamada álgebra abstracta.`,
    price: 468.00,
    image: "./assets/algebraModerna.jpg",
  },
        {
    title: "Sapiens",
    description:
      `Cómo la especie Homo sapiens pasó de ser nómada a sedentaria y empezó a trabajar más duro sin por ello mejorar su calidad de vida.`,
    price: 305.10,
    image: "./assets/sapiens.jpg",
  }
];

// Contenedor ======================================================================

const cardsContainer = document.getElementById("cards-container");


// Función única para crear cards ==================================================

function createCard(item) {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = item.image;
  img.alt = item.title;

  const title = document.createElement("h2");
  title.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const price = document.createElement("span");
  price.textContent = `$${item.price.toFixed(2)}`;

  card.appendChild(img);
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(price);

  cardsContainer.appendChild(card);
}

// Render inicial =================================================================

cardData.forEach(item => createCard(item));


// Formulario =====================================================================

const form = document.getElementById("card-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const newItem = {
      title: document.getElementById("title").value,
      description: document.getElementById("description").value,
      price: parseFloat(document.getElementById("price").value),
      image: document.getElementById("image").value,
    };

    cardData.push(newItem);
    createCard(newItem);
    form.reset();
  });
}


// Clase Libro ====================================================================

class Libro {
  constructor(
    id,
    titulo,
    autor,
    editorial,
    descripcion,
    genero,
    idioma,
    numeroPaginas,
    añoPublicacion,
    formato,
    edicion,
    stock,
    precio,
    costoEnvio,
    calificacionPromedio,
    cantidadReseñas,
    urlImagenPortada,
    palabrasClave,
    destacado,
    disponible
  ) {
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
}