const learning = function(tech) {
    console.log(`Aprendiendo ${tech}`);
};
learning('JavaScript');

// La anterior función se puede declarar de forma más corta con un arrow function
const learning2 = tech => `Aprendiendo ${tech}`;
console.log(learning2('JavaScript'));

const learning3 = (tech1, tech2) => `Aprendiendo ${tech1} y ${tech2}`;
console.log(learning3('JavaScript', 'NodeJS'));
