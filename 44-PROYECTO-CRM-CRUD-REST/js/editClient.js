import {getClientByID} from './API.js';

(() => {
    // ********** SELECTORES **********
    const nameInput = document.querySelector('#nombre');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#telefono');
    const enterpriseInput = document.querySelector('#empresa');
    const idInput = document.querySelector('#id');

    // ********** EVENT LISTENERS **********
    document.addEventListener('DOMContentLoaded', async () => {
        // Obtener ID de la URL
        const urlParams = new URLSearchParams(window.location.search);

        const clientID = parseInt(urlParams.get('id'));
        const clientToUpdate = await getClientByID(clientID);
        
        // Completar con los datos los campos del form
        fillForm(clientToUpdate);
    });

    // ********** FUNCIONES **********
    // Toma los datos del cliente a actualizar y los usa para llenar el form
    function fillForm(client) {
        const {name, email, phone, enterprise, id} = client;

        // Llenar los campos del form
        nameInput.value = name;
        emailInput.value = email;
        phoneInput.value = phone;
        enterpriseInput.value = enterprise;
        idInput.value = id;
    }
})();