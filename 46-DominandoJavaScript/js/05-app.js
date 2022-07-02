// Explicit binding
function person(genre1, genre2) {
    console.log(`Mi nombre es ${this.name} y escucho ${genre1} y ${genre2}`);
}

const information = {
    name: 'Andrés'
};

const favoriteMusic = ['Rock', 'Thrash metal'];

// Usando call
person.call(information, favoriteMusic[0], favoriteMusic[1]);

// Usando apply
person.apply(information, favoriteMusic);

// Usando bind
const newFn = person.bind(information, favoriteMusic[0], favoriteMusic[1]);
newFn();