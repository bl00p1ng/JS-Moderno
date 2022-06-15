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


