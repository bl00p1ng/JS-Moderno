// const firstLink = document.querySelector('a');
// console.log(firstLink);

// // Eliminar por si mismo
// firstLink.remove();

// Eliminar desde el padre
const navigation = document.querySelector('.navegacion');
console.log(navigation.children);
navigation.removeChild(navigation.children[2]);