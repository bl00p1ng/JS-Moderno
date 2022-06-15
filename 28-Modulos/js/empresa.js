import {Client} from './cliente.js'

export class Enterprise extends Client {
    constructor(name, saving, category) {
        super(name, saving);
        this.category = category;
    }

    showInfo() {
        return `Cliente: ${this.name} - Ahorro: ${this.saving}- categoria ${this.category}`;
    }
}