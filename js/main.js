// Acordeon de acerca de nosotros ========================================
const accordion = document.getElementsByClassName('container');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}

// FETCH - USUARIOS ===========================================================================================

const txtEmail = document.getElementById("txtEmail");
const txtPassword = document.getElementById("txtPassword");
const btnIngresar = document.getElementById("btnIngresar");
const URL_MAIN = "http://localhost:8080/api/"; //separado de las githubpages
//const URL_MAIN = "/api/"; //separado de las githubpages

btnIngresar.addEventListener("click", function(event) {
    event.preventDefault();

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
});