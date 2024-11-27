// Inicializar EmailJS
emailjs.init("kPLpAuQGHlNKJBmB5");

// Formulario: enviar datos por EmailJS
document.addEventListener("DOMContentLoaded", () => {
    const employeeForm = document.getElementById("employeeForm");
    const limpiarForm = document.getElementById("limpiarForm");

    if (employeeForm) {
        employeeForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Recopilar datos del formulario
            const formData = new FormData(employeeForm);
            const data = {
                nombre: formData.get("nombre"),
                apellido: formData.get("apellido"),
                calificacion: formData.get("calificacion"),
                observaciones: formData.get("observaciones"),
                mensaje: `Mensaje enviado por ${formData.get("nombre")} ${formData.get("apellido")}`,
            };

            // Enviar los datos a través de EmailJS
            emailjs.send("service_ehs41qb", "template_fymuv3b", data)
                .then(() => {
                    alert("Formulario enviado correctamente");
                    employeeForm.reset(); // Limpiar el formulario
                })
                .catch(() => alert("Error al enviar formulario"));
        });

        // Botón para limpiar el formulario
        limpiarForm.addEventListener("click", () => employeeForm.reset());
    }
});
