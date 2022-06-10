// VARIABLES
const form = document.querySelector('#formulario');
const tweetsList = document.querySelector('#lista-tweets');
let tweets = [];

// EVENT LISTENERS
eventListeners();
function eventListeners() {
    // Cuando el usuario agrega un tweet
    form.addEventListener('submit', addTweet);

    // Cargar tweets desde localStorage cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];
        showTweets();
    });
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

    const tweetData = {
        id: Date.now(),
        tweet  // JS lo entiende como la misma llave y valor
    };

    // Agregar tweet al array de tweets
    tweets = [...tweets, tweetData];

    // Mostrar Tweet en el HTML
    showTweets();

    // Reiniciar form
    form.reset();
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

// Mostrar los tweets en el HTML
function showTweets() {
    // Limpiar HTML
    clearHTML();

    if (tweets.length > 0) {
        const ul = document.createElement('ul');

        tweets.forEach(tweet => {
            // Crear HTML

            // Crear un botón para eliminar Tweet
            const deleteBtn = document.createElement('a');
            deleteBtn.classList.add('borrar-tweet');
            deleteBtn.textContent = 'X';

            deleteBtn.onclick = () => {
                deleteTweet(tweet.id);
            };

            // Crear el HTML para mostrar el Tweet
            const li = document.createElement('li');
            li.textContent = tweet.tweet;
            // Agregar boton de eliminar
            li.appendChild(deleteBtn);

            ul.appendChild(li);
        });

        tweetsList.appendChild(ul);
    }

    // Cargar tweets en localStorage
    syncStorage();
}

// Eliminar HTML existente
function clearHTML() {
    while (tweetsList.firstChild) {
        tweetsList.removeChild(tweetsList.firstChild);
    }
}

// Cargar datos en localStorage
function syncStorage() {
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

// Borrar un tweet
function deleteTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
    showTweets();
}