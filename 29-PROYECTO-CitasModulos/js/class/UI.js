import { editAppointment, deleteAppointment } from "../functions.js";
import { appointmentContainer } from "../selectors.js";

export default class UI {
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

            deleteBtn.onclick = () => deleteAppointment(id);

            // Botón para editar cita
            const editBtn = document.createElement('button');
            editBtn.classList.add('btn', 'btn-info');
            editBtn.innerHTML = `Editar cita <svg class="w-6 h-6" data-darkreader-inline-stroke="" fill="none" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>`;
            appointmentView.appendChild(editBtn);

            editBtn.onclick = () => editAppointment(appointment);

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