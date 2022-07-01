// Funciones que retornan funciones
const getClient = () => () => console.log('Andrés López');

// Se retorna la función más interna, asignandole un alias
const fn = getClient();

// Llama a la función más interna
fn();