// VARIABLES
const form = document.querySelector('#formulario');
const tweetsList = document.querySelector('#lista-tweets');
let tweets = [];

// EVENT LISTENERS
eventListeners();
function eventListeners() {
    form.addEventListener('submit', addTweet);
}


// FUNCIONES
function addTweet(e) {
    e.preventDefault();

    // Textarea donde se escribe el tweet
    const tweet = document.querySelector('#tweet').value;

    // Validar Tweet
    if (tweet === '') {
        showError('El Tweet no puede estar vacio');

        return;  // Detiene ejecución de la función
    }

    console.log('Test');
}

// Mostrar un mensaje de error
function showError(msg) {
    const error = document.createElement('p');
    error.textContent = msg;
    error.classList.add('error');

    // Insertar en el contenido
    const content = document.querySelector('#contenido');
    content.appendChild(error);

    // Borrar mensaje de error después de 3 segundos
    setTimeout(() => {
        error.remove();
    }, 3000);
}
