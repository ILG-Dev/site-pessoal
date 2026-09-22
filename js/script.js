document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        const destino = document.querySelector(this.getAttribute('href'));
        destino.scrollIntoView({ behavior: 'smooth' });
    });
});