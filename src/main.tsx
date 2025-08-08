import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import App from "./App";

function init() {
  const root = document.getElementById('react-root');
  if (root) {
    ReactDOM.createRoot(root).render(<App />);
  }

  const toggle = document.getElementById('toggle-dark') as HTMLButtonElement | null;
  toggle?.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });

  const audio = document.getElementById('bg-music') as HTMLAudioElement | null;
  if (audio) {
    audio.volume = 0.4;
    audio.play().catch(() => {
      console.log('Autoplay prevented');
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

