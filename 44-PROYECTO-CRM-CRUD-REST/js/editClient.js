import {getClientByID, updateClient} from './API.js';
import {hasEmpty, showAlert} from './functions.js'

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

        // Envío del form
        const form = document.querySelector('#formulario');
        form.addEventListener('submit', validateClient);
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

    // Validar la información del formulario
    function validateClient(e) {
        e.preventDefault();

        // Obtener datos del form
        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#telefono').value;
        const enterprise = document.querySelector('#empresa').value;

        // Guarda los datos actualizados en un objeto
        const clientUpdated = {
            name: nameInput.value,
            email: emailInput.value,
            phone: phoneInput.value,
            enterprise: enterpriseInput.value, 
            id: parseInt(idInput.value)
        };

        // Revisar si existen campos vacíos
        if (hasEmpty(clientUpdated)) {
            // Mostrar mensaje de error
            showAlert('Todos los campos son obligatorios');
            return;
        }

        // Actualizar cliente en la API
        updateClient(clientUpdated);
    }
})();