document.addEventListener('DOMContentLoaded', function() {
    const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
    const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

    let index = 0;

    const activePortfolio = () => {
        const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');
        const maxIndex = portfolioDetails.length - 1;

        if (imgSlide) {
            imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;
        }

        portfolioDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        portfolioDetails[index].classList.add('active');

        if (index === 0) {
            arrowLeft.classList.add('disabled');
        } else {
            arrowLeft.classList.remove('disabled');
        }
        if (index === maxIndex) {
            arrowRight.classList.add('disabled');
        } else {
            arrowRight.classList.remove('disabled');
        }
    };

    arrowRight.addEventListener('click', () => {
        if (arrowRight.classList.contains('disabled')) return;
        const portfolioDetails = document.querySelectorAll('.portfolio-detail');
        const maxIndex = portfolioDetails.length - 1;
        if (index < maxIndex) {
            index++;
            activePortfolio();
        }
    });

    arrowLeft.addEventListener('click', () => {
        if (arrowLeft.classList.contains('disabled')) return;
        if (index > 0) {
            index--;
            activePortfolio();
        }
    });

    activePortfolio();
});