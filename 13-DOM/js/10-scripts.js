// Crear elemento
const link = document.createElement('a');

// Agregar texto
link.textContent = 'Nuevo enlace';

// Agregar href
link.href = 'nuevo-enlace';

// Agregar target
link.target = '_blank';

console.log(link);

// Seleccionar navegación para agregar elemento
const navigation = document.querySelector('.navegacion');

// navigation.appendChild(link);  // Lo pone al final

// Lo pone antes de un elemento especifico
navigation.insertBefore(link, navigation.children[1]);

// CREAR UN CARD
// Crear parráfos
const paragraph1 = document.createElement('p');
paragraph1.textContent = 'Concierto';
paragraph1.classList.add('categoria', 'concierto');

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Concierto de Cleopatrick';
paragraph2.classList.add('titulo');

const paragraph3 = document.createElement('p');
paragraph3.textContent = '$200 por persona';
paragraph3.classList.add('precio');

// Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');

info.appendChild(paragraph1);
info.appendChild(paragraph2);
info.appendChild(paragraph3);

// Crear imagen
const image = document.createElement('img');
image.src = 'img/hacer5.jpg';
image.alt = 'Concierto de Cleopatrick';

// Crear card
const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagem
card.appendChild(image);

// Asiganr info
card.appendChild(info);

// Insertar en el HTML
const container = document.querySelector('.hacer .contenedor-cards');
container.appendChild(card);