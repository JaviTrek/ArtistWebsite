// Highlights the sidebar link for the section currently on screen.
const links = document.querySelectorAll('.sidebar a[href^="#"]');
const sections = [...links].map(l => document.querySelector(l.getAttribute('href')));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-20% 0px -70% 0px' });

sections.forEach(s => s && observer.observe(s));