// Verficicar el soporte de service worker en el navegador
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./serviceWorker.js')
        .then(registered => console.log('Se instalo correctamente el SW', registered))
        .catch(error => console.error('Fallo en la instalación del SW', error));
} else {
    console.error('El navegador no soporta service workers');
}