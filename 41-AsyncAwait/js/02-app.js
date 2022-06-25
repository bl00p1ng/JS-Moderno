function downloadClients() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve('El listado de clientes se descargo correctamente');
            } else {
                reject('Error en la conexión');
            }
        }, 3000);
    });
}

// Async await
async function run() {
    try {
        const response = await downloadClients();

        // Se ejecuta cuando finalice la ejecución de downloadClients()
        console.log(2 + 2);
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

run();