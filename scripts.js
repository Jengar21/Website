function toggleDescriptionByTitle() {
    if (window.innerWidth <= 768) {
        const projectCard = this.closest('.project-card');
        if (projectCard) {
            const description = projectCard.querySelector('.project-description');
            if (description) {
                description.classList.toggle('mobile-active');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const projectTitles = document.querySelectorAll('.project-title-mobile');
    projectTitles.forEach(title => {
        title.addEventListener('click', toggleDescriptionByTitle);
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
    const projectTitles = document.querySelectorAll('.project-title-mobile');
    projectTitles.forEach(title => {
        // Re-attach listeners on resize to handle mobile/desktop transition
        title.removeEventListener('click', toggleDescriptionByTitle);
        title.addEventListener('click', toggleDescriptionByTitle);
    });
});