// Verficicar el soporte de service worker en el navegador
if ('serviceWorker' in navigator) {
    // Registrar el service worker
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(registered => console.log('Service worker registrado', registered))
        .catch(error => console.error('Fallo al registrar el service worker', error));
} else {
    console.error('El navegador no soporta service workers');
}