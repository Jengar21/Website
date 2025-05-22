document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        if (window.innerWidth <= 768) {
            card.addEventListener('click', function() {
                const description = this.querySelector('.project-description');
                if (description) {
                    description.classList.toggle('mobile-active');
                }
            });
        }
    });

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

window.addEventListener('resize', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        // Remove any existing click listeners
        const clonedCard = card.cloneNode(true);
        card.parentNode.replaceChild(clonedCard, card);

        // Re-add click listener for mobile
        if (window.innerWidth <= 768) {
            clonedCard.addEventListener('click', function() {
                const description = this.querySelector('.project-description');
                if (description) {
                    description.classList.toggle('mobile-active');
                }
            });
        }
    });
});