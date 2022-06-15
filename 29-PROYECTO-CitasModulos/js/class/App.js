import {appointmentData, newAppointment} from '../functions.js'
import {petInput, 
    ownerInput, 
    phoneInput, 
    dateInput, 
    hourInput, 
    symptomsInput, 
    form} from '../selectors.js'

export default class App {
    constructor() {
        this.initApp();
    }

    // Iniciar App
    initApp() {
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
}