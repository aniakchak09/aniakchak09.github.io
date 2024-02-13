function generateHeart() {
    var heart = document.createElement('div');
    heart.className = 'heart';

    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);

    heart.style.left = randomX + 'px';
    heart.style.top = randomY + 'px';

    document.body.appendChild(heart);

    setTimeout(function() {
        document.body.removeChild(heart);
    }, 5000);
}

setInterval(generateHeart, 300);