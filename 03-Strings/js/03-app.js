const product = 'Monitor de 20 pulgadas ';
const price = '350 USD';

console.log(product.concat(price));
console.log(product.concat('En descuento'));

console.log(product + 'con un precio de ' + price);
console.log('El producto ' + product + 'tiene un precio de ' + price);

console.log('El producto ', product, 'tiene un precio de ', price);

console.log(`El producto ${product} tiene un precio de ${price}`);