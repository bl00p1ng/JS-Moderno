// VARIABLES Y SELECTORES
const form = document.querySelector('#nueva-cita');

const petInput = document.querySelector('#mascota');
const ownerInput = document.querySelector('#propietario');
const phoneInput = document.querySelector('#telefono');
const dateInput = document.querySelector('#fecha');
const hourInput = document.querySelector('#hora');
const symptomsInput = document.querySelector('#sintomas');

const appointmentContainer = document.querySelector('#citas');

// EVENT LISTENERS
eventListeners();
function eventListeners() {
    // Campos del formulario
    petInput.addEventListener('input', appointmentData);
    ownerInput.addEventListener('input', appointmentData);
    phoneInput.addEventListener('input', appointmentData);
    dateInput.addEventListener('input', appointmentData);
    hourInput.addEventListener('input', appointmentData);
    symptomsInput.addEventListener('input', appointmentData);

    // Formulario
    form.addEventListener('submit', newAppointment);
}

// Objeto con información de la cita
const appointmentObj = {
    pet: '',
    owner: '',
    phone: '',
    date: '',
    hour: '',
    symptoms: ''
};

// CLASES
class Appointments {
    constructor() {
        this.appointments = [];
    }
}

class UI {
    // Mostrar un mensaje de alerta
    showAlert(msg, alertType) {
        // Crear el div contenedor de la alerta
        const alertDiv = document.createElement('div');
        alertDiv.classList.add('text-center', 'alert', 'd-block', 'col-12');

        // Crear el párrafo con el mensaje de alerta
        const alertMsg = document.createElement('p');
        alertMsg.textContent = msg;
        alertMsg.classList.add('font-weight-bold', 'mb-0');
        alertDiv.appendChild(alertMsg);

        // Validar tipo de alerta
        if (alertType === 'error') {
            alertDiv.classList.add('alert-danger');
        } else {
            alertDiv.classList.remove('alert-danger');
            alertDiv.classList.add('alert-success');
        }

        // Agregar alerta al HTML
        document.querySelector('#contenido').insertBefore(alertDiv, document.querySelector('.agregar-cita'));

        // Eliminar mensaje de alerta despues de 3 segundos
        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
}

// Instanciar clases
const appointment = new Appointments();
const ui = new UI();

// FUNCIONES
// Añade datos al objeto de cita (appointmentObj)
function appointmentData(e) {
    // Usa name como key para asignarle valores a appointmentObj
    appointmentObj[e.target.name] = e.target.value;
    console.log(appointmentObj);
}

// Valida y crea una nueva cita
function newAppointment(e) {
    e.preventDefault();

    // Extraer datos de appointmentObj
    const {pet, owner, phone, date, hour, symptoms} = appointmentObj;

    // Validar datos ingresados por el usuario
    if (pet === '' || owner === '' || phone === '' || date === '' || hour === '' | symptoms === '') {
        ui.showAlert('Todos los campos son obligatorios', 'error');
        return;
    }
}
