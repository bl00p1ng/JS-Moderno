// Hay dos formas de declarar clases

// 1. Class declaration
class Client {
    constructor(name, credit) {
        this.name = name;
        this.credit = credit;
    }
}

// Instanciar
const andres = new Client('Andrés', 5000);
console.log(andres);

// 2. Class Expression (menos usada)
const Client2 = class {
    constructor(name, credit) {
        this.name = name;
        this.credit = credit;
    }
};

// Instanciar
const felipe = new Client2('Felipe', 4000);
console.log(felipe);
