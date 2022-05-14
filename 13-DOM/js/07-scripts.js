// Cambiar color del encabezado
// const heading = document.querySelector('h1');

// heading.style.backgroundColor = '#b98eff';
// heading.style.fontFamily = 'Arial';
// heading.style.textTransform = 'uppercase';

// console.log(heading);

const card = document.querySelector('.card');
// Agregar una clase
card.classList.add('new-class', 'second-class');

// Quitar clase
card.classList.remove('second-class');

console.log(card.classList);