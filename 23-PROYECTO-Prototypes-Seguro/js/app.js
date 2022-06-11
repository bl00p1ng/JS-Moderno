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

// Mostrar mensajes de alerta
UI.prototype.showMsg = (msg, alertType) => {
    const div = document.createElement('div');
    const p = document.createElement('p');

    p.textContent = msg;
    div.classList.add('mensaje', 'mt-10');

    // Dar estilos según el tipo de mensaje
    if (alertType == 'error') {
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    // Insertar HTML
    div.appendChild(p);
    const form = document.querySelector('#cotizar-seguro');
    form.insertBefore(div, document.querySelector('#resultado'));

    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        div.remove();
    }, 3000);
};

// Instanciar UI
const ui = new UI();

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    // Llenar select con los años
    ui.fillYear();
});

eventListeners();
function eventListeners() {
    const form = document.querySelector('#cotizar-seguro');
    form.addEventListener('submit', quoteInsurance);
}

// FUNCIONES
function quoteInsurance(e) {
    e.preventDefault();

    // Leer marca seleccionada
    const brand = document.querySelector('#marca').value;

    // Leer año seleccionado
    const year = document.querySelector('#year').value;

    // Leer el tipo de seguro seleccionado
    const type = document.querySelector('input[name="tipo"]:checked').value;

    if (brand === '' || year === '' || type === '') {
        ui.showMsg('Todos los campos son obligatorios', 'error');
        return;
    }

    ui.showMsg('Cotizando Seguro...', 'success');
}