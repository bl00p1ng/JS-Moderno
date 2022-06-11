// CONSTRUCTORES

// Cotizar seguro
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// Interfaz
function UI() {}

// Llenar el option de los años
UI.prototype.fillYear = () => {
    const maxYear = new Date().getFullYear();
    const minYear = maxYear - 20;
    const selectYear = document.querySelector('#year');

    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;

        selectYear.appendChild(option);
    }
};

// Instanciar UI
const ui = new UI();

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    // Llenar select con los años
    ui.fillYear();
});