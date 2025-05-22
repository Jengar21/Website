document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const description = card.querySelector('.project-description');

        if (window.innerWidth <= 768 && description) {
            card.addEventListener('click', function() {
                description.classList.toggle('mobile-active');
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
        const description = card.querySelector('.project-description');
        // Remove any existing click listeners and re-add if on mobile
        const clonedCard = card.cloneNode(true);
        card.parentNode.replaceChild(clonedCard, card);

        if (window.innerWidth <= 768 && description) {
            clonedCard.addEventListener('click', function() {
                const desc = this.querySelector('.project-description');
                if (desc) {
                    desc.classList.toggle('mobile-active');
                }
            });
        }
    });
});
