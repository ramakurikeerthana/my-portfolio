/* ─── NAVBAR SCROLL ──────────────────────────────── */
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('back-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  if (window.scrollY > 500) {
    backTop.classList.add('visible');
  } else {
    backTop.classList.remove('visible');
  }
});

backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ─── MOBILE MENU ────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

/* ─── SMOOTH SCROLL ──────────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* ─── TYPING EFFECT ──────────────────────────────── */
const titles = [
  'Computer Science graduate',
  'Aspiring Software Developer',
  'Problem Solver',
  'Continuous Learner'
];
let titleIndex = 0;
let charIndex = 0;
let deleting = false;
const typedEl = document.getElementById('typed-text');

function type() {
  const current = titles[titleIndex];
  if (deleting) {
    typedEl.textContent = current.slice(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(type, 500);
      return;
    }
    setTimeout(type, 40);
  } else {
    typedEl.textContent = current.slice(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 2200);
      return;
    }
    setTimeout(type, 60);
  }
}
type();

/* ─── SCROLL REVEAL ──────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach(el => observer.observe(el));
