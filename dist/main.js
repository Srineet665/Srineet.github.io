import { jsx as _jsx } from "https://esm.sh/react/jsx-runtime";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import App from "./App";
document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('react-root');
    if (root) {
        ReactDOM.createRoot(root).render(_jsx(App, {}));
    }
    const toggle = document.getElementById('toggle-dark');
    toggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    const audio = document.getElementById('bg-music');
    if (audio) {
        audio.volume = 0.4;
        audio.play().catch(() => {
            console.log('Autoplay prevented');
        });
    }
});
