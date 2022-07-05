// Namespace

/* Se crea el objeto y se va poblando con todas 
las funciones y objetos necesarios */
const restaurantApp = {};

// Se agregan los platillos del menu
restaurantApp.menu = [
    {
        menuItem: 'Pizza',
        price: 25
    },
    {
        menuItem: 'Hamburguesa',
        price: 10
    },
    {
        menuItem: 'Hot Dog',
        price: 8
    }
];

// Se agregan las funciones de la App
restaurantApp.functions = {
    showMenu(menu) {
        console.log('**** MENU ****');
        menu.forEach((item, index) => {
            console.log(`${index}: ${item.menuItem} - Precio $ ${item.price}`);
        });
    },
    buy(id) {
        console.log(`Tu platillo: ${restaurantApp.menu[id].menuItem} se esta preparando`);
    },
    addItemToMenu(menuItem, price) {
        const newItem = {
            menuItem,
            price
        };

        restaurantApp.menu.push(newItem);
    }
};

/* En lugar de usar showMenu() que puede chocar con otro 
nombre de la app, se usa restaurantApp.functions.showMenu() 
para llamar a la función */
const {menu} = restaurantApp;

restaurantApp.functions.showMenu(menu);

restaurantApp.functions.buy(1);

restaurantApp.functions.addItemToMenu('Burrito', 6);
console.log(restaurantApp.menu);