// Hay dos formas de declarar clases

// 1. Class declaration
class Client {
    constructor(name, credit) {
        this.name = name;
        this.credit = credit;
    }

    // Método
    showInfo() {
        return `Cliente: ${this.name}, tu saldo es de: ${this.credit}`;
    }

    // Método estático
    static welcome() {
        return 'Bienvenido al Cajero';
    }
}

// Instanciar
const andres = new Client('Andrés', 5000);
console.log(Client.welcome());
console.log(andres.showInfo());

// 2. Class Expression (menos usada)
const Client2 = class {
    constructor(name, credit) {
        this.name = name;
        this.credit = credit;
    }

    showInfo() {
        return `Cliente: ${this.name}, tu saldo es de: ${this.credit}`;
    }
};

// Instanciar
const felipe = new Client2('Felipe', 4000);
console.log(felipe.showInfo());
