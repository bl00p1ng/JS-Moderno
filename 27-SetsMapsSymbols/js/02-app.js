// WeakSet
const weakSet = new WeakSet();

const client = {
    name: 'Andrés',
    credit: 500
};

// WeakSet methods
weakSet.add(client);
console.log(weakSet);

console.log(weakSet.has(client));

weakSet.delete(client);
console.log(weakSet);
