const header = document.querySelector('.contenido-hero h1');
console.log(header);

// console.log(header.innerText);  // No encuentra elementos ocultos con CSS
// console.log(header.textContent);  // Si encuentra elementos ocultos con CSS
// console.log(header.innerHTML);  // Trae el HTML

// Chaining
const header2 = document.querySelector('.contenido-hero h1').textContent;
console.log(header2);

// Modificar nodos desde JS
// document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';
const newHeading = 'Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent = newHeading;

// Modificar src de un img
const image = document.querySelector('.card img');
image.src = 'img/hacer4.jpg';
console.log(image);