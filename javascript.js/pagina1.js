// Función para mostrar el mensaje de bienvenida y solicitar el nombre del usuario
function mostrarMensajeBienvenida() {
    alert("Bienvenido a la página principal");
    
    const nombre = prompt("Por favor, ingresa tu nombre para continuar:");
    
    if (nombre) {
        document.getElementById("saludo").textContent = "Hola, " + nombre + "! Bienvenido a la página principal.";
    } else {
        document.getElementById("saludo").textContent = "Hola! Bienvenido a la página principal.";
    }
}