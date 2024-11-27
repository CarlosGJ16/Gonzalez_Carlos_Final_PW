// Definir un usuario y contraseña de ejemplo
const validUsername = "USER";
const validPassword = "PASS";

// Inicializar EmailJS con tu usuario
emailjs.init("kPLpAuQGHlNKJBmB5");

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar el envío del formulario

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si coinciden con los valores definidos
    if (username === validUsername && password === validPassword) {
        // Mostrar mensaje de éxito
        document.getElementById("success-message").style.display = "block";
        document.getElementById("error-message").style.display = "none";

        // Redirigir a la página principal
        setTimeout(function() {
            window.location.href = "pagina_principal.html";
        }, 2000);  // Redirige después de 2 segundos

        // Enviar un correo electrónico indicando que el usuario ha ingresado
        const emailParams = {
            username: username,  // Solo el nombre de usuario
        };

        // Enviar el correo usando EmailJS
        emailjs.send("service_ehs41qb", "template_2qe41t7", emailParams)
            .then(function(response) {
                console.log("Correo enviado con éxito", response);
            }, function(error) {
                console.error("Error al enviar el correo", error);
            });

    } else {
        // Mostrar mensaje de error
        document.getElementById("error-message").style.display = "block";
        document.getElementById("success-message").style.display = "none";

        console.log("Login fallido: Usuario o contraseña incorrectos");

        // Enviar un correo electrónico si el login falla
        const emailParams = {
            username: username,  // Solo el nombre de usuario
        };

        // Enviar el correo usando EmailJS
        emailjs.send("service_uavqvsl", "template_0vdsxvu", emailParams)
            .then(function(response) {
                console.log("Correo enviado con éxito", response);
            }, function(error) {
                console.error("Error al enviar el correo", error);
            });
    }
});
