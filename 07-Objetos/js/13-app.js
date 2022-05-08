const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

// Obtener keys
console.log(Object.keys(product));

// Obtener values
console.log(Object.values(product));

// Retorna un array por cada item del objeto -> [key, value]
console.log(Object.entries(product));