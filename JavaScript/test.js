// Variables
const tooltips = document.querySelectorAll('.tooltip');

// Event Listeners
for (let i = 0; i < tooltips.length; i++) {
    let tooltip = tooltips[i];

    let link = tooltip.parentNode.querySelector('a');

    link.addEventListener('mouseover', function() {
        tooltip.style.display = 'block';
    });

    link.addEventListener('mouseout', function() {
        tooltip.style.display = 'none';
    });
}

// Functions
