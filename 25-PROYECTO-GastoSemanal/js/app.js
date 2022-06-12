// VARIABLES Y SELECTORES
const form = document.querySelector('#agregar-gasto');
const listExpenses = document.querySelector('#gastos ul');

// EVENT LISTENERS
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', askBudget);
}

// CLASES


// FUNCIONES
function askBudget() {
    const budget = prompt('¿Cuál es tu presupuesto?');
    console.log(budget);

    /* Si el usuario no ingresa nada, cancela, no ingresa un número,
    o ingresa un número negativo, se recarga la pagina para abrir 
    el prompt otra vez */
    if (budget === '' | budget === null | isNaN(budget) | budget <= 0) {
        window.location.reload();
    }
}