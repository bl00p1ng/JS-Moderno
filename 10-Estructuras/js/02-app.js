const score = 1000;
const score2 = '1000';

console.log(typeof score);
console.log(typeof score2);

// if(score != 1000) {
//     console.log('Es diferente');
// } else {
//     console.log('No es diferente');
// }

// NO estricto / != -> No es igual no estricto
if(score == 1000) {
    console.log('Es igual');
} else {
    console.log('No es igual');
}

// Estricto (con el tipado) / !== No es igual estricto
if(score === score2) {
    console.log('Es igual');
} else {
    console.log('No es igual');
}

