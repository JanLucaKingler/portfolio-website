let menuIcon = document.getElementById('menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon?.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {

    let header = document.querySelector('header');
    let headerHeight = header ? header.offsetHeight : 0;
    let top = window.scrollY + headerHeight + 10;

    sections.forEach(sec => {
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });

    header?.classList.toggle('sticky', window.scrollY > 100);

    menuIcon?.classList.remove('bx-x');
    navbar?.classList.remove('active');
});