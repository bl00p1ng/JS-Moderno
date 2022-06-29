(() => {
    // ********** SELECTORES **********
    const form = document.querySelector('#formulario');
    
    // EVENT LISTENERS
    form.addEventListener('submit', validateClient);
    
    
    // FUNCIONES
    // Validar los datos del cliente ingresador por el usuario
    function validateClient(e) {
        e.preventDefault();
        
        // Obtener datos del form
        const name = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#telefono').value;
        const enterprise = document.querySelector('#empresa').value;

        // Guarda los datos extraidos del form en un objeto
        const client = {
            name,
            email,
            phone,
            enterprise
        };

        // Revisar si existen campos vacíos
        if (hasEmpty(client)) {
            // Mostrar mensaje de error
            console.error('Todos los campos son obligatorios');
            return;
        }

        console.log('Si se paso la validación');
    }

    // Validar que no existan campos vacíos en el form. Retorna true si hay un campo vacío
    function hasEmpty(clientObject) {
        return !Object.values(clientObject).every(input => input !== '');
    }

})();