(function() {
    // ********** VARIABLES Y SELECTORES **********
    let DB;

    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const enterpriseInput = document.querySelector('#empresa');

    // ********** EVENT LISTENERS **********
    document.addEventListener('DOMContentLoaded', () => {
        // Conectarse a la DB
        connectDB();

        // Verificar el ID de la URL
        const parametersURL = new URLSearchParams(window.location.search);

        // Obtener el ID de los parámetros de la URL
        const idClient = parametersURL.get('id');

        // Obtener cliente en base a su ID
        if (idClient) {
            // Esperar 100ms para que termine la ejecución de la conexión a la DB
            setTimeout(() => {
                getClientByID(idClient);
            }, 100);
        }
    });

    // ********** FUNCIONES **********
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

    // Llenar el form con los datos del cliente a editar
    function fillForm(clientData) {
        const {name, email, phone, enterprise, id} = clientData;

        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        enterpriseInput.value = enterprise;
    }
})();