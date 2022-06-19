const countries = [];

function newCountry(country, callback) {
    countries.push(country);
    console.log(`País agregado: ${country}`);
    callback();
}

function showCountries() {
    console.log(countries);
}

function startCallbackHell() {
    setTimeout(() => {
        newCountry('Argentina', showCountries);

        setTimeout(() => {
            newCountry('Colombia', showCountries);

            setTimeout(() => {
                newCountry('México', showCountries);
            }, 3000);
        }, 3000);
    }, 3000);
}

startCallbackHell();