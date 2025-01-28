document.addEventListener('DOMContentLoaded', () => {
    const noBtn = document.querySelector('.no-btn');
    const yesBtn = document.querySelector('.yes-btn');
    const card = document.querySelector('.card');
    let noBtnClickCount = 0;
    let excuseContainer = document.createElement('div');
    excuseContainer.className = 'excuse-container';
    document.body.appendChild(excuseContainer);
    
    const cuteMessages = [
        "Are you sure? 🥺",
        "Pretty please? 🥰",
        "Don't break my heart! 💔",
        "I'll give you cookies! 🍪",
        "But we're perfect together! ✨",
        "I promise to make you smile! 😊",
        "Think about all the fun we'll have! 🎉",
        "You're making my heart sad! 😢",
        "I'll be the best valentine ever! 💝",
        "Just give it a chance! 🌟"
    ];

    // Combined no button interaction
    noBtn.addEventListener('mouseover', () => {
        // Move button
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        
        // Show excuse message
        const message = document.createElement('div');
        message.className = 'excuse-message';
        message.textContent = cuteMessages[noBtnClickCount % cuteMessages.length];
        
        // Position message near where the button was
        message.style.left = `${randomX}px`;
        message.style.top = `${randomY - 60}px`;
        
        excuseContainer.appendChild(message);
        createMiniHeart(randomX, randomY);
        
        // Increment counter and make yes button bigger
        noBtnClickCount++;
        yesBtn.style.transform = `scale(${1 + noBtnClickCount * 0.1})`;
        
        // Remove message after animation
        setTimeout(() => message.remove(), 2500);
    });
    
    async function showExcuseMessages() {
        for (let i = 0; i < cuteMessages.length; i++) {
            const message = document.createElement('div');
            message.className = 'excuse-message';
            message.textContent = cuteMessages[i];
            
            // Random position on screen
            const randomX = Math.random() * (window.innerWidth - 200);
            const randomY = Math.random() * (window.innerHeight - 100);
            
            message.style.left = `${randomX}px`;
            message.style.top = `${randomY}px`;
            
            excuseContainer.appendChild(message);
            
            // Create mini hearts around the message
            createMiniHeart(randomX, randomY);
            
            // Wait before showing next message
            await new Promise(resolve => setTimeout(resolve, 300));
        }
        
        // Wait for last animation to finish
        return new Promise(resolve => setTimeout(resolve, 2500));
    }
    
    noBtn.addEventListener('mouseover', () => {
        const randomX = Math.random() * (window.innerWidth - noBtn.offsetWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.offsetHeight);
        
        noBtn.style.position = 'absolute';
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
        
        // Change message and create mini hearts
        noBtn.textContent = cuteMessages[noBtnClickCount % cuteMessages.length];
        createMiniHeart(randomX, randomY);
        noBtnClickCount++;
        
        // Make the yes button bigger
        yesBtn.style.transform = `scale(${1 + noBtnClickCount * 0.1})`;
    });
    
    yesBtn.addEventListener('click', () => {
        card.innerHTML = `
            <div class="celebration">
                <div class="heart-animation"></div>
                <div class="confetti"></div>
                <div class="message">
                    <p class="success-text">Yay! 💖</p>
                    <p class="love-message">Thank you for making me the happiest person!</p>
                </div>
                <div class="floating-hearts"></div>
            </div>
        `;
        createConfetti();
        createFloatingHearts();
    });
});

function createMiniHeart(x, y) {
    const heart = document.createElement('div');
    heart.className = 'mini-heart';
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
}

function createConfetti() {
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 3}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        document.querySelector('.confetti').appendChild(confetti);
    }
}

function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(heart);
    }
}