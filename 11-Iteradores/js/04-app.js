// While
let i = 1;

// while(i < 10) {
//     console.log(i);
//     i++;
// }

// while(i <= 10) {
//     if(i % 2 === 0) {
//         console.log(`${i} es PAR`);
//     } else {
//         console.log(`${i} es IMPAR`);
//     }
//     i++;
// }

while (i < 100) {
    if(i % 5 === 0 && i % 3 === 0) {
        console.log(`${i} fizz buzz`);
    } else if(i % 3 === 0) {
        console.log(`${i} fizz`);
    } else if(i % 5 === 0) {
        console.log(`${i} buzz`);
    }
    i++;
}