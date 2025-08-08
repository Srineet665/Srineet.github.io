import { jsx as _jsx } from "https://esm.sh/react/jsx-runtime";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";
import App from "./App";
import MusicPlayer from "./MusicPlayer";
function init() {
    const root = document.getElementById('react-root');
    if (root) {
        ReactDOM.createRoot(root).render(_jsx(App, {}));
    }
    const toggle = document.getElementById('toggle-dark');
    toggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
    const musicRoot = document.getElementById('music-player-root');
    if (musicRoot) {
        ReactDOM.createRoot(musicRoot).render(_jsx(MusicPlayer, {}));
    }
}
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
}
else {
    init();
}
