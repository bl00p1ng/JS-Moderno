const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

const dimensions = {
    weight: '1kg',
    with: '1m'
};

console.table(product);
console.table(dimensions);

// Assign
const result = Object.assign(product, dimensions);

// Spread Operator o Rest Operator (más usada)
const result2 = {...product, ...dimensions};

console.table(result);
console.table(result2);