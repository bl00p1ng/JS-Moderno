const client = new Map();

// ***** Map Methods *****

// Agregar llave - valor
client.set('name', 'andres');
client.set('type', 'premiun');
client.set('credit', 3000);
client.set(true, true);

console.log(client);

// Tamaño
console.log(client.size);

// Comprobar si existe un valor
console.log(client.has('type'));  // false si no lo encuentra

// Obtener valor
console.log(client.get('name'));  // undefined si no existe

// Reasignar
client.set('credit', 5000);
console.log(client);

// Eliminar elemento
client.delete(true);
console.log(client);

// Iterar
client.forEach((item, index) => console.log(index, item));

// Eliminar todos los elementos
client.clear();
console.log(client);

// Inicializar Map con valores
const patient = new Map([['nombre', 'paciente'], ['cuarto', 'no definido']]);
// Agregar valores después de inicializar
patient.set('doctor', 'asignado');
console.log(patient);
