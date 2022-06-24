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
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}`;
    
    fetch(url)
        .then(response => response.json())
        .then(result => showImages(result.hits))
        .catch(err => console.error(err));
}

// Mostrar las imágenes traidas de la API en la UI
function showImages(images) {
    console.log(images);
}