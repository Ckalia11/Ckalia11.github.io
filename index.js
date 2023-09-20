const currentPageUrl = window.location.href;

const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach((link) => {
  if (link.href === currentPageUrl) {
    link.classList.add('active-link');
  }
});

if (currentPageUrl.endsWith('/index.html')) {
  const aboutLink = document.querySelector('nav ul li a[href="index.html"]');
  if (aboutLink) {
    aboutLink.classList.add('active-link');
  }
}
