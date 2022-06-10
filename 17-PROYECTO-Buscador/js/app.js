// Variables
const result = document.querySelector('#resultado');
const brand = document.querySelector('#marca');
const year = document.querySelector('#year');
const minPrice = document.querySelector('#minimo');
const maxPrice = document.querySelector('#maximo');
const doors = document.querySelector('#puertas');
const transmission = document.querySelector('#transmision');
const color = document.querySelector('#color');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Generar un objeto con la búsqueda
const searchData = {
    brand: '',
    year: '',
    minPrice: '',
    maxPrice: '',
    doors: '',
    transmission: '',
    color: '',
};

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los autos al cargar
    showCars();

    // LLenar las opciones de años
    fillYearSelect();
});

// Event Listener de los select de búsqueda
brand.addEventListener('change', e => {
    searchData.brand = e.target.value;
});

year.addEventListener('change', e => {
    searchData.year = e.target.value;
});

minPrice.addEventListener('change', e => {
    searchData.minPrice = e.target.value;
});

maxPrice.addEventListener('change', e => {
    searchData.maxPrice = e.target.value;
});

doors.addEventListener('change', e => {
    searchData.doors = e.target.value;
});

transmission.addEventListener('change', e => {
    searchData.transmission = e.target.value;
});

color.addEventListener('change', e => {
    searchData.color = e.target.value;
    console.table(searchData);
});


// Funciones
function showCars() {
    cars.forEach(car => {
        const {brand, model, year, price, doors, color, transmission} = car;
        carHTML = document.createElement('p');
        carHTML.textContent = `
            ${brand} ${model} - ${year} - Puertas: ${doors} - Color: ${color} - Transmisión: ${transmission} - Precio: $${price}
        `;

        result.appendChild(carHTML);
    });
}

function fillYearSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}