const sym1 = Symbol('1');
const sym2 = Symbol('1');

// No hay 2 symbol, iguales
if (sym1 === sym2) {
    console.log('Son  iguales');
} else {
    console.log('No son iguales');
}

const name = Symbol();
const lastLame = Symbol();

const person = {};

// Usar los symbol name y lastName como propiedades de person
person[name] = 'Andrés';
person[lastLame] = 'López';
// Agregar propiedades de la forma "normal"
person.type = 'Premium';
person.credit = 500;

console.log(person);

// Acceder a las propiedades que son symbols
console.log(person[name]);

// Las propiedades que utilizan un symbol no son iterables. Se mantienen privadas.
for (let i in person) {
    console.log(i);
}

// Definir una descripción del symbol
const clientName = Symbol('Nombre del Clente');

const client = {};

client[clientName] = 'Felipe';
console.log(client);

console.log(client[clientName]);
