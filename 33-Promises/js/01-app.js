const countries = ['Colombia', 'México', 'España', 'Chile', 'Argentina'];

function newCountry(country, callback) {
    setTimeout(() => {
        countries.push(country);
        callback();
    }, 2000);
}

function showCountries() {
    setTimeout(() => {
        countries.forEach(country => {
            console.log(country);
        });
    }, 1000);
}

showCountries();
newCountry('Uruguay', showCountries);