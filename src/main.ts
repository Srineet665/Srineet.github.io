document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-dark') as HTMLButtonElement | null;
  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const intro = document.getElementById('intro') as HTMLElement | null;
  const text: string = "Hi, I'm Srineet.";
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

  const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-section').forEach((section) => {
    observer.observe(section);
  });
});
