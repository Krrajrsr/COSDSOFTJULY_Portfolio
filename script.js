document.addEventListener('DOMContentLoaded', function() {
  const scrollLinks = document.querySelectorAll('a.nav-link');

  for (const link of scrollLinks) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  }
});
