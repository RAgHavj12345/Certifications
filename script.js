document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const cards = document.querySelectorAll('.card');

    // Live search filter
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();

        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const subtitle = card.querySelector('h3').textContent.toLowerCase();
            const isVisible = title.includes(searchTerm) || subtitle.includes(searchTerm);
            
            card.style.display = isVisible ? 'flex' : 'none';
        });
    });
});
