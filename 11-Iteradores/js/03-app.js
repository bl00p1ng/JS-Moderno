// Fizz buzz - 100#
// Multiplos de 3 -> fizz
// MĂșltiplos de 5 -> buzz
// MĂșltiplos de 3 y 5 -> fizz buzz

for (let i = 1; i < 100; i++) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} fizz buzz`);
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if(i % 5 === 0) {
        console.log(`${i} buzz`);
    }
}