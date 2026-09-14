const nav = document.querySelector('.nav');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

menu?.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  menu.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  menu.classList.toggle('is-open', open);
});

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('load', () => {
  if (window.instgrm?.Embeds) window.instgrm.Embeds.process();
});
