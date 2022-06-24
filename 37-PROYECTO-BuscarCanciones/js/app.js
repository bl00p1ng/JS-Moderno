import * as UI from './ui.js'
import API from './api.js'

// ********** EVENT LISTENERS **********
UI.form.addEventListener('submit', searchSong);

// ********** FUNCIONES **********
// Obtener y validar datos del form
function searchSong(e) {
    e.preventDefault();

    // Obtener datos del form
    const artist = document.querySelector('#artista').value;
    const song = document.querySelector('#cancion').value;

    // Validar datos del form
    if (artist === '' || song === '') {
        showError('Ambos campos son obligatorios');
        return;
    }

    // Consultar API
    const search = new API(artist, song);
    search.consultAPI();
}

// Mostrar un mensaje de error en la interfaz
function showError(msg) {
    // Validar que solo se muestre una alerta a la vez
    if (!document.querySelector('.error')) {
        const alert = document.createElement('div');
        alert.classList.add('error');
        alert.innerHTML = `
            <p><strong>${msg}</strong></p>
        `;
    
        // Agregar al DOM
        UI.messages.appendChild(alert);

        // Eliminar alerta después de 3 segundos
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}