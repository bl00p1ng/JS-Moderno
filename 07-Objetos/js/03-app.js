const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

// Agregar nuevas propiedades al objeto
product.image = 'image.png';

// Eliminar propiedades del objeto
delete product.isAvailable;

console.table(product);