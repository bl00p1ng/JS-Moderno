// ********** SELECTORES **********
const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

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
    searchImages(searchTerm);
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
function searchImages(searchTerm) {
    const API_KEY = '28253743-7c242eb0322bed2882b255c3b';

    // Construir URL
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&per_page=100`;
    
    fetch(url)
        .then(response => response.json())
        .then(result => showImages(result.hits))
        .catch(err => console.error(err));
}

// Mostrar las imágenes traidas de la API en la UI
function showImages(images) {
    // Limpiar HTML
    clearHTML();

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
}

// Eliminar el HTML previo de .resultado
function clearHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}