// CONSTRUCTORES

// Cotizar seguro
function Insurance(brand, year, type) {
    this.brand = brand;
    this.year = year;
    this.type = type;
}

// Cotiza el seguro en base a los datos recibidos
Insurance.prototype.quoteInsurance = function() {
    // Cotizar con base en la marca

    /* Criterios de cotización
    1 -> Americano incrementa en 1.15
    2 -> Asiatico incrementa en 1.05
    3 -> Europeo incrementa en 1.35
    */
   let quantity;
   const base = 2000;

    switch (this.brand) {
        case '1':
            quantity = base * 1.15;
            break;
        case '2':
            quantity = base * 1.05;
            break;
        case '3':
            quantity = base * 1.35;
            break;
        default:
            break;
    }

    // Cotizar con base en el año
    // El costo se reduce un 3% por cada año de diferencia (yearsDifference) con el año actual
    const yearsDifference = new Date().getFullYear() - this.year;
    quantity -= ((yearsDifference * 3) * quantity) / 100;
    console.log(quantity);

    // Cotizar con base en el tipo de seguro
    /*
    Seguro básico -> Costo se multiplica un 30%
    Seguro completo -> Costo se multiplica un 50%
    */
    if (this.type === 'basic') {
        quantity *= 1.30;
    } else {
        quantity *= 1.50;
    }

    return quantity;
};

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

// Mostrar el total de la cotización
UI.prototype.showResult = (insurance, total) => {
    const {brand, year, type} = insurance;

    // Validar la marca correspondiente
    let brandText;

    switch (brand) {
        case '1':
            brandText = 'Americano';
            break;
        case '2':
            brandText = 'Asiatico';
            break;
        case '3':
            brandText = 'Europeo';
            break;
        default:
            break;
    }

    // Crear el resultado
    const result = document.querySelector('#resultado');
    div = document.createElement('div');
    div.classList.add('mt-10');
    div.innerHTML = `
        <p class="header">Tu resumen</p>
        <p class="font-bold">Marca: <span class="font-normal">${brandText}</span></p>
        <p class="font-bold">Año: <span class="font-normal">${year}</span></p>
        <p class="font-bold">Tipo de seguro: <span class="font-normal capitalize">${type}</span></p>
        <p class="font-bold">Total: <span class="font-normal">$${total}</span></p>
    `;

    // Mostrar el spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    // Ocultar spinner después de 3 segundos y mostrar el total
    setTimeout(() => {
        spinner.style.display = 'none';
        result.appendChild(div);
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
    form.addEventListener('submit', getData);
}

// FUNCIONES
function getData(e) {
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

    // Ocultar cotizaciones anteriores
    const results = document.querySelector('#resultado div');
    if (results != null) {
        results.remove();
    }

    // Instanciaar el seguro
    const insurance = new Insurance(brand, year, type);

    // Cotizar el seguro
    const total = insurance.quoteInsurance();
    // Mostrar el total en la interfaz
    ui.showResult(insurance, total);
}