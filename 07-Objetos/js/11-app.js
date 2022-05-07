const name = 'Hola';
const price = 20;

const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true,
    showInfo: function() {
        console.log(`El producto: ${this.name} tiene un precio de: ${this.price}`);
    }
};

const product2 = {
    name: 'Tablet',
    price: 200,
    isAvailable: true,
    showInfo: function() {
        console.log(`El producto: ${this.name} tiene un precio de: ${this.price}`);
    }
};

product.showInfo();
product2.showInfo();