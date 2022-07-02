// Si se usa function declaration se puede llamar una función antes de declararla
getClient('Andrés');

function getClient(name) {
    console.log(`El nombre del cliente es: ${name}`);
}

// En el caso de function expression, no se puede llamar la función antes de declararla
getClient2();  // Esto dará un error
const getClient2 = name => console.log(`El nombre del cliente es: ${name}`);