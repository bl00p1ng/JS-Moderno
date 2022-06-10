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
    showCars(cars);

    // LLenar las opciones de años
    fillYearSelect();
});

// Event Listener de los select de búsqueda
brand.addEventListener('change', e => {
    searchData.brand = e.target.value;

    // Filtrar resultados
    filterCars();
});

year.addEventListener('change', e => {
    searchData.year = parseInt(e.target.value);

    // Filtrar resultados
    filterCars();
});

minPrice.addEventListener('change', e => {
    searchData.minPrice = e.target.value;

    // Filtrar resultados
    filterCars();
});

maxPrice.addEventListener('change', e => {
    searchData.maxPrice = e.target.value;

    // Filtrar resultados
    filterCars();
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
function showCars(cars) {
    // Limpiar HTML previo
    clearHTML();

    cars.forEach(car => {
        const {brand, model, year, price, doors, color, transmission} = car;
        carHTML = document.createElement('p');
        carHTML.textContent = `
            ${brand} ${model} - ${year} - Puertas: ${doors} - Color: ${color} - Transmisión: ${transmission} - Precio: $${price}
        `;

        result.appendChild(carHTML);
    });
}

// Limpiar el HTML existente
function clearHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}

function fillYearSelect() {
    for (let i = maxYear; i >= minYear; i--) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        year.appendChild(option);
    }
}

// Filtrar el resultado de la búsqueda
function filterCars() {
    const result = cars.filter(filterBrand).filter(filterYear).filter(filterMinPrice).filter(filterMaxPrice);
    // console.log(result);
    showCars(result);
}

// Filtrar por marca
function filterBrand(car) {
    const {brand} = searchData;

    if (brand) {
        return car.brand === brand;
    }

    return car;
}

// Filtrar por año
function filterYear(car) {
    const {year} = searchData;

    if (year) {
        return car.year === year;
    }

    return car;
}

// Filtrar por precio mínimo
function filterMinPrice(car) {
    const {minPrice} = searchData;

    if (minPrice) {
        return car.price >= minPrice;
    }

    return car;
}

// Filtrar por precio máximo
function filterMaxPrice(car) {
    const {maxPrice} = searchData;

    if (maxPrice) {
        return car.price <= maxPrice;
    }

    return car;
}