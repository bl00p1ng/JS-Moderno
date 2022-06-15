import {clientName, saving, showInfo, hasSaving, Client} from './cliente.js'
// Importar empresa
import { Enterprise } from './empresa.js';

console.log(clientName);
console.log(saving);

console.log(showInfo(clientName, saving));

hasSaving(saving);

const client = new Client(clientName, saving);
console.log(client);
console.log(client.showInfo());


const enterprise = new Enterprise('Spotify', 1000000, 'Música y Podcast');
console.log(enterprise.showInfo());