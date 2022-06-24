// API Key Open Weather
import {API_KEY} from './api_key.js'

// ********** SELECTORES **********
const container = document.querySelector('.container');
const result = document.querySelector('#result');
const form = document.querySelector('#formulario');

// ********** EVENT LISTENERS **********
window.addEventListener('load', () => {
    form.addEventListener('submit', searchWeather);
});

// ********** FUNCIONES **********
// Toma los datos del form y los pasa a la API para buscar el clima
function searchWeather(e) {
    e.preventDefault();

    // Validar from
    const city = document.querySelector('#ciudad').value;
    const country = document.querySelector('#pais').value;

    if (city === '' || country === '') {
        // Hay un error en los campos del form
        showError('Ambos campos son obligatorios');
        return;
    }

    // Consultar API
    consultAPI(city, country);
}

// Mostrar un mensaje de error en la UI
function showError(errorMsg) {
    // Validar si ya existe, si no existe se crea una
    if (!document.querySelector('.bg-red-100')) {
        const alert = document.createElement('div');
        alert.classList.add('bg-red-100', 
                            'border-red-400', 
                            'text-red-700', 
                            'px-4', 
                            'py-3', 
                            'rounded', 
                            'max-w-md', 
                            'mx-auto', 
                            'mt-6', 
                            'text-center');
        alert.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block">${errorMsg}</span>
        `;
    
        container.appendChild(alert);
    
        // Eliminar alerta despues de 3 segundos
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

// Consultar el clima a la API
function consultAPI(city, country) {
    // Construir URL
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

    // Consultar API
    fetch(url)
        .then(response => response.json())
        .then(result => {
            console.log(result);

            // Validar si la ciudad no existe
            if (result.cod === '404') {
                showError('La ciudad buscada no existe')
            }
        })
        .catch((err) => console.error(err));
}