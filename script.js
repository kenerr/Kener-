const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const yearSpan = document.getElementById('year');

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.querySelector('.process__form');

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = 'Enviando…';
    }

    setTimeout(() => {
      form.reset();
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = 'Agendar ahora';
      }
      alert('¡Gracias! Pronto me pondré en contacto contigo.');
    }, 800);
  });
}
