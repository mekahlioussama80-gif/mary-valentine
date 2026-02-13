const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
let noCount = 0;

yesBtn.addEventListener('click', function() {
    window.location.href = '/gifts';
});

noBtn.addEventListener('click', function() {
    noCount++;
    
    const noSize = Math.max(0.3, 1 - (noCount * 0.15));
    const yesSize = 1 + (noCount * 0.2);
    
    noBtn.style.transform = `scale(${noSize})`;
    yesBtn.style.transform = `scale(${yesSize})`;
    
    const messages = [
        "Are you sure? 🥺",
        "Really?? 💔",
        "Please? 🙏",
        "Think again! 😢",
        "Last chance! 💕"
    ];
    
    if (noCount <= messages.length) {
        document.querySelector('.question').textContent = messages[noCount - 1];
    }
    
    if (noCount > 3) {
        const x = Math.random() * 100 - 50;
        const y = Math.random() * 100 - 50;
        noBtn.style.position = 'relative';
        noBtn.style.left = x + 'px';
        noBtn.style.top = y + 'px';
    }
    
    if (noCount > 6) {
        noBtn.style.display = 'none';
        document.querySelector('.question').textContent = "Only YES is available now! 💕";
    }
});