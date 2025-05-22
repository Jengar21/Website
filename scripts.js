function setupMobileCardClicks() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // Remove any existing mobile click listeners to avoid duplicates
        card.removeEventListener('click', toggleDescription);

        if (window.innerWidth <= 768) {
            card.addEventListener('click', toggleDescription);
        }
    });
}

function toggleDescription() {
    const description = this.querySelector('.project-description');
    if (description) {
        description.classList.toggle('mobile-active');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setupMobileCardClicks();

    const links = document.querySelectorAll('.project-card a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    });

    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

window.addEventListener('resize', setupMobileCardClicks);