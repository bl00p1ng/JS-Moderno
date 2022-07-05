// Mixin Pattern
/* Se crea una clase para definir el modelo 
de los datos que va a recibir */
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class Client {
    constructor(name, email, company) {
        this.name = name;
        this.email = email;
        this.company = company;
    }
}

/* Se crean unas funciones externas que se van 
a compartir entre clases */
const personFunctions = {
    showInfo() {
        console.log(`Nombre persona: ${this.name} - Email persona ${this.email}`);
    },
    showName() {
        console.log(`Mi nombre es ${this.name}`);
    }
};

/* Se crea un mixin para agregar las funciones a la clase, 
esto último se hace con Object.assign() */

// Copia el prototype de Person y le añade las funciones
Object.assign(Person.prototype, personFunctions);

Object.assign(Client.prototype, personFunctions);

const person = new Person('Andrés', 'andres@mail.com');
console.log(person);

person.showInfo();
person.showName();

const client = new Client('Felipe', 'felipe@stripe.com', 'Stripe');
console.log(client);

client.showInfo();
client.showName();