// Constructor pattern

// Clase principal
class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

// Clase que hereda de Person
class Client extends Person {
    constructor(name, email, company) {
        super(name, email);
        this.company = company;
    }
}

const client = new Client('Felipe', 'felipe@stripe.com', 'Stripe');
console.log(client);