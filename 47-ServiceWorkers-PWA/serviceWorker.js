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
    console.log('Service worker activado', e);
});

// Evento fetch para registrar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch...', e);

    // Evitar la respuesta de fetch por defecto y expecificar una manualmente
    e.respondWith(async function() {
        // Intentar obtener la respuesta del cache
        const cachedResponse = await caches.match(e.request);
        /* Si lo que se solicita en el request es igual a lo que esta 
        en cache, se carga el archivo de la cache */
        if (cachedResponse) return cachedResponse;

        /* Si no encuentra una coincidencia en la cache, se utiliza la red */
        return fetch(e.request);
    }());
});