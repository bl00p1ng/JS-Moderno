// Implicit Binding
const person = {
    name: 'Andrés',
    age: 20,
    getInfo() {
        console.log(`Mi nombre es ${this.name} y mi edad es ${this.age}`);
    },
    pet: {
        name: 'Luna',
        age: 1,
        getInfo() {
            console.log(`Mi nombre es ${this.name} y mi edad es ${this.age}`);
        }
    }
};

person.getInfo();
person.pet.getInfo();