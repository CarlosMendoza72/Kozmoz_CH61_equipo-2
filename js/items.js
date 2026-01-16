// ======================= CONFIG ===============================================

const STORAGE_KEY = "mis_libros";
const DEFAULT_IMAGE = "https://via.placeholder.com/300x400?text=Libro";

// ======================= DATA ==================================================

// Cargar desde LocalStorage o usar datos iniciales
let books = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [
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

// ======================= DOM ===================================================

const cardsContainer = document.getElementById("cards-container");
const form = document.getElementById("card-form");

// ======================= LOCAL STORAGE =========================================

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
};

// ======================= RENDER ===============================================

function renderBooks() {
  cardsContainer.innerHTML = "";
  books.forEach((book, index) => createCard(book, index));
}

// ======================= FLIP CARD (TU TRABAJO) ================================

function createCard(item, index) {

  const card = document.createElement("div");
  card.classList.add("card");

  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  // ---------- FRONT ----------
  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");

  const img = document.createElement("img");
  img.src = item.image?.trim() ? item.image : DEFAULT_IMAGE;
  img.alt = item.title;

  const titleFront = document.createElement("h3");
  titleFront.textContent = item.title;

  cardFront.append(img, titleFront);

  // ---------- BACK ----------
  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");

  const titleBack = document.createElement("h3");
  titleBack.textContent = item.title;

  const description = document.createElement("p");
  description.textContent = item.description;

  const price = document.createElement("span");
  price.textContent = `$${item.price.toFixed(2)}`;

  // Acciones
cardBack.append(titleBack, description, price);

if (typeof IS_ADMIN !== "undefined" && IS_ADMIN) {
  const btnEdit = document.createElement("button");
  btnEdit.textContent = "Editar";
  btnEdit.onclick = () => editBook(index);

  const btnDelete = document.createElement("button");
  btnDelete.textContent = "Eliminar";
  btnDelete.onclick = () => deleteBook(index);

  cardBack.append(btnEdit, btnDelete);
}

  // ---------- ENSAMBLAR ----------
  cardInner.append(cardFront, cardBack);
  card.appendChild(cardInner);
  cardsContainer.appendChild(card);
}

// ======================= FORMULARIO ============================================

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    if (!confirm("¿Estás seguro que quieres agregar el libro?")) return;

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
  });
}

// ======================= CRUD ==================================================

function deleteBook(index) {
  if (confirm("¿Seguro que deseas eliminar este libro?")) {
    books.splice(index, 1);
    saveToLocalStorage();
    renderBooks();
  }
}

function editBook(index) {
  const book = books[index];

  const newTitle = prompt("Nuevo título:", book.title);
  const newPrice = prompt("Nuevo precio:", book.price);

  if (newTitle !== null && newPrice !== null) {
    books[index].title = newTitle;
    books[index].price = parseFloat(newPrice);
    saveToLocalStorage();
    renderBooks();
  }
}

// ======================= INIT ==================================================

renderBooks();
