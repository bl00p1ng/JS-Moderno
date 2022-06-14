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

    // Añadir una nueva cita al array appointments
    addAppointment(appointment) {
        this.appointments = [...this.appointments, appointment];
    }

    // Eliminar cita en base a su id
    deleteAppointment(id) {
        this.appointments = this.appointments.filter(appointment => appointment.id !== id);
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

    // Mostrar cita en el HTML
    showAppointment({appointments}) {
        // Limpiar HTML
        this.clearHTML();

        appointments.forEach(appointment => {
            const {pet, owner, phone, date, hour, symptoms, id} = appointment;

            const appointmentView = document.createElement('div');
            appointmentView.classList.add('cita', 'p-3');
            appointmentView.dataset.id = id;

            // DOM Scripting de cada elemento
            const pPet = document.createElement('h2');
            pPet.textContent = pet;
            pPet.classList.add('card-title', 'font-weight-bolder');
            appointmentView.appendChild(pPet);

            const pOwner = document.createElement('p');
            pOwner.innerHTML = `<span class="font-weight-bolder">Propietario: </span>${owner}`;
            appointmentView.appendChild(pOwner);

            const pPhone = document.createElement('p');
            pPhone.innerHTML = `<span class="font-weight-bolder">Teléfono: </span>${phone}`;
            appointmentView.appendChild(pPhone);

            const pDate = document.createElement('p');
            pDate.innerHTML = `<span class="font-weight-bolder">Fecha: </span>${date}`;
            appointmentView.appendChild(pDate);

            const pHour = document.createElement('p');
            pHour.innerHTML = `<span class="font-weight-bolder">Hora: </span>${hour}`;
            appointmentView.appendChild(pHour);

            const pSymptoms = document.createElement('p');
            pSymptoms.innerHTML = `<span class="font-weight-bolder">Síntomas: </span>${symptoms}`;
            appointmentView.appendChild(pSymptoms);

            // Boton para borrar cita
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'mr-2');
            deleteBtn.innerHTML = `Eliminar <svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`;
            appointmentView.appendChild(deleteBtn);

            deleteBtn.onclick = () => {
                deleteAppointment(id);
            }

            // Agregar citas al HTML
            appointmentContainer.appendChild(appointmentView);
        });
    }

    // Limpiar el HTML existente
    clearHTML() {
        while (appointmentContainer.firstChild) {
            appointmentContainer.removeChild(appointmentContainer.firstChild);
        }
    }
}

// Instanciar clases
const manageAppointment = new Appointments();
const ui = new UI();

// FUNCIONES
// Añade datos al objeto de cita (appointmentObj)
function appointmentData(e) {
    // Usa name como key para asignarle valores a appointmentObj
    appointmentObj[e.target.name] = e.target.value;
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

    // Generar un ID único para cada cita
    appointmentObj.id = Date.now();

    // Crear una nueva cita
    // Toma una copia de appointmentObj para evitar que se sobreescriba el objeto
    manageAppointment.addAppointment({...appointmentObj});

    // Reiniciar objeto
    resetAppointmentObj();

    // Reiniciar form
    form.reset();

    // Mostrar cita creada
    ui.showAppointment(manageAppointment);
}

// Resetear el objeto global con los datos de la cita (appointmentObj)
function resetAppointmentObj() {
    appointmentObj.pet = '';
    appointmentObj.owner = '';
    appointmentObj.phone = '';
    appointmentObj.date = '';
    appointmentObj.hour = '';
    appointmentObj.symptoms = '';
}

// Eliminar una cita por su id
function deleteAppointment(id) {
    // Eliminar la cita en la clase Appointments
    manageAppointment.deleteAppointment(id);

    // Mostrar un mensaje
    ui.showAlert('Cita eliminada correctamente');

    // Actualizar la vista
    ui.showAppointment(manageAppointment);
}