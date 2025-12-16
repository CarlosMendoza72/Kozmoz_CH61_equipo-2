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
    alert("Correo o contraseña incorrectos");
    return;
  }

  // Guardar sesión
  localStorage.setItem("usuarioActivo", JSON.stringify({
    id: usuario.id,
    nombre: usuario.nombre,
    correo: usuario.correo
  }));

  alert("Sesión iniciada");
  window.location.href = "index.html";
});