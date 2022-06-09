// VARIABLES
const sendBtn = document.querySelector('#enviar');
const form = document.querySelector('#enviar-mail');
// Campos del form
const email = document.querySelector('#email');
const subject = document.querySelector('#asunto');
const msg = document.querySelector('#mensaje');

const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
    // Validar que el campo no este vacío
    if (e.target.value.length > 0) {
        // Limpiar mensajes de error
        error = document.querySelector('p.error');

        if (error) {
            error.remove();
        }

        // Cambiar el color del borde si el campo tiene texto
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        // Agregar bordes rojos al campo vacio
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');

        // Mostrar un mensaje de error
        showError('Todos los campos son obligatorios');
    }

    // Validar email
    if (e.target.type === 'email') {
        // Este método funciona pero lo ideal es usar regEx
        // const result = e.target.value.indexOf('@');

        if (regEx.test(e.target.value)) {
            // Limpiar mensajes de error
            error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
    
            // Cambiar el color del borde si el email es válido
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        } else {
            // Agregar bordes rojos si el email es incorrecto
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');

            showError('El email no es válido');
        }
    }

    if (regEx.test(email.value) !== '' && subject.value !== '' && msg.value !== '') {
        sendBtn.setAttribute('disable', 'false');
        sendBtn.classList.remove('cursor-not-allowed', 'opacity-50');
    } else {
        console.log('Hay campos por validar');
    }
}

// Mostrar un error en el form
function showError(msg) {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = msg;
    errorMsg.classList.add('error', 'border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center');
    
    const errors = document.querySelectorAll('.error');
    
    if (errors.length === 0) {
        form.appendChild(errorMsg);
    }
}