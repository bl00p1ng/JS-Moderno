import {clientName, saving, showInfo, hasSaving, Client} from './cliente.js'

console.log(clientName);
console.log(saving);

console.log(showInfo(clientName, saving));

hasSaving(saving);

const client = new Client(clientName, saving);
console.log(client);
console.log(client.showInfo());
