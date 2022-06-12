// VARIABLES Y SELECTORES
const form = document.querySelector('#agregar-gasto');
const listExpenses = document.querySelector('#gastos ul');


// EVENT LISTENERS
eventListeners();
function eventListeners() {
    // Preguntar presupuesto una vez termine de cargar la página
    document.addEventListener('DOMContentLoaded', askBudget);

    // Obtener los datos del formulario de gastos
    form.addEventListener('submit', addExpense);
}


// CLASES
class Budget {
    constructor(userBudget) {
        this.budget = Number(userBudget);
        this.remaining = Number(userBudget);
        this.expenses = [];
    }

    // Añadir un nuevo gasto
    newExpense(expense) {
        this.expenses = [...this.expenses, expense];
        console.log(this.expenses);
    }
}

/* Crea la variable de presupuesto en un contexto global.
   más tarde se usará esta variable para instanciar Budget */
let budget;

class UI {
    // Muestra el presupuesto
    showBudget(quantity) {
        // Extraer datos
        const {budget, remaining} = quantity;

        // Agregar al HTML
        document.querySelector('#total').textContent = budget;
        document.querySelector('#restante').textContent = remaining;
    }
    
    // Mostrar mensaje de alerta
    showAlert(msg, alertType) {
        // Crear HTML
        const pMsg = document.createElement('p');
        pMsg.classList.add('text-center', 'alert');
        pMsg.textContent = msg;

        // Validar tipo de alerta
        if (alertType === 'error') {
            pMsg.classList.add('alert-danger');
        } else {
            pMsg.classList.add('alert-success');
        }

        // Insertar HTML
        document.querySelector('.primario').insertBefore(pMsg, form);

        // Retirar alerta después de 3 segundos
        setTimeout(() => {
            pMsg.remove();
        }, 3000);
    }
}

// Instanciar UI
const ui = new UI();


// FUNCIONES
function askBudget() {
    const userBudget = prompt('¿Cuál es tu presupuesto?');

    /* Si el usuario no ingresa nada, cancela, no ingresa un número,
    o ingresa un número negativo, se recarga la pagina para abrir 
    el prompt otra vez */
    if (userBudget === '' || userBudget === null || isNaN(userBudget) || userBudget <= 0) {
        window.location.reload();
    }

    // Instanciar presupuesto
    budget = new Budget(userBudget);

    // Mostrar el presupuesto
    ui.showBudget(budget);
}

function addExpense(e) {
    e.preventDefault();

    // Leer datos del form
    const expenseName = document.querySelector('#gasto').value;
    const value = Number(document.querySelector('#cantidad').value);

    // Validar campos
    if (expenseName === '' || value === '') {
        ui.showAlert('Todos los campos son obligatorios', 'error');
        return;
    } else if (value <= 0 || isNaN(value)) {
        ui.showAlert('Cantidad no valida', 'error');
        return;
    }

    // Crear un objeto con el gasto
    const expense = {expenseName, value, id: Date.now()};

    // Agrega un nuevo gasto al presupuesto
    budget.newExpense(expense);

    // Mensaje de gasto agregado
    ui.showAlert('Gasto agregado correctamente');
    // Reiniciar form
    form.reset();
}