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
      feedback.textContent = 'Message received. Barun Pal will get back to you with a focused growth plan.';
    }
    contactForm.reset();
  });
}
