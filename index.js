const currentPageUrl = window.location.href;

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  if (link.href === currentPageUrl) {
    link.classList.add('active-link');
  }
});
