const formLogin = document.getElementById("loginForm");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const password = document.getElementById("password").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const usuario = usuarios.find(
    u => u.correo === correo && atob(u.password) === password
  );

  if (!usuario) {
    alertaError("Correo no registrado");
    return;
  }

  // Guardar sesión
  localStorage.setItem("usuarioActivo", JSON.stringify({
    id: usuario.id,
    nombre: usuario.nombre,
    correo: usuario.correo
  }));

  alertaExito("Sesión iniciada", () => {
    window.location.href = "index.html";
  });
});

// funciones =================================================================================================

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