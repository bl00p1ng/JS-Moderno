// Closures

const getClient = () => {
    const name = 'Andrés';

    function showName() {
        console.log(name);
    }

    return showName;
};

const client = getClient();

client();