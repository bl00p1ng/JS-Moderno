(function() {
    // ********** VARIABLES Y SELECTORES **********
    let DB;


    document.addEventListener('DOMContentLoaded', createDB);

    // ********** FUNCIONES **********
    function createDB() {
        // Crear DB en su versión 1.0
        const createDataBase = window.indexedDB.open('crm', 1);

        // Si la DB se crea correctamente
        createDataBase.onsuccess = () => DB = createDataBase.result;

        // Si ocurre un error al crear la DB
        createDataBase.onerror = () => console.log('Ocurrio un error a la hora de crear la base de datos');

        // Configurar la DB
        createDataBase.onupgradeneeded = e => {
            const db = e.target.result;
            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            });

            // Campos del objectStore
            objectStore.createIndex('name', 'name', {unique: false});
            objectStore.createIndex('email', 'email', {unique: false});
            objectStore.createIndex('phone', 'phone', {unique: true});
            objectStore.createIndex('enterprise', 'enterprise', {unique: false});
            objectStore.createIndex('id', 'id', {unique: false});

            console.log('DB lista y creada');
        };
    }
})();
