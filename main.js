const toggleNavbar = document.querySelector('.toggle_navbar');
const navbar = document.querySelector('.navbar');

if (toggleNavbar && navbar) {
    const closeMenu = () => {
        toggleNavbar.classList.remove('active');
        navbar.classList.remove('active');
        toggleNavbar.setAttribute('aria-expanded', 'false');
        toggleNavbar.setAttribute('aria-label', 'Ouvrir le menu');
    };

    toggleNavbar.addEventListener('click', () => {
        const isOpen = toggleNavbar.classList.toggle('active');
        navbar.classList.toggle('active', isOpen);
        toggleNavbar.setAttribute('aria-expanded', String(isOpen));
        toggleNavbar.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    navbar.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event) => {
        const targetId = anchor.getAttribute('href')?.slice(1);
        if (!targetId) {
            return;
        }

        const target = document.getElementById(targetId);
        if (target) {
            event.preventDefault();
            window.history.pushState(null, '', `#${targetId}`);
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

const topButton = document.querySelector('.top');
if (topButton) {
    const updateTopButton = () => {
        topButton.classList.toggle('visible', window.scrollY > 300);
    };

    updateTopButton();
    window.addEventListener('scroll', updateTopButton, { passive: true });
}

const animatedText = document.querySelector('#text');
if (animatedText && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const phrases = ['des interfaces web', 'des sites accessibles', 'des expériences utiles'];
    let phraseIndex = 0;
    let characterIndex = animatedText.textContent.length;
    let deleting = true;

    const animateText = () => {
        const phrase = phrases[phraseIndex];
        characterIndex += deleting ? -1 : 1;
        animatedText.textContent = phrase.slice(0, characterIndex);

        if (characterIndex === 0) {
            deleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
        } else if (characterIndex === phrases[phraseIndex].length) {
            deleting = true;
        }

        window.setTimeout(animateText, deleting ? 65 : 100);
    };

    window.setTimeout(animateText, 1600);
}
