// WeakMap

const product = {
    id: 10
};

// Crear
const weakMap = new WeakMap();

// Añadir elementos
weakMap.set(product, 'Monitor');

console.log(weakMap.has(product));

// La aparte de product queda "oculta", no se puede acceder a sus valores
console.log(weakMap.get(product));
// Aunque desde weakMap si se puede acceder a esos valores
console.log(weakMap);

// Eliminar
weakMap.delete(product);
console.log(weakMap);
