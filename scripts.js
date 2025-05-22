document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const indicator = card.querySelector('.mobile-indicator');
        const description = card.querySelector('.project-description');

        if (indicator && description) {
            indicator.addEventListener('click', function() {
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

