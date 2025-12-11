// Inicializar EmailJS

const formContacto = document.getElementById("formContacto");
const mensajeExito = document.getElementById("mensajeExito");

if (formContacto) {
  formContacto.addEventListener("submit", function (event) {
    event.preventDefault();

    let esValido = true;

    // Regex
    const regexNombre = /^(?=(?:.*[A-Za-zÁÉÍÓÚáéíóúÑñ]){3,})[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+){0,4}$/;
    const regexEmail = /^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    const regexTel = /^(?:\+52\s*)?[1-9]\d(?:[\s-]?\d{4}){2}$/;
    // const regexTel = /^(?:\+52\s?)?[1-9]\d{9}$/; para no permitir guines o espacios

    // Inputs
    const tipoCliente = document.getElementById("tipoCliente");
    const nombre = document.getElementById("nombre");
    const apellidoPat = document.getElementById("apellidoPat");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("email");
    const mensaje = document.getElementById("mensaje");

    // Validaciones ============================================

    // tipoCliente
    if (tipoCliente.value === "") {
      tipoCliente.classList.add("is-invalid");
      tipoCliente.style.border = "thin solid red"; // thin red
      esValido = false;
    } else {
      tipoCliente.classList.remove("is-invalid");
      tipoCliente.style.border = "thin solid gray";
    } // tipoCliente

    // regexNombre
    if (!regexNombre.test(nombre.value.trim())) {
      nombre.classList.add("is-invalid"); // esto muestra el mensaje en rojo
      nombre.style.border = "thin solid red";
      esValido = false;
    } else {
      nombre.classList.remove("is-invalid");
      nombre.style.border = "thin solid gray";
    } // regexNombre.test

    // regexNombre (apellido)
    if (!regexNombre.test(apellidoPat.value.trim())) {
      apellidoPat.classList.add("is-invalid");
      apellidoPat.style.border = "thin solid red";
      esValido = false;
    } else {
      apellidoPat.classList.remove("is-invalid");
      apellidoPat.style.border = "thin solid gray";
    } // regexNombre.test (apellido)

    // regexTel
    if (!regexTel.test(telefono.value.trim())) {
      telefono.classList.add("is-invalid");
      telefono.style.border = "thin solid red";
      esValido = false;
    } else {
      telefono.classList.remove("is-invalid");
      telefono.style.border = "thin solid gray";
    } // regexTel

    // regexEmail
    if (!regexEmail.test(email.value.trim())) {
      email.classList.add("is-invalid");
      email.style.border = "thin solid red";
      esValido = false;
    } else {
      email.classList.remove("is-invalid");
      email.style.border = "thin solid gray";
    } // regexEmail

    // mensaje
    if (mensaje.value.replace(/\s+/g, '').length < 10) {
      mensaje.classList.add("is-invalid");
      mensaje.style.border = "thin solid red";
      esValido = false;
    } else {
      mensaje.classList.remove("is-invalid");
      mensaje.style.border = "thin solid gray";
    } // mensaje

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