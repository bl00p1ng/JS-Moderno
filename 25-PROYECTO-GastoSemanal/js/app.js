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
        this.calculateRemaining();
    }

    // Calcular el presupuesto restante
    calculateRemaining() {
        const spent = this.expenses.reduce((total, expense) => total += expense.value, 0);
        console.log('gastado: ', spent);

        this.remaining = this.budget - spent;
        console.log('restante: ', this.remaining);
    }

    // Eliminar un gasto
    deleteExpense(id) {
        // Eliminar el gasto con el id ingresado
        this.expenses = this.expenses.filter(expense => expense.id !== id);

        // Recalcular presupuesto restante
        this.calculateRemaining();
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

    // Mostrar el listado de gastos
    showExpenses(expenses) {
        // Limpiar HTML previo
        this.clearHTML();

        expenses.forEach(expense => {

            const {expenseName, value, id} = expense;

            // Crear HTML del gasto
            const newExpense = document.createElement('li');
            newExpense.className = 'list-group-item d-flex justify-content-between align-items-center';
            newExpense.dataset.id = id;
            newExpense.innerHTML = `${expenseName} <span class="badge badge-primary badge-pill">$ ${value}</span`;

            // Crear botón para borrar el gasto
            const deleteBtn = document.createElement('button');
            deleteBtn.classList.add('btn', 'btn-danger', 'borrar-gastp');
            deleteBtn.textContent = 'Borrar ⨯';

            // Ejecuta la acción de borrar un gasto
            deleteBtn.onclick = () => deleteExpense(id);

            newExpense.appendChild(deleteBtn);

            // Agregar al DOM el HTML del gasto
            listExpenses.appendChild(newExpense);
        });
    }

    // Eliminar HTML previo
    clearHTML() {
        while (listExpenses.firstChild) {
            listExpenses.removeChild(listExpenses.firstChild);
        }
    }

    // Actualizar el presupuesto restante
    updateRemaining(remaining) {
        document.querySelector('#restante').textContent = remaining;
    }

    // Comprobar el presupuesto gastado para cambiar el color del presupuesto restante
    checkBudget(budgetObj) {
        const {budget, remaining} = budgetObj;
        const remainingDiv = document.querySelector('.restante');

        if ((budget / 4) > remaining) {  // Comprobar 25%
            remainingDiv.classList.remove('alert-success', 'alert-warning');
            remainingDiv.classList.add('alert-danger');
        } else if ((budget / 2) > remaining) {  // Comprobar 50%
            remainingDiv.classList.remove('alert-success');
            remainingDiv.classList.add('alert-warning');
        } else {  // Cuando se efectua un reembolso
            remainingDiv.classList.remove('alert-danger', 'alert-warning');
            remainingDiv.classList.add('alert-success');
        }

        // Validar si se agotó el presupuesto
        if (remaining <= 0) {
            ui.showAlert('El presupuesto se ha agotado', 'error');
            form.querySelector('button[type="submit"]').disabled = true;
        }
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

    // Mostrar los gastos
    const {expenses, remaining} = budget;
    ui.showExpenses(expenses);

    // Actualizar el presupuesto restante en la UI
    ui.updateRemaining(remaining);

    // Comprobar el presupuesto gastado y cambiar el color de la alerta
    ui.checkBudget(budget);

    // Mensaje de gasto agregado
    ui.showAlert('Gasto agregado correctamente');
    // Reiniciar form
    form.reset();
}

// Eliminar un gasto
function deleteExpense(id) {
    // Elimina el gasto del objeto
    budget.deleteExpense(id);

    // Elimina el gasto del HTML
    const {expenses, remaining} = budget;
    ui.showExpenses(expenses);

    // Actualizar el presupuesto restante en la UI
    ui.updateRemaining(remaining);

    // Comprobar el presupuesto gastado y cambiar el color de la alerta
    ui.checkBudget(budget);
}