// Mobile menu
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

links.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  })
);

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Contact form
// No backend is wired up yet. To receive submissions, point the form at a
// service such as Formspree or Netlify Forms and replace the handler below.
const form = document.getElementById('contact-form');
const status = form.querySelector('.form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  form.querySelectorAll('[required]').forEach((field) => {
    const empty = !field.value.trim();
    field.classList.toggle('invalid', empty);
    if (empty) valid = false;
  });

  if (!valid) {
    status.textContent = 'Please enter your name and phone number.';
    status.className = 'form-status err';
    return;
  }

  status.textContent = "Thanks! We'll call you back shortly. For emergencies, please call (805) 555-0199.";
  status.className = 'form-status ok';
  form.reset();
});
