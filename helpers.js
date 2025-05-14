function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
}

function truncateString(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    }
    return str;
}

function generateProjectCard(project) {
    return `
        <div class="project-card">
            <h3>${project.title}</h3>
            <p>${truncateString(project.description, 100)}</p>
            <span>${formatDate(project.date)}</span>
            <a href="${project.link}" target="_blank">View Project</a>
        </div>
    `;
}