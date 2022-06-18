(function() {
    // ********** VARIABLES Y SELECTORES **********
    let DB;
    let idClient;

    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const enterpriseInput = document.querySelector('#empresa');
    const form = document.querySelector('#formulario');

    // ********** EVENT LISTENERS **********
    document.addEventListener('DOMContentLoaded', () => {
        // Conectarse a la DB
        connectDB();

        // Verificar el ID de la URL
        const parametersURL = new URLSearchParams(window.location.search);

        // Obtener el ID de los parámetros de la URL
        idClient = parametersURL.get('id');

        // Obtener cliente en base a su ID
        if (idClient) {
            // Esperar 100ms para que termine la ejecución de la conexión a la DB
            setTimeout(() => {
                getClientByID(idClient);
            }, 100);
        }

        // Actualizar cliente con los datos del form
        form.addEventListener('submit', updateClient);
    });

    // ********** FUNCIONES **********
    // Establecer una conexión con la DB
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

    // Obtener un cliente en la DB en base a su ID
    function getClientByID(id) {
        const transaction = DB.transaction(['crm'], 'readonly');
        const objectStore = transaction.objectStore('crm');

        const client = objectStore.openCursor();

        // Si la conexión con la DB es exitosa
        client.onsuccess = e => {
            const cursor = e.target.result;

            if (cursor) {
                // Verificar si el cursor del cliente es igual al ID del cliente a editar
                if (cursor.value.id === Number(id)) {
                    // Llenar form con los datos del cliente a editar
                    fillForm(cursor.value);
                }

                cursor.continue();
            }
        };
    }

    // Llenar el form con los datos del cliente a editar
    function fillForm(clientData) {
        const {name, email, phone, enterprise, id} = clientData;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        enterpriseInput.value = enterprise;
    }

    // Actualizar cliente
    function updateClient(e) {
        e.preventDefault();

        // Validar que no existan campos vacios
        if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || enterpriseInput.value ==='') {
            showAlert('Todos los campos son obligatorios', 'error');

            return;
        }

        // Actualizar los datos del cliente
        const clientUpdated = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            enterprise: enterpriseInput.value,
            id: Number(idClient),
        };

        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');

        objectStore.put(clientUpdated);

        // Si el cliente se actualiza correctamente
        transaction.oncomplete = () => {
            showAlert('Cliente actualizado');

            // Redireccionar al index.html después de 3s
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 3000);
        };

        // Si hay un error al actualizar
        transaction.onerror = () => showAlert('Hubo un error al actualizar el cliente', 'error');
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