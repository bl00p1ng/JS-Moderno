function downloadNewClients() {
    return new Promise(resolve => {
        console.log('Descargando clientes...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados');
        }, 5000);
    });
}

function downloadNewOrders() {
    return new Promise(resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados');
        }, 3000);
    });
}

const app = async () => {
    try {
        const response = await Promise.all([downloadNewClients(), downloadNewOrders()]);
        console.log(response[0]);
        console.log(response[1]);
    } catch (error) {
        console.error(error);
    }
};

app();