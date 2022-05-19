const form = document.querySelector('#formulario');

form.addEventListener('submit', validateForm);

function validateForm(e) {
    e.preventDefault();
    console.log(e.target.action);
}