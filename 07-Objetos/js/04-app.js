// Destructuring de Objetos
const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

// Forma anterior
//const name = product.name;

// Destructuring -> Extraer propiedad y asignarla a una variable en el mismo paso
const {name, price} = product;

console.log(name, price);

