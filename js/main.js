
// Acerca de nosotros ============================================================

const accordion = document.getElementsByClassName('container');

for (let i=0; i<accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active')
  });
}

// Acerca de nosotros ============================================================

// Contactos ============================================================
console.log("Hola");

// Validación formulario
const formLucha = document.getElementById("formLucha");
const mensajeExito = document.getElementById("mensajeExito");

if (formLucha) {
  formLucha.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!formLucha.checkValidity()) {
      formLucha.classList.add("was-validated");
    } else {
      // Datos del formulario
      const datosFormulario = {
        tipoCliente: document.getElementById("tipoCliente").value,
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        mensaje: document.getElementById("mensaje").value,
        fecha: new Date().toLocaleString(),
      };

      // Imprimir en consola
      console.log("Formulario enviado:", datosFormulario);

      // Mostrar éxito y limpiar
      formLucha.classList.remove("was-validated");
      mensajeExito.classList.remove("d-none");
      formLucha.reset();

      setTimeout(() => {
        mensajeExito.classList.add("d-none");
      }, 3000);
    }
  });
}

// Contactos ============================================================


