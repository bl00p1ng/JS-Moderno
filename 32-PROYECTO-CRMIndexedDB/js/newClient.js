(function() {
    // ********** VARIABLES Y SELECTORES **********
    let DB;

    const form = document.querySelector('#formulario');

    // ********** EVENT LISTENERS **********
    document.addEventListener('DOMContentLoaded', () => {
        connectDB();

        // Envio del form
        form.addEventListener('submit', validateClient);
    });

    // ********** FUNCIONES **********
    function connectDB() {
        // Abrir la conexión con la DB
        const openConection = window.indexedDB.open('crm', 1);

        // Si la conexión se abre correctamente
        openConection.onsuccess = () => {
            DB = openConection.result;
            console.log('Conexión con la DB establecida');
        };

        // Si ocurre un error al abrir la conexión
        openConection.onerror = () => console.log('Hubo un error al conectarse a la DB');
    }

    // Obtener y validar los datos de un cliente ingresado en el form
    function validateClient(e) {
        e.preventDefault();

        // Validar si ya se mostrarndo una alerta para evitar crear una nueva
        const alertElement = document.querySelector('.alert');

        if (!alertElement) {
            // Leer todos los inputs
            const name = document.querySelector('#nombre').value;
            const email = document.querySelector('#email').value;
            const phone = document.querySelector('#telefono').value;
            const enterprise = document.querySelector('#empresa').value;
    
            // Validar que los campos no esten vacios
            if (name === '' || email === '' || phone === '' || enterprise === '') {
                showAlert('Todos los campos son obligatorios', 'error');
            }
        }

    }

    // Mostrar un mensaje de alerta en el DOM
    function showAlert(alertMsg, alertType) {
        // Crear alerta
        const alert = document.createElement('div');
        alert.classList.add('px-4', 'py-3', 'rounded', 'border', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center', 'alert');
        msg = document.createElement('p');
        msg.innerText = alertMsg;
        alert.appendChild(msg);

        // Validar el tipo de alerta para cambiar su apariencia
        if (alertType === 'error') {
            alert.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
        } else {
            alert.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
        }

        // Agregar alerta al HTML
        form.appendChild(alert);

        // Ocultar alerta después de 3 segundos
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
})();