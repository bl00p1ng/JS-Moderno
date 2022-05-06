const boolean1 = true;
const boolean2 = false;
const boolean3 = 'true';

console.log(boolean1);
console.log(boolean2);

console.log(typeof boolean1);

// 'true': str no es igual a true:boolean
console.log(boolean1 == boolean2);

// Otra forma (menos común) de crear booleans
const boolean4 = new Boolean(true);
console.log(boolean4);
// Lo anterior crea un objeto, no un tipo primitivo
console.log(typeof boolean4);