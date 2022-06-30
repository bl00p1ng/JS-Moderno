const url = "http://localhost:4000/clients";

// Agregar un nuevo cliente en la DB
export const newClient = async client => {
    try {
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(client),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        window.location.href = 'index.html';
    } catch (error) {
        console.error(error);
    }
};

// Obtener los clientes de la API
export const getClients = async () => {
    try {
        const response = await fetch(url);
        const clients = await response.json();
        return clients;
    } catch (error) {
        console.error(error);
    }
}