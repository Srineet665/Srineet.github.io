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

  return (
    <div className="hero-content">
      <h2>{displayed}</h2>
      <p>Data Dork &amp; Health Informaticist</p>
    </div>
  );
}
