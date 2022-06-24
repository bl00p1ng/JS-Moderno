// API Key Open Weather
import {API_KEY} from './api_key.js'

// ********** SELECTORES **********
const container = document.querySelector('.container');
const result = document.querySelector('#resultado');
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
            // Limpiar HTML
            clearHTML();

            // Validar si la ciudad no existe
            if (result.cod === '404') {
                showError('La ciudad buscada no existe');
                return;
            }

            // Mostrar clima en la UI
            showWeather(result);
        })
        .catch((err) => console.error(err));
}

// Mostrar los resultados del clima en el HTML
function showWeather(weatherData) {
    const {name, main: {temp, temp_max, temp_min}} = weatherData;

    const cityName = document.createElement('p');
    cityName.classList.add('font-bold', 'text-2xl');
    cityName.textContent = `Clima en ${name}`;

    // Convertir temperatura a grados centigrados
    const currentTemp = kelvinToCentigrades(temp);
    const maxTemp = kelvinToCentigrades(temp_max);
    const minTemp = kelvinToCentigrades(temp_min);

    // Muestra temperatura actual en la ciudad
    const current = document.createElement('p');
    current.classList.add('font-bold', 'text-6xl');
    current.innerHTML = `${currentTemp} &#8451;`

    // Mostrar temperatura máxima
    const max = document.createElement('p');
    max.classList.add('text-xl');
    max.innerHTML = `Max: ${maxTemp} &#8451;`

    // Mostrar temperatura mínima
    const min = document.createElement('p');
    min.classList.add('text-xl');
    min.innerHTML = `Min: ${minTemp} &#8451;`

    // Div con el clima de la ciudad
    const weatherDiv = document.createElement('div');
    weatherDiv.classList.add('text-center', 'text-white');
    weatherDiv.appendChild(cityName);
    weatherDiv.appendChild(current);
    weatherDiv.appendChild(max);
    weatherDiv.appendChild(min);

    result.appendChild(weatherDiv);
}

// Convertir grados Kelvin a Centigrados
const kelvinToCentigrades = degrees => Math.round(degrees - 273.15)

// Limpiar elementos existentes en el DOM
function clearHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}