document.querySelector('h2').addEventListener('click', function(event) {
    this.textContent = 'HAHA gotcha!' +
        ' Love youuuu!';

    var heart = document.createElement('div');
    // heart.textContent = '❤️';
    heart.className = 'heart';
    heart.style.left = event.clientX + 'px';
    heart.style.top = event.clientY + 'px';
    document.body.appendChild(heart);

    setTimeout(function() {
        document.body.removeChild(heart);
    }, 2000);
});