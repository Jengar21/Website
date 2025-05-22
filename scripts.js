function toggleDescriptionByTitle(e) {
     if (window.innerWidth <= 768) {
        e.stopPropagation(); 
        const projectCard = this.closest('.project-card');
        if (projectCard) {
            document.querySelectorAll('.project-description.mobile-active').forEach(desc => {
                if (!projectCard.contains(desc)) {
                    desc.classList.remove('mobile-active');
                }
            });
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
        title.removeEventListener('click', toggleDescriptionByTitle);
        title.addEventListener('click', toggleDescriptionByTitle);
    });
});