localStorage.setItem('name', 'Andrés');

const product = {
    name: 'Monitor 27 pulgadas',
    price: 300
};

// Pasar objeto a String
const productString = JSON.stringify(product);

// Guardar objeto en localStorage
localStorage.setItem('product', productString);

const months = ['Enero', 'Febrero', 'Marzo'];

// Pasar array a String
const monthsString = JSON.stringify(months);

// Guardar array en localStorage
localStorage.setItem('months', monthsString);