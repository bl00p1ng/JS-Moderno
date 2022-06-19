(function() {
    // ********** VARIABLES Y SELECTORES **********
    let DB;

    const clientList = document.querySelector('#listado-clientes');

    // ********** EVENT LISTENERS **********
    document.addEventListener('DOMContentLoaded', () => {
        // Crear DB
        createDB;

        // Revisar si la DB ya esta creada
        if (window.indexedDB.open('crm', 1)) {
            // Obtener los clientes de la DB
            getClients();
        }

        // Borrar el cliente seleccionado
        clientList.addEventListener('click', deleteClient);
    });

    // ********** FUNCIONES **********
    function createDB() {
        // Crear DB en su versión 1.0
        const createDataBase = window.indexedDB.open('crm', 1);

        // Si la DB se crea correctamente
        createDataBase.onsuccess = () => DB = createDataBase.result;

        // Si ocurre un error al crear la DB
        createDataBase.onerror = () => console.error('Ocurrio un error a la hora de crear la base de datos');

        // Configurar la DB
        createDataBase.onupgradeneeded = e => {
            const db = e.target.result;
            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            // Campos del objectStore
            objectStore.createIndex('name', 'name', {unique: false});
            objectStore.createIndex('email', 'email', {unique: false});
            objectStore.createIndex('phone', 'phone', {unique: true});
            objectStore.createIndex('enterprise', 'enterprise', {unique: false});
            objectStore.createIndex('id', 'id', {unique: false});

            console.log('DB lista y creada');
        };
    }

    // Obtener los clientes de la DB
    function getClients() {
        // Abrir conexión con la DB
        const openConnection = window.indexedDB.open('crm', 1);

        // Si la conexión se abre correctamente
        openConnection.onsuccess = () => {
            DB = openConnection.result;
            console.log('Conexión con la DB exitosa');

            const objectStore = DB.transaction('crm').objectStore('crm');

            // Recorrer el objectStore
            objectStore.openCursor().onsuccess = function (e) {
                const cursor = e.target.result;

                if (cursor) {
                    // Extraer los datos de cada cliente de la DB
                    const {name, email, phone, enterprise, id} = cursor.value;

                    // Agregar los datos del cliente al DOM
                    clientList.innerHTML += `
                        <tr>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${name} </p>
                                <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                                <p class="text-gray-700">${phone}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                                <p class="text-gray-600">${enterprise}</p>
                            </td>
                            <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                                <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                                <a href="#" data-cliente="${id}" class="delete text-red-600 hover:text-red-900">Eliminar</a>
                            </td>
                        </tr>
                    `;

                    cursor.continue();
                }
            };
        };

        // Si hay un error al abrir la conexión
        openConnection.onerror = () => console.error('Ocurrio un error al abrir la conexión');
    }

    // Borrar un cliente
    function deleteClient(e) {
        e.preventDefault();

        // Verificar si se da click al botón de eliminar
        if (e.target.classList.contains('delete')) {
            const idToDelete = Number(e.target.dataset.cliente);

            // Confirmar la eliminación del cliente
            const confirmDelete = confirm('¿Deseas eliminar este cliente?');

            // Eliminar el cliente
            if (confirmDelete) {
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm');

                objectStore.delete(idToDelete);

                // Si el cliente se elimina exitosamente
                transaction.oncomplete = () => {
                    // Eliminar cliente del DOM
                    e.target.parentElement.parentElement.remove();
                    console.log('Cliente eliminado correctamente');
                };

                // Si ocurre un error
                transaction.onerror = () => console.error('Ocurrio un error al borrar el cliente');
            }
        }
    }
})();
