// Variables
const cart = document.querySelector('#carrito');
const cartContainer = document.querySelector('#lista-carrito tbody');
const coursesList = document.querySelector('#lista-cursos');
const emptyCartBtn = document.querySelector('#vaciar-carrito');

// Cargar los eventListeners necesarios
loadEventListeners();
function loadEventListeners() {
    // Agregar un curso al presionar "Agregar al carrito"
    coursesList.addEventListener('click', addCourse);
}

// Funciones
function addCourse(e) {
    e.preventDefault();

    if(e.target.classList.contains('agregar-carrito')) {
        console.log('Agregando al carrito');
    }
}