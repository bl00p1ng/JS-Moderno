// Seleccionar elementos por su clase
const header = document.getElementsByClassName('header');

console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

// Si hay más de un elemento con la misma clase
const containers = document.getElementsByClassName('contenedor');
console.log(containers);

// Si una clase no existe
const dontExist = document.getElementsByClassName('dont-exist');
console.log(dontExist);
