const openFullScreen = document.querySelector('#abrir-pantalla-completa');
const exitFullScreen = document.querySelector('#salir-pantalla-completa');

openFullScreen.addEventListener('click', fullScreen);
exitFullScreen.addEventListener('click', closeFullScreen);

function fullScreen() {
    document.documentElement.requestFullscreen();
}

function closeFullScreen() {
    document.exitFullscreen();
}