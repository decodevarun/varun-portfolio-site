const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    const expanded = navLinks.classList.contains('open');
    navToggle.setAttribute('aria-expanded', String(expanded));
  });
}

const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const feedback = document.querySelector('#form-feedback');
    if (feedback) {
      feedback.textContent = 'Thanks! Your message was captured locally. Connect this form to your backend/API next.';
    }
    contactForm.reset();
  });
}
