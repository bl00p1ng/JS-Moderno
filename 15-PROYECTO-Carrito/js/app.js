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
    console.table(courseInfo);
}