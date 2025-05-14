// This file contains JavaScript code for interactivity on the website, such as event listeners and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Example: Add event listener to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('click', function() {
            // Example action: Redirect to project details page
            const projectId = this.getAttribute('data-id');
            window.location.href = `projects.html?id=${projectId}`;
        });
    });

    // Example: Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
