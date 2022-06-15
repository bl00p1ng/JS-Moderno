document.addEventListener('DOMContentLoaded', () => {
    crmDB();
});

function crmDB() {
    // Crear base de datos version 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // Si hay un error
    crmDB.onerror = () => console.log('Hubo un error al crear la DB');

    // Si salio bien
    crmDB.onsuccess = () => console.log('DB creada exitosamente');

    // Configuración de la DB (solo se ejecuta una vez, al crear la DB)
    crmDB.onupgradeneeded = () => console.log('DB Config. Solo se ejecuta una vez');
}