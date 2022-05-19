// Event Bubbling

const cardDiv = document.querySelector('.card');
const info = document.querySelector('.info');
const title = document.querySelector('.titulo');

cardDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en card');
});

info.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en info');
});

title.addEventListener('click', e => {
    e.stopPropagation();
    console.log('Click en title');
});
