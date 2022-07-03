// onload es equivalente al DOMContentLoaded
self.onload = () => console.log('Ventana lista');

// En ocasiones se usa self como alternativa a this
const product = {
    productName: 'Monitor 27 pulgadas',
    price: 200,
    showInfo: function() {
        // Con self queda más claro que se esta haciendo referencia al mismo objeto
        const self = this;
        return `El producto ${self.productName} tiene un precio de ${self.price} USD`;
    }
};

console.log(product.showInfo());

// Si el atributo se mueve a la ventana global no hace falta reasignar self
window.productName = 'Monitor 27 pulgadas';

const product2 = {
    price: 200,
    showInfo: function() {
        // Con self queda más claro que se esta haciendo referencia al mismo objeto
        return `El producto ${self.productName}`;
    }
};

console.log(product2.showInfo());
