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