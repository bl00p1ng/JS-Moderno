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