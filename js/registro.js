const formRegistro = document.getElementById("registroForm");

// Regex
const regexNombre = /^(?=(?:.*[A-Za-zÁÉÍÓÚáéíóúÑñ]){3,})[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+){0,4}$/;
const regexEmail = /^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const regexTel = /^(?:\+52\s*)?[1-9]\d(?:[\s-]?\d{4}){2}$/;
const regexSinEspacios = /^\S+$/;
const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,}$/;

// evento =======================================================================
formRegistro.addEventListener("submit", function (event) {
  event.preventDefault();

  let esValido = true;

  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const telefono = document.getElementById("telefono");
  const correo = document.getElementById("correo");
  const password = document.getElementById("password");
  const password1 = document.getElementById("password1");

  esValido = validarRegex(nombre, regexNombre) && esValido;
  esValido = validarRegex(apellidos, regexNombre) && esValido;
  esValido = validarRegex(telefono, regexTel) && esValido;
  esValido = validarRegex(correo, regexEmail) && esValido;
  esValido = validarPassword(password) && esValido;
  esValido = validarPasswordsIguales(password, password1) && esValido;

  formRegistro.classList.add("was-validated");

  if (!esValido) return;

  const usuariosPrevios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const existe = usuariosPrevios.some(
    u => u.correo === correo.value.trim()
  );

  if (existe) {
    alertaError("Este correo ya está registrado.");
    marcarInvalido(correo);
    return;
  }

  const nuevoUsuario = {
    id: Date.now(),
    nombre: nombre.value.trim(),
    apellidos: apellidos.value.trim(),
    telefono: telefono.value.trim(),
    correo: correo.value.trim(),
    password: btoa(password.value)
  };

  usuariosPrevios.push(nuevoUsuario);
  localStorage.setItem("usuarios", JSON.stringify(usuariosPrevios));

  localStorage.setItem(
    "usuarioActivo",
    JSON.stringify({
      id: nuevoUsuario.id,
      nombre: nuevoUsuario.nombre,
      correo: nuevoUsuario.correo
    })
  );

  alertaExito("¡Registro exitoso! Sesión iniciada", () => {
    window.location.href = "index.html";
  });

});//event

// funciones =================================================================
function validarRegex(input, regex) {
  if (!regex.test(input.value.trim())) {
    marcarInvalido(input);
    return false;
  }
  marcarValido(input);
  return true;
}

function validarPassword(input) {
  if (
    input.value.length < 8 ||
    !regexSinEspacios.test(input.value)
  ) {
    marcarInvalido(input);
    return false;
  }

  if (!regexPassword.test(input.value)) {
    marcarInvalido(input);
    return false;
  }

  marcarValido(input);
  return true;
}

function validarPasswordsIguales(p1, p2) {
  if (p1.value !== p2.value || p2.value === "") {
    marcarInvalido(p2);
    return false;
  }
  marcarValido(p2);
  return true;
}

function marcarInvalido(input) {
  input.classList.add("is-invalid");
  input.style.border = "thin solid red";
}

function marcarValido(input) {
  input.classList.remove("is-invalid");
  input.style.border = "thin solid gray";
}

function alertaError(mensaje) {
  Swal.fire({
    icon: "error",          
    title: "Error",
    text: mensaje,
    confirmButtonColor: "#d33"
  });
}

function alertaExito(mensaje, callback) {
  Swal.fire({
    icon: "success",        
    title: "Éxito",
    text: mensaje,
    confirmButtonColor: "#3085d6"
  }).then(() => {
    if (callback) callback();
  });
}