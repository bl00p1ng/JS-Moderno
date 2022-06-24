// ********** SELECTORES **********
const cryptocurrenciesSelect = document.querySelector('#criptomonedas');
const currenciesSelect = document.querySelector('#moneda');
const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

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

    // Consultar la API con los resultados
    consultAPI();
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

// Consultar la API con los terminos de busqueda ingresados por el usuario
function consultAPI() {
    // Construir la URL
    const {currency, cryptocurrency} = searchTerms;
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${currency}`;

    // Mostrar un spinner mientras responde la API
    showSpinner();

    fetch(url)
        .then(response => response.json())
        .then(result => {
            // Limpiar HTML
            clearHTML();
            showData(result.DISPLAY[cryptocurrency][currency]);
        })
        .catch(err => console.error(err));
}

// Mostrar los resultados de la cotización en la API
function showData(prices) {
    // Extraer los datos a mostrar
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = prices;

    // Precio
    const price = document.createElement('p');
    price.classList.add('precio');
    price.innerHTML = `El precio es: <span>${PRICE}</span>`;

    // Precio más alto en el dia
    const highPrice = document.createElement('p');
    highPrice.innerHTML = `Precio más alto del día: <span>${HIGHDAY}</span>`;

    // Precio más bajo en el dia
    const lowPrice = document.createElement('p');
    lowPrice.innerHTML = `Precio más bajo del día: <span>${LOWDAY}</span>`;

    // Cambio de precio en las últimas 24 horas
    const last24Hours = document.createElement('p');
    last24Hours.innerHTML = `Variación en las últimas 24 horas: <span>${CHANGEPCT24HOUR}%</span>`;

    // Tiempo desde la última actualización
    const lastUpdate = document.createElement('p');
    lastUpdate.innerHTML = `Última actualización: <span>${LASTUPDATE}</span>`;

    // Agregar elementos a la UI
    result.appendChild(price);
    result.appendChild(highPrice);
    result.appendChild(lowPrice);
    result.appendChild(last24Hours);
    result.appendChild(lastUpdate);
}

// Limpiar el HTML de los resultados
function clearHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

// Mostrar un spinner de carga
function showSpinner() {
    // Limpiar el HTML
    clearHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    spinner.innerHTML = `
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    result.appendChild(spinner);
}