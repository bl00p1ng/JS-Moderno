// Mediator
function Seller(name) {
    this.name = name;
    this.room = null;
}

Seller.prototype = {
    offer: (article, price) => {
        console.log(`Tenemos el siguiente artículo: ${article}, iniciamos con un precio de $${price}`);
    },
    sold: buyer => {
        console.log(`Vendido a ${buyer}`);
    }
};

function Buyer(name) {
    this.name = name;
    this.room = null;
}

Buyer.prototype = {
    offer: (quantity, buyer) => {
        console.log(`${buyer.name}: $${quantity}`);
    }
};

// Mediador entre compradores y vendedores
function Auction(params) {
    // Colocar al comprador y vendedor en la misma sala
    let buyers = {};

    return {
        register: user => {
            buyers[user.name] = user;
            user.room = this;
        }
    };
}

// Crear objetos
const buyer1 = new Buyer('Andrés');
const buyer2 = new Buyer('Felipe');
const seller = new Seller('Vendedor de Autos');
const auction = new Auction();

// Registrar los objetos para poder asinarles una sala
auction.register(buyer1);
auction.register(buyer2);
auction.register(seller);

seller.offer('Mustang 66', 3000);

buyer1.offer(4000, buyer1);
buyer2.offer(4300, buyer2);
buyer1.offer(4500, buyer1);
buyer2.offer(5000, buyer2);

seller.sold('Felipe');
