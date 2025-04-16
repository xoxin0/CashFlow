const slider = document.querySelector('.reviews__slider');
const cards = document.querySelectorAll('.reviews__card');
let currentIndex = 0;

function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 32;
    slider.scrollTo({
        left: currentIndex * cardWidth,
        behavior: 'smooth'
    });
}

document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.reviews__card');
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const cardX = rect.left + rect.width/2;
        const cardY = rect.top + rect.height/2;
        
        const angleX = (mouseY - cardY) / 30;
        const angleY = (mouseX - cardX) / -30;

        card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
    });
});
