import {getClients, deleteRecord} from './API.js';

(() => {
    // ********** SELECTORES **********
    const clientsList = document.querySelector('#listado-clientes');

    // ********** EVENT LISTENERS **********
    // Mostrar los clientes al terminar de cargar la página
    document.addEventListener('DOMContentLoaded', showClients);
    // Pulsar el botón de eliminar
    clientsList.addEventListener('click', deleteClient);

    // ********** FUNCIONES **********
    // Mostrar el listado de clientes en la UI
    async function showClients() {
        // Traer el listado de clientes de la API
        const clients = await getClients();

        // Mostrar el listado
        clients.forEach(client => {
            const {name, email, phone, enterprise, id} = client;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-sm leading-5 font-medium text-gray-700 text-lg font-bold">${name}</p>
                    <p class="text-sm leading-10 text-gray-700">${email}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <p class="text-gray-700">${phone}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 leading-5 text-gray-700">
                    <p class="text-gray-600">${enterprise}</p>
                </td>
                <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                    <a class="text-teal-600 hover:text-teal-900 mr-5" href="editar-cliente.html?id=${id}">Editar</a>
                    <a class="text-red-500 hover:text-red-900 delete" href="#" data-client="${id}">Eliminar</a>
                </td>
            `;

            clientsList.appendChild(row);
        });
    }

    // Eliminar un cliente
    function deleteClient(e) {
        // Verificar si se está pulsando el botón de eliminar
        if (e.target.classList.contains('delete')) {
            const clientID = parseInt(e.target.dataset.client);

            // Confirmar la acción de eliminar
            const confirmDelete = confirm('¿Deseas eliminar este registro?');

            // Eliminar registro
            if (confirmDelete) {
                deleteRecord(clientID);
            }
        }
    }
})();