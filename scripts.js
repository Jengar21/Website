document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            
            const projectId = this.getAttribute('data-id');
            window.location.href = `projects.html?id=${projectId}`;
        });
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