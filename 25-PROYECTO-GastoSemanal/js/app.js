// VARIABLES Y SELECTORES
const form = document.querySelector('#agregar-gasto');
const listExpenses = document.querySelector('#gastos ul');

/* Crea la variable de presupuesto en un contexto global.
   más tarde se usará esta variable para instanciar Budget */
let budget;


// EVENT LISTENERS
eventListeners();
function eventListeners() {
    document.addEventListener('DOMContentLoaded', askBudget);
}


// CLASES
class Budget {
    constructor(userBudget) {
        this.budget = Number(userBudget);
        this.remaining = Number(userBudget);
        this.expenses = [];
    }
}

class UI {

}

// Instanciar UI
const ui = new UI();


// FUNCIONES
function askBudget() {
    const userBudget = prompt('¿Cuál es tu presupuesto?');

    /* Si el usuario no ingresa nada, cancela, no ingresa un número,
    o ingresa un número negativo, se recarga la pagina para abrir 
    el prompt otra vez */
    if (userBudget === '' | userBudget === null | isNaN(userBudget) | userBudget <= 0) {
        window.location.reload();
    }

    // Instanciar presupuesto
    budget = new Budget(userBudget);
    console.log(budget);
}