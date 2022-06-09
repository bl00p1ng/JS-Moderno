// VARIABLES
const sendBtn = document.querySelector('#enviar');
// Campos del form
const email = document.querySelector('#email');
const subject = document.querySelector('#asunto');
const msg = document.querySelector('#mensaje');

// FUNCIONES
eventListeners();
function eventListeners() {
    // Cuando la App arranca
    document.addEventListener('DOMContentLoaded', startApp);

    // Campos del form
    email.addEventListener('blur', validateForm);
    subject.addEventListener('blur', validateForm);
    msg.addEventListener('blur', validateForm);
}

function startApp() {
    console.log('Iniciando...');
}

// Validar el formulario
function validateForm(e) {
    if (e.target.value.length > 0) {
        console.log('Si hay algo');
    } else {
        e.target.classList.add('border', 'border-red-500');
    }
}