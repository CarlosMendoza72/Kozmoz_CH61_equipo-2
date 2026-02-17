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
//=========================================================================================================
// FETCH - LOGIN
//=========================================================================================================

const txtEmail = document.getElementById("correo");
const txtPassword = document.getElementById("password");
const btnIngresar = document.getElementById("btnIngresar");
const URL_MAIN = "http://localhost:8080/api/";
//const URL_MAIN = "/direccion IP/"; //separado de las githubpages

//POST ====================================================================================================

btnIngresar.addEventListener("click", function(event) {
    event.preventDefault();

  //Validacion de los campos

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        //"name": txtName,               //en nuestra ecommerce Kozmoz
        "email": txtEmail.value,
        "password": txtPassword.value
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    }

    fetch (URL_MAIN + "login/", requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
            console.log("Token", result.accessToken);
            if (result.accessToken == undefined) {
                Swal.fire({
                title: "Login",
                text: "Nombre de usuario o contraseña incorrectos",
                icon: "error"
            });
            return;
            }//if result undefined
            sessionStorage.setItem("token", result.accessToken);
            Swal.fire({
                title: "Login",
                text: "Se ha ingresado satisfactoriamente",
                icon: "success"
            });
            txtEmail.value = "";
            txtPassword.value = "";
            //redireccionamiento
        })/*then*/
        .catch((error) => {
            console.error(error);
            Swal.fire({
                title: "Login",
                text: "Se ha producido un error" + error,
                icon: "error"
            });
        });
}); //evento

//POST ====================================================================================================