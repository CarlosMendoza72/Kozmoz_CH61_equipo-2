const formRegistro = document.getElementById("loginForm");

// Regex
const regexNombre = /^(?=(?:.*[A-Za-zÁÉÍÓÚáéíóúÑñ]){3,})[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+){0,4}$/;
const regexEmail = /^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
const regexTel = /^(?:\+52\s*)?[1-9]\d(?:[\s-]?\d{4}){2}$/;
const regexSinEspacios = /^\S+$/;
const regexPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])\S{8,}$/;

formRegistro.addEventListener("submit", function (event) {
    event.preventDefault();

    let esValido = true;

    // Inputs
    const nombre = document.getElementById("nombre");
    const apellidos = document.getElementById("apellidos");
    const telefono = document.getElementById("telefono");
    const correo = document.getElementById("correo");
    const password = document.getElementById("password");
    const password1 = document.getElementById("password1");

    // ===== VALIDACIONES =====

    esValido &= validarRegex(nombre, regexNombre);
    esValido &= validarRegex(apellidos, regexNombre);
    esValido &= validarRegex(telefono, regexTel);
    esValido &= validarRegex(correo, regexEmail);
    esValido &= validarPassword(password);
    esValido &= validarPasswordsIguales(password, password1);

    formRegistro.classList.add("was-validated");

    if (!esValido) return;

    // === Crear el objeto JSON con los datos del formulario ===
    const usuario = {
        nombre: nombre.value.trim(),
        apellidos: apellidos.value.trim(),
        telefono: telefono.value.trim(),
        correo: correo.value.trim(),
        password: password.value 
    };

    // === Almacenar en localStorage ===
    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuario));

    alert("¡Registro exitoso!");
    
    
    formRegistro.reset();
    formRegistro.classList.remove("was-validated");
    
});
// Guardar los datos 
    const datosGuardados = localStorage.getItem("usuarioRegistrado");

if (datosGuardados) {
    const usuarioObjeto = JSON.parse(datosGuardados);
    console.log("Nombre guardado:", usuarioObjeto.nombre);
}

// Funciones

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

