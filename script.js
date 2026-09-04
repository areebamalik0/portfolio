// Boot line typing
const bootTextEl = document.getElementById('boot-text');
const bootFull = 'initializing portfolio...';
let bi = 0;
function typeBoot() {
  if (bi <= bootFull.length) {
    bootTextEl.textContent = bootFull.slice(0, bi);
    bi++;
    setTimeout(typeBoot, 35);
  }
}
typeBoot();

setTimeout(() => {
  const boot = document.getElementById('boot');
  boot.classList.add('hide');
  setTimeout(() => boot.remove(), 600);
}, 1600);

// Hero role typing effect
const roles = ['CS Student.', 'ML & NLP Enthusiast.', 'Software Builder.'];
const typingEl = document.getElementById('typing');
let roleIndex = 0, charIndex = 0, deleting = false;

function typeLoop() {
  const current = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1400);
      return;
    }
  } else {
    charIndex--;
    typingEl.textContent = current.slice(0, charIndex);
    if (charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeLoop, deleting ? 40 : 70);
}
setTimeout(typeLoop, 1700);

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

// Scroll to top button
const topBtn = document.getElementById('topBtn');
window.addEventListener('scroll', () => {
  topBtn.classList.toggle('show', window.scrollY > 500);
});
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
