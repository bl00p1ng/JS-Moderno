// Variables
const result = document.querySelector('#resultado');

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    showCars();
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