let noBtn = document.getElementById('no-btn');
let yesBtn = document.getElementById('yes-btn');
let popup = document.getElementById('popup');
let fireworks = document.getElementById('fireworks');
let romanticSong = document.getElementById('romantic-song');
let backgroundMusic = document.getElementById('background-music');
let video = document.getElementById('video');

// Ubah ke click: Tombol bergerak acak hanya saat diklik, bisa diklik berulang
noBtn.addEventListener('click', () => {
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

yesBtn.addEventListener('click', () => {
    popup.style.display = 'block';
    fireworks.style.display = 'block';
    romanticSong.play();
    setTimeout(() => {
        popup.style.display = 'none';
        fireworks.style.display = 'none';
        romanticSong.pause();
        showPage('page2');
        backgroundMusic.play();
    }, 5000);
});

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
}

// Tambahkan di akhir script.js, atau ganti bagian box1 event listener
document.getElementById('box1').addEventListener('click', () => {
    showPage('collage-page');
    
    // Array animasi random
    const animations = [ 'scale', 'slide'];
    
    // Ambil semua foto di collage
    const photos = document.querySelectorAll('.collage img');
    
    photos.forEach((photo, index) => {
        // Sequential fade-in: delay berdasarkan index
        setTimeout(() => {
            photo.style.opacity = '1';  // Fade in
            
            // Assign random animation
            const randomAnim = animations[Math.floor(Math.random() * animations.length)];
            photo.classList.add(randomAnim);
            
            // Opsional: Hapus class setelah animasi selesai (1s) agar tidak berulang
            setTimeout(() => {
                photo.classList.remove(randomAnim);
            }, 1000);
        }, index * 1200);  // Delay 500ms per foto
    });
});
document.getElementById('box2').addEventListener('click', () => {
    showPage('video-page');
    
    const video = document.getElementById('video');
    video.style.display = 'block';  // Paksa display block jika hidden
    video.load();  // Reload video untuk memastikan load
    
    video.play().catch(error => {
        console.log('Autoplay gagal: ', error);
        alert('Video tidak bisa autoplay. Klik play manual.');
    });
    
    video.addEventListener('play', () => backgroundMusic.pause());
    video.addEventListener('ended', () => backgroundMusic.play());
});
document.getElementById('box3').addEventListener('click', () => {
    showPage('letter-page');
    let paragraphs = document.querySelectorAll('.paragraph');
    paragraphs.forEach((p, index) => {
        setTimeout(() => {
            p.classList.add('active');
            setTimeout(() => p.classList.remove('active'), 3000);
        }, index * 4000);
    });
});

video.addEventListener('play', () => backgroundMusic.pause());
video.addEventListener('ended', () => backgroundMusic.play());