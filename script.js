// This script is ready for future enhancements.
// For now, it ensures all elements are loaded before applying animations.
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 100}ms`;
    });
});

// Example of future interactivity:
// You could add a "Show/Hide Tasks" button to each card.
