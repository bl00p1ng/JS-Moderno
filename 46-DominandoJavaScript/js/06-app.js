// New binding
function Car(model, color) {
    this.model = model;  // New binding
    this.color = color;
}

const car = new Car('Camaro', 'Negro');
console.log(car);

// Window binding
window.color = 'Negro';

function showColor() {
    console.log(color);
}

showColor();