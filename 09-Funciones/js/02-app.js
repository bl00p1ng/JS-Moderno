// Function declaration (Declaración de función)
/* JS escanea las funciones y las guarda (hoisting) 
por que se puede llamar una función antes de declararla */
sum();
function sum() {
    console.log(2 + 2);
}


// Function Expression
/* El comportamiento descrito previamente no aplica para 
las funciones creadas usando function expression */
sum2();
const sum2 = function () {
    console.log(3 + 3);
};
