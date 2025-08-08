"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('toggle-dark');
    toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    const intro = document.getElementById('intro');
    const text = "Hi, I'm Srineet.";
    let i = 0;
    function type() {
        if (intro) {
            intro.textContent = text.slice(0, i++);
            if (i <= text.length) {
                setTimeout(type, 150);
            }
        }
    }
    type();
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.volume = 0.4;
        const playAudio = () => {
            audio.muted = false;
            audio.play().catch(() => {
                console.log('Autoplay prevented');
            });
        };
        playAudio();
        document.addEventListener('click', playAudio, { once: true });
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-section').forEach((section) => {
        observer.observe(section);
    });
});
