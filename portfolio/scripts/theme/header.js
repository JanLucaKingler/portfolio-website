const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

/* =========================
   Mobile Menu Toggle
========================= */

menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

/* =========================
   Scroll Active Navigation
========================= */

window.addEventListener('scroll', () => {

    sections.forEach(sec => {
        const rect = sec.getBoundingClientRect();
        const id = sec.getAttribute('id');

        if (rect.top <= 120 && rect.bottom >= 120) {

            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    header?.classList.toggle('sticky', window.scrollY > 100);

    menuIcon?.classList.remove('bx-x');
    navbar?.classList.remove('active');
});