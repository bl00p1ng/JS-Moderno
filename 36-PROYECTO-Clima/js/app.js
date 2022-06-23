// ********** SELECTORES **********
const container = document.querySelector('.container');
const result = document.querySelector('#result');
const form = document.querySelector('#formulario');

// ********** EVENT LISTENERS **********
window.addEventListener('load', () => {
    form.addEventListener('submit', searchWeather);
});

// ********** FUNCIONES **********
function searchWeather(e) {
    e.preventDefault();

    console.log('Buscando clima...');
}