export default class Appointments {
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

    // Editar una cita
    editAppointment(appointmentToUpdate) {
        // Busca el id de la cita a actualizar y la sobreescribe con los datos nuevos
        this.appointments = this.appointments.map(appointment => appointment.id === appointmentToUpdate.id ? appointmentToUpdate : appointment);
    }
}