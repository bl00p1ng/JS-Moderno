const url = 'https://picsum.photos/list';

document.addEventListener('DOMContentLoaded', getData);

// Con Promises
// function getData() {
//     fetch(url)
//         .then(response => response.json())
//         .then(result => console.log(result))
//         .catch(err => console.error(err));
// }

// Con async - await
async function getData() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}