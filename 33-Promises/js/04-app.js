const countries = [];

const newCountry = country => new Promise(resolve => {
    setTimeout(() => {
        countries.push(country);
        resolve(`País agregado: ${country}`);
    }, 3000);
});

newCountry('Argentina')
    .then(result => {
        console.log(result);
        console.log(countries);

        return newCountry('Colombia')
            .then(result => {
                console.log(result);
                console.log(countries);

                return newCountry('México')
                    .then(result => {
                        console.log(result);
                        console.log(countries);
                    });
            });
    });