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
    petInput.addEventListener('input', appointmentData);
    ownerInput.addEventListener('input', appointmentData);
    phoneInput.addEventListener('input', appointmentData);
    dateInput.addEventListener('input', appointmentData);
    hourInput.addEventListener('input', appointmentData);
    symptomsInput.addEventListener('input', appointmentData);
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


// FUNCIONES
// Añade datos al objeto de cita (appointmentObj)
function appointmentData(e) {
    // Usa name como key para asignarle valores a appointmentObj
    appointmentObj[e.target.name] = e.target.value;
    console.log(appointmentObj);
}
