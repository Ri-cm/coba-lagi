function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = 3 + Math.random() * 3 + 's'; // durasi acak
    heart.style.fontSize = 16 + Math.random() * 20 + 'px'; // ukuran acak
    document.querySelector('.hearts-container').appendChild(heart);

    // hapus setelah jatuh
    setTimeout(() => {
        heart.remove();
    }, 6000);
}

// buat hati setiap 300ms
setInterval(createHeart, 300);

