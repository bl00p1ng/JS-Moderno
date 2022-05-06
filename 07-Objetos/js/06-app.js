const product = {
    name: 'Monitor 20 pulgadas',
    price: 350,
    isAvailable: true,
    information: {
        dimensions: {
            weight: '1kg',
            width: '1m'
        },
        manufacturing: {
            country: 'China'
        }
    }
};

const {name, information, information: {manufacturing, manufacturing: {country}}} = product;

console.log(name);
console.log(information);
console.log(manufacturing);
console.log(country);