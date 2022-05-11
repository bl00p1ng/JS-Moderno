function startApp() {
    console.log('Iniciando App...');
    secondFuntion();
}

function secondFuntion() {
    console.log('Desde la segunda función');
    authUser('Andrés');
}

function authUser(user) {
    console.log('Autenticando usuario...por favor espere...');
    console.log(`Usuario autenticado exitosamente: ${user}`);
}

startApp();