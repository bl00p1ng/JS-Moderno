/* Las siguientes son funciones de uso general que se iran asignando 
a los objetos correspondientes para reutilizarlas */

// Muestra el nombre
const getName = info => ({
    showName() {
        console.log(`Nombre: ${info.name}`);
    }
});

// Guarda un email: ejemplo de cuando se le pasa un parametro a la función
const saveEmail = info => ({
    addEmail(email) {
        console.log(`Guardando el email de ${info.name}`);
        info.email = email;
    }
});

// Mostrar el email
const getEmail = info => ({
    showEmail() {
        console.log(`Email: ${info.email}`);
    }
});

// Mostrar la empresa del cliente
const getCompany = info => ({
    showCompany() {
        console.log(`Empresa: ${info.company}`);
    }
});

// Mostrar el puesto del empleado
const getJob = info => ({
    showJob() {
        console.log(`Cargo: ${info.job}`);
    }
});

// Constructores de los objetos
function Client(name, email, company) {
    let info = {
        name,
        email,
        company
    };

    // Copiar la función dentro del objeto
    return Object.assign(
        info,
        getName(info),
        saveEmail(info),
        getEmail(info),
        getCompany(info)
    );
}

function Employee(name, email, job) {
    let info = {
        name,
        email,
        job
    };

    // Copiar la función dentro del objeto
    return Object.assign(
        info,
        getName(info),
        saveEmail(info),
        getEmail(info),
        getJob(info)
    );
}

/* Los siguientes son los objetos que van a hacer uso de las funciones
creadas más arriba */
const client = Client('Andrés', 'andres@spotify.com', 'Spotify');
const employee = Employee('Felipe', 'felipe@spotify.com', 'Software Engineer');

// Usar las funciones asociadas al objeto
client.showName();
client.showEmail();
client.showCompany();

console.log('******************************');

employee.showName();
employee.showEmail();
employee.showJob();

console.log('******************************');

// Cuando el valor (email) no se asigna en el constructor sino en un una función
const client2 = Client('Mariana', null, 'Rappi');
const employee2 = Employee('Mónica', null, 'Marketing');

client2.addEmail('mariana@rappi.com');
client2.showEmail();

console.log('******************************');

employee2.addEmail('monica@mercadolibre.com');
employee2.showEmail();
