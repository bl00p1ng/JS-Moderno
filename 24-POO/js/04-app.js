class Client {
    #name;
    constructor(name, credit) {
        this.#name = name;
        this.credit = credit;
    }

    // Método
    showInfo() {
        return `Cliente: ${this.#name}, tu saldo es de: ${this.credit}`;
    }

    // Método estático
    static welcome() {
        return 'Bienvenido al Cajero';
    }

    // Getters, Setters
    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const andres = new Client('Andrés', 5000);
console.log(andres);
console.log(andres.showInfo());