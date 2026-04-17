import re

with open('script.js', 'r') as f:
    content = f.read()

# Replace the IntersectionObserver logic
search_pattern = r'// Scroll Animations.*?const parentGrid = el.closest\(\'\.grid\'\);'

replace_text = """// Scroll Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Optional: Stop observing once animated if we only want it to happen once
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Select a wider variety of elements to animate for a cohesive feel
    const elementsToAnimate = document.querySelectorAll(`
        .glass-card,
        .gradient-pill,
        section h2,
        section p,
        .flip-card,
        .tilt-card,
        .bg-white.rounded-2xl.shadow-sm,
        footer .grid > div
    `);

    elementsToAnimate.forEach((el, index) => {
        el.classList.add('scroll-animate');
        observer.observe(el);

        // Add staggered delays for a cascading effect on adjacent elements
        // E.g., cards in a grid
        const parentGrid = el.closest('.grid');"""

new_content = re.sub(search_pattern, replace_text, content, flags=re.DOTALL)

with open('script.js', 'w') as f:
    f.write(new_content)

print("Scroll animations updated in script.js")
