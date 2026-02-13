// Generate QR Code on page load
window.addEventListener('load', function() {
    const spotifyLink = 'YOUR_SPOTIFY_LINK_HERE'; // Replace with your Spotify link
    
    new QRCode(document.getElementById('qrcode'), {
        text: spotifyLink,
        width: 220,
        height: 220,
        colorDark: '#d62828',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    });
});
