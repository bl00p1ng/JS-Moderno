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

// Eliminar un cliente de la DB
export const deleteRecord = async id => {
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE',
            
        });
    } catch (error) {
        console.error(error);
    }
}

// Obtener un cliente por su ID
export const getClientByID = async id => {
    try {
        const response = await fetch(`${url}/${id}`);
        const client = await response.json();
        return client;
    } catch (error) {
        console.error(error);
    }
}