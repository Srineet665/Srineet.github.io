import { jsx as _jsx, jsxs as _jsxs } from "https://esm.sh/react/jsx-runtime";
import { useEffect, useState } from "https://esm.sh/react";
export default function App() {
    const text = "Hi, I'm Srineet.";
    const [displayed, setDisplayed] = useState("");
    useEffect(() => {
        let i = 0;
        const id = setInterval(() => {
            setDisplayed(text.slice(0, ++i));
            if (i === text.length) {
                clearInterval(id);
            }
        }, 150);
        return () => clearInterval(id);
    }, []);
    return (_jsxs("div", { className: "hero-content", children: [_jsx("h2", { children: displayed }), _jsx("p", { children: "Data Dork & Health Informaticist" })] }));
}
