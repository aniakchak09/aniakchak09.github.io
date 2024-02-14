var emojis = ['😍', '🥰', '😘', '😳', '🥵', '🤯', '🥺', '😈', '😼', '🥴', '😚']

function randomEmoji() {
    var emoji = document.createElement('div');
    emoji.className = 'emoji';

    var randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.innerText = randomEmoji;

    var randomX = Math.floor(Math.random() * window.innerWidth);
    var randomY = Math.floor(Math.random() * window.innerHeight);

    emoji.style.left = randomX + 'px';
    emoji.style.top = randomY + 'px';
    emoji.style.position = 'fixed';

    emoji.style.setProperty('--x', (Math.random() - 0.5) * window.innerWidth + 'px');
    emoji.style.setProperty('--y', (Math.random() - 0.5) * window.innerHeight + 'px');

    document.body.appendChild(emoji);

    setTimeout(function() {
        document.body.removeChild(emoji);
    }, 2500);
}

setInterval(randomEmoji, 250);