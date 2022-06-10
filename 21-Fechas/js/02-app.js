const today = new Date();

moment.locale('es');

// Formatear fecha
console.log(moment().format('MMMM DD YYYY h:mm:ss a'));
console.log(moment().format('LLLL', today));

// Añadir tiempo
console.log(moment().add(3, 'days').calendar());