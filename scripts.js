function setupMobileCardClicks() {
   const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (window.innerWidth <= 768) {
            // Remove any existing listener first
            card.removeEventListener('click', toggleDescription);
            card.addEventListener('click', toggleDescription);
        } else {
            // Optionally, remove the listener if we go back to desktop size
            card.removeEventListener('click', toggleDescription);
            const description = card.querySelector('.project-description');
            if (description && description.classList.contains('mobile-active')) {
                description.classList.remove('mobile-active');
            }
        }
    });
}

function toggleDescription() {
    const description = this.querySelector('.project-description');
    console.log("Toggling description:", description);
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