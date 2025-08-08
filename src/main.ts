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
});
