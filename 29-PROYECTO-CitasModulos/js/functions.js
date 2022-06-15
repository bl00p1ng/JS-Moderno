import Appointments from "./class/Appointments.js";
import UI from "./class/UI.js";
import {petInput, 
        ownerInput, 
        phoneInput, 
        dateInput, 
        hourInput, 
        symptomsInput, 
        form} from './selectors.js'

// FUNCIONES

// Instanciar clases
const manageAppointment = new Appointments();
const ui = new UI();

let isEditing;  // Habilita el modo edición

// Objeto con información de la cita
const appointmentObj = {
    pet: '',
    owner: '',
    phone: '',
    date: '',
    hour: '',
    symptoms: ''
};

// Añade datos al objeto de cita (appointmentObj)
export function appointmentData(e) {
    // Usa name como key para asignarle valores a appointmentObj
    appointmentObj[e.target.name] = e.target.value;
}

// Valida y crea una nueva cita
export function newAppointment(e) {
    e.preventDefault();

    // Extraer datos de appointmentObj
    const {pet, owner, phone, date, hour, symptoms} = appointmentObj;

    // Validar datos ingresados por el usuario
    if (pet === '' || owner === '' || phone === '' || date === '' || hour === '' | symptoms === '') {
        ui.showAlert('Todos los campos son obligatorios', 'error');
        return;
    }

    if (isEditing) {
        // Pasar el objeto de la cita (appointmentObj) a edición
        manageAppointment.editAppointment({...appointmentObj});

        // Mensaje de editado correctamente
        ui.showAlert('Cita editada correctamente');

        // Regresar el botón de actualizar a su estado original
        form.querySelector('button[type="submit"').textContent = 'Crear cita';

        // Deshabilitar modo edición
        isEditing = false;
    } else {
        // Generar un ID único para cada cita
        appointmentObj.id = Date.now();
    
        // Crear una nueva cita
        // Toma una copia de appointmentObj para evitar que se sobreescriba el objeto
        manageAppointment.addAppointment({...appointmentObj});

        // Mensaje de agregado correctamente
        ui.showAlert('Cita agregada correctamente');
    }


    // Reiniciar objeto
    resetAppointmentObj();

    // Reiniciar form
    form.reset();

    // Mostrar cita creada
    ui.showAppointment(manageAppointment);
}

// Resetear el objeto global con los datos de la cita (appointmentObj)
export function resetAppointmentObj() {
    appointmentObj.pet = '';
    appointmentObj.owner = '';
    appointmentObj.phone = '';
    appointmentObj.date = '';
    appointmentObj.hour = '';
    appointmentObj.symptoms = '';
}

// Eliminar una cita por su id
export function deleteAppointment(id) {
    // Eliminar la cita en la clase Appointments
    manageAppointment.deleteAppointment(id);

    // Mostrar un mensaje
    ui.showAlert('Cita eliminada correctamente');

    // Actualizar la vista
    ui.showAppointment(manageAppointment);
}

// Editar una cita por su id
export function editAppointment(appointment) {
    const {pet, owner, phone, date, hour, symptoms, id} = appointment;

    // Llenar los inputs con los datos ingresados
    petInput.value = pet;
    ownerInput.value = owner;
    phoneInput.value = phone;
    dateInput.value = date;
    hourInput.value = hour;
    symptomsInput.value = symptoms;

    // Añadir datos al objeto de las citas
    appointmentObj.pet = pet;
    appointmentObj.owner = owner;
    appointmentObj.phone = phone;
    appointmentObj.date = date;
    appointmentObj.hour = hour;
    appointmentObj.symptoms = symptoms;
    appointmentObj.id = id;

    // Cambiar el texto del botón por "Actualizar Cita"
    form.querySelector('button[type="submit"').textContent = 'Actualizar Cita';

    // Habilitar modo edición
    isEditing = true;
}