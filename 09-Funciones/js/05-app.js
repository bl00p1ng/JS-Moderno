function sum(a, b) {  // a y b son parámetros
    console.log(a + b);
}

sum(2, 4);  // a y b son argumentos
sum(200, 184);

function sayHello(name, lastname) {
    console.log(`Hola ${name} ${lastname}`);
}

sayHello('Andrés', 'López');
sayHello('Andrés');  // Los argumentos que no se definen quedan como undefined