const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true
};

// Aunque product sea const sus propiedades se pueden reasignar
product.isAvailable = false;

// También se puede eliminar una propiedad
delete product.price;

console.table(product);