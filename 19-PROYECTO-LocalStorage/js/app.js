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

    console.log('Agregando tweet...');
}