window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const location = premium.getBoundingClientRect();
    
    console.log(location);

    if (location.top < 784) {
        console.log('El elemento ya esta visible');
    } else {
        console.log('Aún no, da más scroll');
    }
});