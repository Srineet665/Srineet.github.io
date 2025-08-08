document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggle-dark');
  if (toggle) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
    });
  }

  const cursor = document.getElementById('custom-cursor');
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  const intro = document.getElementById('intro');
  const text = "Hi, I'm Srineet.";
  let i = 0;

  function type() {
    intro.textContent = text.slice(0, i++);
    if (i <= text.length) {
      setTimeout(type, 150);
    }
  }

  type();
});

