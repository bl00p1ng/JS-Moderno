// ********** SELECTORES **********
const cryptocurrenciesSelect = document.querySelector('#criptomonedas');

// ********** EVENT LISTENERS **********
document.addEventListener('DOMContentLoaded', () => {
    consultCryptocurrencies();
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