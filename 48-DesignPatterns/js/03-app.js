// Singleton pattern

// Almacena la instancia de la clase
let instance = null;

class Person {
    constructor(name, email) {
        // Verificar que no se creen varias instancias
        if (!instance) {
            this.name = name;
            this.email = email;
            instance = this;  // Guarda la instancia de la clase
        } else {
            return instance;
        }
    }
}

const person = new Person('Andrés', 'andres@mail.com');
console.log(person);

// Al intentar crear una nueva instancia, el constructor retorna la que se creo previamente
const person2 = new Person('Felipe', 'andres@mail.com');
console.log(person2);