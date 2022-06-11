function Client(name, credit) {
    this.name = name;
    this.credit = credit;
}

// Crear una función en el prototype
Client.prototype.clientType = function() {
    let type;

    if (this.credit > 10000) {
        type = 'Gold';
    } else if (this.credit > 5000) {
        type = 'Platinum';
    } else {
        type = 'Normal';
    }

    return type;
};

Client.prototype.clientNameCredit = function () {
    return `Nombre: ${this.name} - Saldo ${this.credit} - Tipo Cliente: ${this.clientType()}`;
};

Client.prototype.withdrawCredit = function(amount) {
    this.credit -= amount;
};

// Instanciar objeto
const client = new Client('Felipe', 6000);
client.withdrawCredit(300);
console.log(client.clientNameCredit());

// Herencia
function Person(name, credit, phone) {
    Client.call(this, name, credit);  // Heredar name y credit de Client
    this.phone = phone;
}

// Heredar métodos
Person.prototype = Object.create(Client.prototype);

const person = new Person('Andrés', 5000, 1311355);
console.log(person);
console.log(person.clientNameCredit());

Person.prototype.showPhone = function() {
    return `El teléfono es: ${this.phone}`;
};

console.log(person.showPhone());
