document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('search-bar');
    const allCards = document.querySelectorAll('.card');

    // --- Live Search Filter ---
    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase().trim();
        allCards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const subtitle = card.querySelector('h3').textContent.toLowerCase();
            const isVisible = title.includes(searchTerm) || subtitle.includes(searchTerm);
            card.style.display = isVisible ? 'flex' : 'none';
        });
    });

    // --- Scroll-triggered Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the card is visible
    });

    allCards.forEach(card => {
        observer.observe(card);
    });

    // --- 3D Tilt Effect ---
    allCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            const rotateX = -y / 20; // Adjust divisor for sensitivity
            const rotateY = x / 20;

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
        });

        card.addEventListener('mouseleave', () => {
            // Check if the card is still visible before resetting transform
            if (card.classList.contains('is-visible')) {
                 card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            }
        });
    });
});
