// Object literal
const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

// Object Constructor
function Product(name, price) {
    this.name = name;
    this.price = price;
}

const product2 = new Product('Monitor 24 Pulgadas', 500);
console.table(product2);

const product3 = new Product('Televisión', 900);
console.table(product3);
