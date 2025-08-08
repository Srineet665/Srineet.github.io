import { jsx as _jsx } from "https://esm.sh/react/jsx-runtime";
import { useEffect, useRef, useState } from "https://esm.sh/react";
export default function MusicPlayer() {
    const audioRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    useEffect(() => {
        audioRef.current = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3");
        audioRef.current.loop = true;
        audioRef.current.volume = 0.4;
        audioRef.current.play().catch(() => setPlaying(false));
        return () => {
            audioRef.current?.pause();
            audioRef.current = null;
        };
    }, []);
    function toggle() {
        if (!audioRef.current)
            return;
        if (playing) {
            audioRef.current.pause();
            setPlaying(false);
        }
        else {
            audioRef.current.play();
            setPlaying(true);
        }
    }
    return (_jsx("button", { onClick: toggle, "aria-label": "Toggle background music", children: playing ? "Pause Music" : "Play Music" }));
}
