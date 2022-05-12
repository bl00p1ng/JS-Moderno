const car = {
    model: 'Camaro',
    year: 1969,
    engine: '6.0'
};

// for(let property in car) {
//     console.log(property);
// }

// for(let property in car) {
//     console.log(`${car[property]}`);
// }

for(let [key, value] of Object.entries(car)) {
    console.log(key);
    console.log(value);
}