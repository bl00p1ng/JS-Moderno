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

    // Eliminar curso del carrito
    cart.addEventListener('click', deleteCourse);

    // Vaciar carrito
    emptyCartBtn.addEventListener('click', e => {
        e.preventDefault();
        cartItems = [];  // Resetear carrito
        clearHTML();  // Limpiar HTML
    });
}

// Funciones

// Agregar curso
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

    // Comprobar si un elemento ya existe en el carrito
    const exist = cartItems.some(course => course.id === courseInfo.id);

    if (exist) {
        // Actualizar cantidad
        const courses = cartItems.map(course => {
            if (course.id === courseInfo.id) {
                course.quantity++;
                return course;  // Retorna objeto actualizado
            } else {
                return course;  // Retorna objetos que no son duplicados
            }
        });
        cartItems = [...courses];
    } else {
        // Agregar los datos del curso al carrito
        cartItems = [...cartItems, courseInfo];
    }


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

        const {image, title, price, id, quantity} = course;
        row.innerHTML = `
            <td>
                <img src="${image}" alt="Imagen del curso" width="100">
            </td>
            <td>
                ${title}
            </td>
            <td>
                ${price}
            </td>
            <td>
                ${quantity}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
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
        cartContainer.removeChild(cartContainer.firstChild);
    }
}

// Eliminar curso
function deleteCourse(e) {
    e.preventDefault();

    if(e.target.classList.contains('borrar-curso')) {
        const courseId = e.target.getAttribute('data-id');

        // Eliminar un curso del array cartItems por su data-id
        cartItems = cartItems.filter(course => course.id !== courseId);

        cartHTML();
    }
}