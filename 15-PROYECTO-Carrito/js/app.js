// Variables
const cart = document.querySelector('#carrito');
const cartContainer = document.querySelector('#lista-carrito tbody');
const coursesList = document.querySelector('#lista-cursos');
const emptyCartBtn = document.querySelector('#vaciar-carrito');
let cartItems = [];

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
        const courseSelected = e.target.parentElement.parentElement;
        extractCourseInfo(courseSelected);
    }
}

// Leer el contenido del HTML al que se le dio click y extrae la información del curso
function extractCourseInfo(course) {
    // Almacenar información del curso
    const courseInfo = {
        image: course.querySelector('.imagen-curso').src,
        title: course.querySelector('.info-card h4').textContent,
        price: course.querySelector('.precio span').textContent,
        id: course.querySelector('a').getAttribute('data-id'),
        quantity: 1
    };

    // Agregar los datos del curso al carrito
    cartItems = [...cartItems, courseInfo];

    // Mostrar el curso agregado en el carrito
    cartHTML();
}

// Mostrar el carrito en el HTML
function cartHTML() {
    // Limpiar el HTML
    clearHTML();

    // Recorre el array del carrito y genera el HTML
    cartItems.forEach(course => {
        row = document.createElement('tr');
        row.innerHTML = `
            <td>
                ${course.title}
            </td>
        `;

        // Agregar el HTML del carrito en el body
        cartContainer.appendChild(row);
    });
}

// Eliminar los cursos del tbody
function clearHTML() {
    // Forma lenta
    // cartContainer.innerHTML = '';

    // Forma rápida
    while (cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild());
    }
}