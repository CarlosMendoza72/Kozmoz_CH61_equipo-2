// Acerca de nosotros =================================================
// Acordeon
const accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}
// Acerca de nosotros =================================================

// Contacto ===========================================================


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

    // Inputs
    const nombre = document.getElementById("nombre");
    const apellidoPat = document.getElementById("apellidoPat");
    const apellidoMat = document.getElementById("apellidoMat");
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

    if (!regexNombre.test(apellidoMat.value.trim())) {
      apellidoMat.classList.add("is-invalid");
      esValido = false;
    } else apellidoMat.classList.remove("is-invalid");

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

// Productos ===========================================================

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
};

const principiosAstrofisica = new Libro(
  1,
  "Principios fundamentales de la astrofísica",
  "Miguel Ángel Sabadell",
  "Pinolia",
  "¿Te has preguntado alguna vez por qué la noche es oscura si estamos \
  rodeados de millones de estrellas? ¿Cuál es la composición de estas y \
  por qué brillan más antes de apagarse? ¿Qué desencadenó la Gran Explosión \
  que dio origen a nuestro universo? ¿Sabías que existen \
  «ciudades cósmicas»? ¿Cuál es la fecha de caducidad del universo? \
  Miguel Ángel Sabadell, astrofísico de renombre y destacado divulgador, \
  responde de manera magistral a estas preguntas y a muchas otras que \
  envuelven el misterioso universo que todos habitamos, pero conocemos tan \
  poco. A través de un viaje extraordinario, revela los secretos que van \
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

const elMitoDeSeguridad = new libro 
(
         40,
        "El Mito de la Seguridad: Construyendo Sistemas Robustos",
        "Bruce Schneier",
        "Wiley",
        "Un análisis profundo sobre los principios de la seguridad informática y cómo diseñar sistemas resilientes en un mundo digital.",
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
