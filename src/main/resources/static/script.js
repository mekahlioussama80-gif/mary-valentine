// Screen Management
let currentScreen = 1;

const screens = {
    1: document.getElementById('screen1'),
    2: document.getElementById('screen2'),
    gift1: document.getElementById('gift1'),
    gift2: document.getElementById('gift2'),
    gift3: document.getElementById('gift3')
};

// Button Elements
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const giftBoxes = document.querySelectorAll('.gift-box');

let noClickCount = 0;

// Show specific screen
function showScreen(screenId) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    screens[screenId].classList.add('active');
    currentScreen = screenId;
}

// YES Button - Go to gift selection
yesBtn.addEventListener('click', function() {
    createConfetti();
    setTimeout(() => {
        showScreen(2);
    }, 800);
});

// NO Button - Make it difficult
const noMessages = [
    "Are you sure? 🥺",
    "Really? Think again! 💔",
    "Please? Pretty please? 🙏",
    "You're breaking my heart! 😢",
    "One more chance? 💕"
];

noBtn.addEventListener('click', function() {
    noClickCount++;
    
    // Shrink NO button, grow YES button
    const noSize = Math.max(0.4, 1 - (noClickCount * 0.15));
    const yesSize = 1 + (noClickCount * 0.2);
    
    noBtn.style.transform = `scale(${noSize})`;
    yesBtn.style.transform = `scale(${yesSize})`;
    
    // Change text
    if (noClickCount <= noMessages.length) {
        document.querySelector('.question-text').textContent = noMessages[noClickCount - 1];
    }
    
    // Move NO button randomly
    if (noClickCount > 2) {
        const randomX = Math.random() * 100 - 50;
        const randomY = Math.random() * 100 - 50;
        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    }
    
    // Hide NO button
    if (noClickCount > 5) {
        noBtn.style.opacity = '0';
        noBtn.style.pointerEvents = 'none';
        document.querySelector('.question-text').textContent = "The NO button disappeared! You have to say YES! 💕";
    }
});

// Gift Selection
giftBoxes.forEach(box => {
    box.addEventListener('click', function() {
        const giftNumber = this.getAttribute('data-gift');
        
        // Generate QR code for Gift 3
        if (giftNumber === '3') {
            generateQRCode();
        }
        
        showScreen('gift' + giftNumber);
    });
});

// Back to gift selection
function goBack() {
    showScreen(2);
}

// Generate QR Code for Spotify link
function generateQRCode() {
    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ''; // Clear previous QR code
    
    // Replace with your actual Spotify link or any URL
    const spotifyLink = 'https://open.spotify.com/playlist/YOUR_PLAYLIST_ID';
    
    new QRCode(qrcodeContainer, {
        text: spotifyLink,
        width: 200,
        height: 200,
        colorDark: '#d62828',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
}

// Confetti Effect
function createConfetti() {
    const colors = ['#ff85a1', '#ffb3c1', '#ffc8dd', '#d62828', '#ffccd5'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;
            
            document.body.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }, i * 30);
    }
}

// Confetti animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            top: 100vh;
            transform: translateX(${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg);
        }
    }
`;
document.head.appendChild(style);