const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const months2 = ['Agosto', 'Septiembre'];
const months3 = ['Octubre', 'Noviembre', 'Diciembre'];

// Concat
const result = months.concat(months2, months3, 'Otro mes');
console.log(result);

// Spread operator
const result2 = [...months, ...months2, ...months3, 'Otro mes'];
console.log(result2);