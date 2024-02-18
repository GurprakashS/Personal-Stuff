// Variables
const links = document.querySelectorAll('.navbar-link');

// Event Listeners
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        const additionalInfo = link.nextElementSibling;
        additionalInfo.style.display = 'block';
    });

    link.addEventListener('mouseout', () => {
        const additionalInfo = link.nextElementSibling;
        additionalInfo.style.display = 'none';
    });
});

// Functions
