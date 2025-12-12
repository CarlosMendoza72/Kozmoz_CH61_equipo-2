  // Regex
    const regexNombre = /^(?=(?:.*[A-Za-zÁÉÍÓÚáéíóúÑñ]){3,})[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?:\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+){0,4}$/;
    const regexEmail = /^[A-Za-z0-9]+([._%+-]?[A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*\.[A-Za-z]{2,}$/;
    const regexSinEspacios = /^\S+$/;
    const regexTel = /^(?:\+52\s*)?[1-9]\d(?:[\s-]?\d{4}){2}$/;
    const regexpassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/;

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el envío automático del formulario

    // 1. Limpiar errores previos
    document.querySelectorAll('.error').forEach(el => el.innerText = '');

    // 2. Obtener valores de los campos
    const fullName = document.getElementById('nombres').value.trim();
    const lastName = document.getElementById('apellidos').value.trim();
    const phone = document.getElementById('telefono').value.trim();
    const email = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password1').value;

    let isValid = true;

    // 3. Validaciones de campos vacíos y longitud
    if (fullName === '') {
        document.getElementById('fullNameError').innerText = 'El nombre completo es obligatorio.';
        isValid = false;
    }
     if (lastName === '') {
        document.getElementById('lastNameError').innerText = 'El apellido es obligatorio.';
        isValid = false;
    }
    if (phone === '') {
        document.getElementById('phoneError').innerText = 'El número de teléfono es obligatorio.';
        isValid = false;
    }
    if (email === '') {
        document.getElementById('emailError').innerText = 'El email es obligatorio.';
        isValid = false;
    }
    if (!regexSinEspacios.test(password)){
        console.log("La contraseña no debe tener espacios.");
        document.getElementById('passwordError').innerText = 'La contraseña no debe tener espacios.';
        isValid = false;
    }
    if (password.length < 8) { // Ejemplo de longitud mínima de 8 caracteres.
       console.log("La contraseña debe contener al menos 8 caracteres.");
        document.getElementById('passwordError').innerText = 'La contraseña debe tener al menos 8 caracteres.';
        isValid = false;
    }

    // 4. Validación de coincidencia de contraseñas
    if (password !== confirmPassword) {
        console.log("Las contraseñas no coinciden, papito ;)");
        document.getElementById('confirmPasswordError').innerText = 'Las contraseñas no coinciden.';
        isValid = false;
    }

    // 5. Validación de formato de Email usando RegEx
    if (!regexEmail.test(email)) {
        document.getElementById('emailError').innerText = 'El formato del email no es válido.';
        isValid = false;
    }
// 6. Validación de formato de Teléfono usando RegEx (ejemplo para 10 dígitos)
    if (!regexTel.test(phone)) {
        document.getElementById('phoneError').innerText = 'El teléfono debe tener 10 dígitos numéricos.';
        isValid = false;
    }

    // 7. Procesar si todo es válido
    if (isValid) {
        // Crear objeto JSON con los datos del usuario
        const userData = {
            fullName: fullName,
            lastName: lastName,
            phone: phone,
            email: email,
            // Nota: nunca se debe almacenar contraseñas en texto plano en localStorage en una aplicación real/de producción.
            password: password 
        };

        // Convertir el objeto a cadena JSON y guardar en localStorage
        localStorage.setItem('currentUser', JSON.stringify(userData));

        alert('¡Registro exitoso! Datos guardados localmente.');
        // Limpiar el formulario
        event.target.reset();
    } else {
        alert('Por favor, corrige los errores en el formulario.');
    }
});