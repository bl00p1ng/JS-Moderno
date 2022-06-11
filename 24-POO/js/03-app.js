class Client {
    constructor(name, credit) {
        this.name = name;
        this.credit = credit;
    }

    // Método
    showInfo() {
        return `Cliente: ${this.name}, tu saldo es de: ${this.credit}`;
    }

    // Método estático
    static welcome() {
        return 'Bienvenido al Cajero';
    }
}

// Herencia
class Enterprise extends Client {
    constructor(name, credit, phone, category) {
        super(name, credit);
        this.phone = phone;
        this.category = category;
    }

    static welcome() {  // Reescribir un método
        return 'Bienvenido al cajero de empresas';
    }

    showInfo() {  // Reescribir un método
        return `Empresa: ${this.name} - Teléfono: ${this.phone} - Categoria: ${this.category} - Saldo: ${this.credit}`;
    }
}

// Instanciar
const andres = new Client('Andrés', 5000);
const spotify = new Enterprise('Spotify', 1000000, 8926241, 'Música y Podcast');
console.log(Enterprise.welcome());
console.log(spotify.showInfo());
