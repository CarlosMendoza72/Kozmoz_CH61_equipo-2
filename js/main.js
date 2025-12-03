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