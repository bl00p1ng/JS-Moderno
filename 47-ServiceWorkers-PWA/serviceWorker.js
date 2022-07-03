// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Se instalo el service worker');
    console.log(e);
});

// Cuando se activa el service worker
self.addEventListener('activate', e => {
    console.log('Service worker activado');
    console.log(e);
});