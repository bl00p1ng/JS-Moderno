localStorage.removeItem('name');

// Actualizar un elemento

// 1. Definir el elemento a actualizar
const months = JSON.parse(localStorage.getItem('months'));
console.log(months);

// 2. Actualizar dicho elemento
months.push('Abril');
console.log(months);

// 3. Sobreescribir el elemento en localStorage
localStorage.setItem('months', JSON.stringify(months));

// Eliminar todo el localStorage
localStorage.clear();