var button = document.querySelector('button');
var div = document.querySelector('div');

var pictures = ['pics/OMG.jpg', 'pics/pic1.jpg', 'pics/pic2.jpg', 'pics/pic3.jpg', 'pics/pic4.jpg', 'pics/pic5.jpg', 'pics/pic6.jpg', 'pics/pic7.jpg', 'pics/pic8.jpg', 'pics/pic9.jpg', 'pics/pic10.jpg', 'pics/pic11.jpg', 'pics/pic12.jpg', 'pics/pic13.jpg', 'pics/pic14.jpg', 'pics/pic15.jpg']
button.addEventListener('click', function() {
    var current = div.querySelector('img');

    if (current) {
        div.removeChild(current);
    }

    var img = document.createElement('img');
    var random = pictures[Math.floor(Math.random() * pictures.length)];

    img.src = random;
    img.onload = function() {
        img.width = img.naturalWidth / 5;
        img.height = img.naturalHeight / 5;
    }

    div.appendChild(img);
});

function moveButton() {
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);

    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

setInterval(moveButton, 1000);