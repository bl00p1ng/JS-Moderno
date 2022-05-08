const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];

// Los arrays se pueden modificar aunque esten definidos con const
// months[0] = 'Nuevo mes';
months[10] = 'Ultimo mes';

console.table(months);