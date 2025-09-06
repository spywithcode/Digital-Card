
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('bokeh-container');
    const numberOfDots = 200; // Number of circles to generate
    const containerSize = container.offsetWidth;

    // Function to generate a random number within a range
    const getRandom = (min, max) => Math.random() * (max - min) + min;

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('bokeh-dot');

        const size = getRandom(20, 100); // Random size between 20px and 100px
        const angle = Math.random() * 2 * Math.PI; // Random angle

        // Arrange in a circle with some randomness
        const radius = (containerSize / 2) * 0.8 + Math.random() * (containerSize * 0.1);
        const x = (containerSize / 2) + radius * Math.cos(angle) - (size / 2);
        const y = (containerSize / 2) + radius * Math.sin(angle) - (size / 2);

        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        dot.style.opacity = getRandom(0.2, 0.6); // Random opacity
        // Apply a random initial scale, rotation is now handled by the parent container
        dot.style.setProperty('--scale', getRandom(0.5, 1.2));
        dot.style.animationDelay = `${getRandom(-numberOfDots / 2, 0)}s`; // Stagger animation start times

        container.appendChild(dot);
    }

    // Optional: Recalculate and reposition dots on window resize for better responsiveness
    // This can be performance intensive for many dots, so consider throttling in a real app.
    window.addEventListener('resize', () => {
        // Clear existing dots
        container.innerHTML = '';
        // Regenerate dots based on new container size
        for (let i = 0; i < numberOfDots; i++) {
            const dot = document.createElement('div');
            dot.classList.add('bokeh-dot');

            const size = getRandom(20, 100);
            const containerRect = container.getBoundingClientRect();
            const centerX = containerRect.width / 2;
            const centerY = containerRect.height / 2;

            const angle = getRandom(0, 2 * Math.PI);
            const radius = getRandom(containerRect.width * 0.2, containerRect.width * 0.45);

            const x = centerX + radius * Math.cos(angle) - (size / 2);
            const y = centerY + radius * Math.sin(angle) - (size / 2);

            dot.style.width = `${size}px`;
            dot.style.height = `${size}px`;
            dot.style.left = `${x}px`;
            dot.style.top = `${y}px`;
            dot.style.opacity = getRandom(0.2, 0.6);
            dot.style.setProperty('--scale', getRandom(0.5, 1.2));
            dot.style.animationDelay = `${getRandom(-numberOfDots / 2, 0)}s`;

            container.appendChild(dot);
        }
    });
});
