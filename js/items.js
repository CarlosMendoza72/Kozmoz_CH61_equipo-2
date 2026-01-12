
const DEFAULT_IMAGE = "via.placeholder.com";

// Intentamos cargar de LocalStorage; si no hay nada, usamos los datos iniciales
let books = JSON.parse(localStorage.getItem("mis_libros")) || [
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

const cardsContainer = document.getElementById("cards-container");

// 2. Función para guardar en LocalStorage =========================================
const saveToLocalStorage = () => {
  localStorage.setItem("mis_libros", JSON.stringify(books));
};

// 3. Función para renderizar todos los libros =====================================
function renderBooks() {
  cardsContainer.innerHTML = ""; // Limpiamos contenedor
  books.forEach((book, index) => createCard(book, index));
}

// 4. Función para crear una Card ==================================================
function createCard(item, index) {
  const card = document.createElement("div");
  card.classList.add("card");

  const imgUrl = item.image && item.image.trim() !== "" ? item.image : DEFAULT_IMAGE;


  card.innerHTML = `
    <img src="${imgUrl}" alt="${item.title}">
    <h2>${item.title}</h2>
    <p>${item.description}</p>
    <span class="price">$${parseFloat(item.price).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
  `;

  cardsContainer.appendChild(card);
}

// 5. Lógica de agregar libro con Alerta ===========================================
const form = document.getElementById("card-form");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    // Confirmación antes de agregar
    const confirmAdd = confirm("¿Estás seguro que quieres agregar el libro?");

    if (confirmAdd) {
      const newItem = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        price: parseFloat(document.getElementById("price").value) || 0,
        image: document.getElementById("image").value,
      };

      books.push(newItem);
      saveToLocalStorage();
      renderBooks();
      form.reset();
    }
  });
}

// 6. Funciones de Eliminar y Editar ==============================================
window.deleteBook = (index) => {
  if (confirm("¿Seguro que deseas eliminar este libro?")) {
    books.splice(index, 1);
    saveToLocalStorage();
    renderBooks();
  }
};

window.editBook = (index) => {
  const book = books[index];
  const newTitle = prompt("Nuevo título:", book.title);
  const newPrice = prompt("Nuevo precio:", book.price);

  if (newTitle !== null && newPrice !== null) {
    books[index].title = newTitle;
    books[index].price = parseFloat(newPrice);
    saveToLocalStorage();
    renderBooks();
  }
};

// Render inicial al cargar la página
renderBooks();


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