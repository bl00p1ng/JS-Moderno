export const clientName = 'Andrés';
export const saving = 500;

export function showInfo(name, saving) {
    return `Cliente: ${name} - Ahorro: ${saving}`;
}

export function hasSaving(saving) {
    if (saving > 0) {
        console.log('Si tiene saldo');
    } else {
        console.log('No tiene saldo');
    }
}

export class Client {
    constructor(name, saving) {
        this.name = name;
        this.saving = saving;
    }

    showInfo() {
        return `Cliente: ${this.name} - Ahorro: ${this.saving}`;
    }
}

export default function newFunction() {
    console.log('Este es el export default');
}