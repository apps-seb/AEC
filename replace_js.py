import re

with open('script.js', 'r') as f:
    content = f.read()

# Make flip cards flip on card click instead of just the button since pointer-events-none was added to buttons
flip_logic_old = """    // Flip Card Logic
    const flipBtns = document.querySelectorAll('.flip-btn');
    flipBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent any parent handlers
            const cardInner = btn.closest('.flip-card-inner');
            if (cardInner) {
                cardInner.classList.toggle('flipped');
            }
        });
    });"""

flip_logic_new = """    // Flip Card Logic
    const flipCards = document.querySelectorAll('.flip-card');
    flipCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const cardInner = card.querySelector('.flip-card-inner');
            if (cardInner) {
                cardInner.classList.toggle('flipped');
            }
        });
    });"""

content = content.replace(flip_logic_old, flip_logic_new)

with open('script.js', 'w') as f:
    f.write(content)

print("JS updated")
