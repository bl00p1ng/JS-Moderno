const loadTextBtn = document.querySelector('#cargarTxt');
loadTextBtn.addEventListener('click', getData);

function getData() {
    fetch('data/datos.txt')
        .then(response => {
            console.log(response);
            return response.text();
        }).then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
}