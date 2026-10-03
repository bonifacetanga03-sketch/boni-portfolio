var typed = new Typed("#text", {
    strings: ["Developpeur web", "Programmeur amateur", "Programmeur"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Menu responsive
const toggleNavbar = document.querySelector('.toggle_navbar');
const navbar = document.querySelector('.navbar');

if (toggleNavbar && navbar) {
    toggleNavbar.addEventListener('click', () => {
        toggleNavbar.classList.toggle('active');
        navbar.classList.toggle('active');
    });
}

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Bouton retour en haut
const topButton = document.querySelector('.top');
if (topButton) {
    topButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Afficher/cacher le bouton retour en haut selon le scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            topButton.style.display = 'block';
        } else {
            topButton.style.display = 'none';
        }
    });
}
