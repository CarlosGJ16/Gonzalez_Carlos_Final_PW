// Función para calcular el precio total de un producto (precio * cantidad)
function calcularTotalProducto() {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad:"));

    if (isNaN(precio) || isNaN(cantidad)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let total = precio * cantidad;
    document.getElementById("resultado-text").innerText = `El total por los productos es: $${total.toFixed(2)}`;
}

// Función para calcular el 30% de un precio
function calcularPorcentaje() {
    let precio = parseFloat(prompt("Ingrese el precio:"));

    if (isNaN(precio)) {
        alert("Por favor, ingrese un valor válido.");
        return;
    }

    let porcentaje = (30 / 100) * precio;
    document.getElementById("resultado-text").innerText = `El 30% del precio es: $${porcentaje.toFixed(2)}`;
}

// Función para calcular el precio con descuento considerando la cantidad
function calcularDescuento() {
    let precio = parseFloat(prompt("Ingrese el precio del producto:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad:"));
    let descuento = parseFloat(prompt("Ingrese el descuento (%):"));

    if (isNaN(precio) || isNaN(cantidad) || isNaN(descuento)) {
        alert("Por favor, ingrese valores válidos.");
        return;
    }

    let totalSinDescuento = precio * cantidad;
    let descuentoTotal = (descuento / 100) * totalSinDescuento;
    let totalConDescuento = totalSinDescuento - descuentoTotal;

    document.getElementById("resultado-text").innerText = `El total con descuento es: $${totalConDescuento.toFixed(2)}`;
}
