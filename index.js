const openBtn = document.getElementById('menuBtn');
const xBtn = document.getElementById('closeBtn');
const nav = document.getElementById('sideNav');
const mobileMenuLinks = nav.querySelectorAll('a');

mobileMenuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.style.left = '-900px';
  });
});

nav.style.left = '-900px';

openBtn.onclick = function () {
  if (nav.style.left === '-900px') {
    nav.style.left = '0';
  } else {
    nav.style.left = '-900px';
  }
};

xBtn.onclick = function () {
  if (nav.style.left === '-900px') {
    nav.style.left = '0';
  } else {
    nav.style.left = '-900px';
  }
};
