// Traversing
const navigation = document.querySelector('.navegacion');

// console.log(navigation);
// console.log(navigation.childNodes);  // Saltos de linea se consideran Nodos
// console.log(navigation.children);
console.log(navigation.firstElementChild);
console.log(navigation.lastElementChild);

// NodeList es similar a un Array

const card = document.querySelector('.card');
card.children[1].children[1].textContent = 'Nuevo heading desde JS\nDOM Traversing';
console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer4.jpg';

// Traversing de hijo a padre
// Considera los espacios en blanco/saltos de linea como nodos
console.log(card.parentNode);
// Lo mismo pero sin considerar los espacios en blanco/saltos de linea como nodos
console.log(card.parentElement.parentElement.parentElement);

// Traversing entre elementos hermanos 
// Hermano que sigue
console.log(card);
console.log(card.nextElementSibling);
console.log(card.nextElementSibling.nextElementSibling);

// Hermano previo
const lastCard =document.querySelector('.card:nth-child(4)');
console.log(lastCard.previousElementSibling);