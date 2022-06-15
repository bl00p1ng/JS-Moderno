// Algunos iteradores relativamente nuevos
const cities = ['Londres', 'New York', 'Madrid', 'Paris'];
const buyOrders = new Set([123, 231, 321, 221]);

const data = new Map();
data.set('name', 'Andrés');
data.set('job', 'Developer');

// Entries Iterator. Retorna un array por cada valor -> [key, value]
for (let entry of cities.entries()) {
    console.log(entry);
}

for (let entry of buyOrders.entries()) {
    console.log(entry);
}

for (let entry of data.entries()) {
    console.log(entry);
}

// Values Iterator
for (let entry of cities.values()) {
    console.log(entry);
}

for (let entry of buyOrders.values()) {
    console.log(entry);
}

for (let entry of data.values()) {
    console.log(entry);
}

// Keys Iterator
for (let entry of cities.values()) {
    console.log(entry);
}

for (let entry of buyOrders.values()) {
    console.log(entry);
}

for (let entry of cities.keys()) {
    console.log(entry);
}

for (let entry of buyOrders.keys()) {
    console.log(entry);
}

for (let entry of data.keys()) {
    console.log(entry);
}

// Cada uno de estos tipos de datos (array, set, map) tiene también su propio iterador por defecto
// Array -> Iterador trae los valores
for (let city of cities) {
    console.log(city);
}

// Set -> Trae los valores
for (let order of buyOrders) {
    console.log(order);
}

// Map -> Trae llave - valor
for (let d of data) {
    console.log(d);
}