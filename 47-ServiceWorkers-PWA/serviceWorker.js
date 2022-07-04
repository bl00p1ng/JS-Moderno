// Nombre del cache
const cacheName = 'apv-v1';
// Archivos que se van a cachear para cuando la App este offline
const archives = [
    '/',
    '/index.html',
    '/css/bootstrap.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
];

// Cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Se instalo el service worker');
    
    // Esperar hasta que se terminen de descargar los archivos de cache
    e.waitUntil(
        caches.open(cacheName)
            .then(cache => {
                console.log('Guardando en cache...');
                // Añadir archivos a la cache
                cache.addAll(archives);
            })
    );
});

// Cuando se activa el service worker
self.addEventListener('activate', e => {
    console.log('Service worker activado');
    console.log(e);
});

// Evento fetch para registrar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);
});