function Client(name, credit) {
    this.name = name;
    this.credit = credit;
}

const client = new Client('Felipe', 600);
console.log(client);

function formatClient(client) {
    const {name, credit} = client;

    return `El cliente ${name} tiene un saldo de $${credit}`;
}

function formatEnterprise(enterprise) {
    const {name, credit, category} = enterprise;

    return `El cliente ${name} tiene un saldo de $${credit} y pertenece a la categoria ${category}`;
}

console.log(formatClient(client));

function Enterprise(name, credit, category) {
    this.name = name;
    this.credit = credit;
    this.category = category;
}

enterprise = new Enterprise('Spotify', 1000000, 'Música y podcast');

console.log(formatEnterprise(enterprise));
