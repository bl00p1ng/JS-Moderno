// ********** SELECTORES **********
const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');
const pagination = document.querySelector('#paginacion');

// ********** VARIABLES **********
// Cantidad de imágenes a mostrar por página
const recordsPerPage = 40;
// Cantidad de páginas requeridas para mostrar todas las imágenes
let totalPages;
// Generador de la paginación
let iterator;
// Página actual en el paginador
let currentPage = 1;

// ********** EVENT LISTENERS **********
form.addEventListener('submit', validateForm);

// ********** FUNCIONES **********
// Validar los campos del form
function validateForm(e) {
    e.preventDefault();

    // Obtener datos del form
    const searchTerm = document.querySelector('#termino').value;

    // Validar que el campo no este vacio
    if (searchTerm === '') {
        showAlert('Agrega un término de búsqueda');
        return;
    }

    // Consultar API
    searchImages();
}

// Mostrar un mensaje de alerta en la UI
function showAlert(alertMsg) {
    // Validar que solo se muestre una alerta a la vez
    if (!document.querySelector('.alert')) {
        const alert = document.createElement('p');
        alert.classList.add('alert',
                            'bg-red-100', 
                            'border-red-400', 
                            'text-red-700', 
                            'px-4', 'py-3', 
                            'rounded', 
                            'max-w-lg', 
                            'mx-auto', 
                            'mt-6', 
                            'text-center');
    
        alert.innerHTML = `
            <strong class="font-bold">Error!</strong>
            <span class="block sm:inline">${alertMsg}</span>
        `;
    
        // Agregar al HTML
        form.appendChild(alert);

        // Ocultar alerta después de 3 segundos
        setTimeout(() => {
            alert.remove();
        }, 3000);
    }
}

// Buscar imágenes en la API con base en el término de búsqueda
function searchImages() {
    const API_KEY = '28253743-7c242eb0322bed2882b255c3b';
    // Termino a buscar
    const searchTerm = document.querySelector('#termino').value;

    // Construir URL
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&per_page=${recordsPerPage}&page=${currentPage}`;
    
    fetch(url)
        .then(response => response.json())
        .then(result => {
            // Calcular la cantidad de paginas necesarias para mostrar las imágenes
            totalPages = calculatePages(result.totalHits);

            showImages(result.hits);
        })
        .catch(err => console.error(err));
}

// Mostrar las imágenes traidas de la API en la UI
function showImages(images) {
    // Limpiar HTML
    clearHTML(result);

    // Iterar sobre las imagenes y construir el HTML
    images.forEach(image => {
        const {previewURL, likes, views, largeImageURL} = image;

        result.innerHTML += `
            <div class="w-1/2 md:w-1/4 lg:1/5 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">
                    <div class="p-4">
                        <p><span class="font-bold">${likes}</span> Likes</p>
                        <p><span class="font-bold">${views}</span> veces vista</p>
                        <a 
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                        >
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `;
    });

    showPagination();
}

// Calcular la cantidad de páginas necesarias para mostrar todas las imágenes
function calculatePages(total) {
    return parseInt(Math.ceil(total / recordsPerPage));
}

// Generador que va a registrar la cantidad de elementos de acuerdo a las páginas
function *createPagination(total) {
    for (let i = 1; i <= total; i++) {
        yield i;
    }
}

// Mostrar la paginación
function showPagination() {
    // Limpiar HTML
    clearHTML(pagination);

    iterator = createPagination(totalPages);

    while (true) {
        const {value, done} = iterator.next();
        
        // Detener ejecución al llegar al último elemento
        if (done) return;


        // Generador un botón de paginación por cada elemento en el generador
        const button = document.createElement('a');
        button.href = '#';
        button.dataset.page = value;
        button.textContent = value;
        button.classList.add('siguiente', 
                             'bg-yellow-400',
                             'px-4', 'py-1', 
                             'mr-2', 
                             'font-bold', 
                             'mb-4',
                             'rounded');

        // Asigna el valor del paginador como la página a consultar a la API
        button.onclick = () => {
            currentPage = value;

            // Consultar la API con la pagina seleccionada
            searchImages();
        };

        pagination.appendChild(button);
    }
}

// Eliminar el HTML previo de una sección del DOM
function clearHTML(section) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
}