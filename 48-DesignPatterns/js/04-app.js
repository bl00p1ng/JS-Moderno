// Factory pattern
class inputHTML {
    constructor(type, name) {
        this.type = type;
        this.name = name;
    }

    createInput() {
        return `<input type="${this.type}" name="${this.name}" id="${this.name}">`;
    }
}

class HTMLFactory {
    createElement(type, name) {
        // Crea la instancia con base una condición
        switch (type) {
            case 'text':
                return new inputHTML('text', name);
            case 'tel':
                return new inputHTML('tel', name);
            case 'email':
                return new inputHTML('email', name);
            default:
                return;
        }
    }
}

/* Se pueden crear diferentes objetos en base a los 
datos que se pasen al constuctor del factory */
const element = new HTMLFactory();
const inputText = element.createElement('text', 'client-name');
console.log(inputText.createInput());

const element2 = new HTMLFactory();
const inputTel = element2.createElement('tel', 'client-phone');
console.log(inputTel.createInput());

const element3 = new HTMLFactory();
const inputEmail = element2.createElement('email', 'client-email');
console.log(inputEmail.createInput());