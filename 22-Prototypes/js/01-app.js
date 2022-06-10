// Object literal (menos dinámica)
const client = {
    name: 'Andrés',
    credit: 500
};

console.log(client);

// Object constructor (más reutilizable)
function Client(name, credit) {
    this.name = name;
    this.credit = credit;
}

const client2 = new Client('Felipe', 600);
console.log(client2);