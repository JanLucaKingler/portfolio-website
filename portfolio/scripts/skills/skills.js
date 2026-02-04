document.querySelectorAll('.experience-details').forEach(item => {
    const starsContainer = item.querySelector('.star-rating');

    starsContainer.innerHTML = "";
    const count = parseInt(item.getAttribute('data-stars'), 10) || 0;

    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.classList.add('star');
        star.textContent = i < count ? '★' : '☆';
        starsContainer.appendChild(star);
    }
});