// Module pattern
// Con los módulos de EcmaScript
const showClient = (clientName) => {
    console.log(clientName);
};

export default showClient;

// Antes de los módulos de EcmaScript
// const module = (function() {
//     const name = 'Andrés';

//     function greetings() {
//         console.log('Hola!');
//     }

//     return {
//         name,
//         greetings
//     };
// })();

// console.log(module.name);