// ********** SELECTORES **********
const cryptocurrenciesSelect = document.querySelector('#criptomonedas');
const currenciesSelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');

// ********** VARIABLES **********
// Almacena los datos para hacer la petición a la API
const searchTerms = {
    currency: '',
    cryptocurrency: ''
};

// ********** EVENT LISTENERS **********
document.addEventListener('DOMContentLoaded', () => {
    // Obtener las criptomonedas a seleccionar
    consultCryptocurrencies();

    // Validar form al enviar
    form.addEventListener('submit', validateForm);

    // Obtener los datos de cada select
    cryptocurrenciesSelect.addEventListener('change', readData);
    currenciesSelect.addEventListener('change', readData);
});

// ********** FUNCIONES **********
// Obtiene las 10 criptomonedas más importantes por capitalización de mercado
function consultCryptocurrencies() {
    const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`;

    fetch(url)
        .then(response => response.json())
        // Obtener las criptomonedas
        .then(result => getCryptocurrencies(result.Data))
        // Crear el select con los datos
        .then(cryptocurrencies => createSelectCrypto(cryptocurrencies))
        .catch(err => console.error(err));
}

// Promise que descarga los datos de las criptomonedas
const getCryptocurrencies = cryptocurrencies => new Promise(resolve => {
    resolve(cryptocurrencies);
});

// Crea el select de las criptomonedas con los datos de la API
function createSelectCrypto(cryptocurrencies) {
    cryptocurrencies.forEach(cryptocurrency => {
        const {FullName, Name} = cryptocurrency.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;

        cryptocurrenciesSelect.appendChild(option);
    });
}

// Leer los datos del select
function readData(e) {
    searchTerms[e.target.name] = e.target.value;
    console.log(searchTerms);
}

// Validar los datos del form
function validateForm(e) {
    e.preventDefault();

    // Validar que no exista un campo vacio
    const {currency, cryptocurrency} = searchTerms;

    if (currency === '' || cryptocurrency === '') {
        showAlert('Ambos campos son obligatorios');
        return;
    }
}

// Mostrar una alerta en la UI
function showAlert(msg) {
    // Validar que no se muestre más de una alerta a la vez
    if (!document.querySelector('.error')) {
        const alert = document.createElement('div');
        alert.classList.add('error');
        alert.textContent = msg;
    
        form.appendChild(alert);

        // Ocultar alerta después de 3 segundos
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}