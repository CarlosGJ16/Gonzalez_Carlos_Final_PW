// Inicializar EmailJS
emailjs.init("kPLpAuQGHlNKJBmB5");

document.addEventListener('DOMContentLoaded', () => {
    const personalForm = document.getElementById('personalForm');
    const limpiarForm = document.getElementById('limpiarForm');

    // Envío del formulario
    personalForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(personalForm);
        const data = {
            firstName: formData.get('nombre'),
            lastName: formData.get('apellido'),
            email: formData.get('email'),
        };

        emailjs.send('service_ehs41qb', 'template_2qe41t7', data)
            .then(() => {
                alert('Formulario enviado correctamente');
                personalForm.reset();
            })
            .catch(() => {
                alert('Hubo un error al enviar el formulario');
            });
    });

    // Limpiar formulario
    limpiarForm.addEventListener('click', () => {
        personalForm.reset();
    });

    // Cargar API de imagen aleatoria
    function loadImageAPI() {
        const randomImage = document.getElementById('randomImage');
        randomImage.src = `https://picsum.photos/200/300?random=${Math.floor(Math.random() * 1000)}`;
    }

    // Cambiar la imagen al presionar el botón
    const changeImageBtn = document.getElementById('changeImageBtn');
    changeImageBtn.addEventListener('click', loadImageAPI);

    // Llamar la función para cargar la imagen inicialmente
    loadImageAPI();
    // Variables globales
    let planets = [];
    let currentIndex = 0;

    // Cargar API del Sistema Solar
    function loadSolarSystemAPI() {
        const planetDetails = document.getElementById('planetDetails');
        const planetName = document.getElementById('planetName');
        const planetType = document.getElementById('planetType');
        const nextPlanetBtn = document.getElementById('nextPlanetBtn');

        fetch('https://api.le-systeme-solaire.net/rest/bodies/')
            .then(response => response.json())
            .then(data => {
                // Filtrar los planetas
                planets = data.bodies.filter(body => body.isPlanet);

                if (planets.length > 0) {
                    // Mostrar el primer planeta
                    showPlanet(0);
                }

                // Evento para cambiar de planeta
                nextPlanetBtn.addEventListener('click', () => {
                    currentIndex = (currentIndex + 1) % planets.length; // Ciclo infinito
                    showPlanet(currentIndex);
                });
            })
            .catch(error => {
                console.error('Error al cargar el sistema solar:', error);
            });

        function showPlanet(index) {
            const planet = planets[index];
            planetName.textContent = `Nombre: ${planet.englishName}`;
            planetType.textContent = `Tipo: ${planet.isPlanet ? 'Planeta' : 'No Planeta'}`;
        }
    }

    // Cargar los datos al cargar la página
    loadSolarSystemAPI();
});



