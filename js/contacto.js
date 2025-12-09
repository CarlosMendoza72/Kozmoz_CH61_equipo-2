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